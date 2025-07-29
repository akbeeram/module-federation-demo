import { AfterViewInit, ChangeDetectorRef, Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WcWrapper } from "../wc-wrapper/wc-wrapper";
import { ReactWrapper } from "../react-wrapper/react-wrapper";
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { EventBusService } from '../services/event-bus-service';
import { decrement, increment } from '../../store';

@Component({
  selector: 'app-demo',
  imports: [WcWrapper, ReactWrapper, CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.less'
})
export class Demo implements OnInit, AfterViewInit {
  [x: string]: any;
  @ViewChild('ngBillingRemote', { read: ViewContainerRef }) ngBillingRemote!: ViewContainerRef;

  constructor(private injector: Injector,
    private eventBus: EventBusService,
    private store: Store<{ count: number }>,
    private cdr: ChangeDetectorRef) {

  }

  public messages: any;
  public count: number = -1;

  public ngOnInit(): void {
    this.messages = this.eventBus.messages;
    this.store.select('count').subscribe((e: number) => {
      this.count = e;
    });
  }
  public async ngAfterViewInit() {
    const { Billing } = await import('ngBillingRemote/BillingComponent');
    const billComp = this.ngBillingRemote.createComponent(Billing, {
      injector: this.injector
    });
    billComp.setInput('billingData', 'This is data from NG HOST');
    (billComp.instance as any).onDataReceived.subscribe((e: any) => {
      console.log(`NG Host:::${e}`)
      this.eventBus.onReceiveMessage(e)
    });
    this.eventBus.onSendMessage('This is data from NG HOST');
  }
  public sendUpdateToRemote(app: string) {

  }
  public incrementCount() {
    this.store.dispatch(increment());
  }
  public decrementCount() {
    this.store.dispatch(decrement());
  }
}
