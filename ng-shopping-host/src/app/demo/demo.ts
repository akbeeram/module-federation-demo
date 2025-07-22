import { AfterViewInit, ChangeDetectorRef, Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WcWrapper } from "../wc-wrapper/wc-wrapper";
import { ReactWrapper } from "../react-wrapper/react-wrapper";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  imports: [WcWrapper, ReactWrapper, CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.less'
})
export class Demo implements OnInit, AfterViewInit{
[x: string]: any;
  @ViewChild('ngBillingRemote', { read: ViewContainerRef}) ngBillingRemote!: ViewContainerRef;
  @ViewChild('ngOrdersRemote', { read: ViewContainerRef}) ngOrdersRemote!: ViewContainerRef;

  constructor(private injector: Injector, private cdr: ChangeDetectorRef) {

  }

  public messages: string[] = [];
  public ngOnInit(): void {
      
  }
  public async ngAfterViewInit() {
      const {Billing} = await import('ngBillingRemote/BillingComponent');
      const billingComponent = this.ngBillingRemote.createComponent(Billing, {
        injector: this.injector
      });
      billingComponent.setInput('billingData', 'This is input from Angular Host');
        this.messages.unshift('Sent to NG Remote: This is input from Angular Host');
      (billingComponent.instance as any).receivedEvent?.subscribe((e: any) => {
        this.messages.unshift(e);
        console.log(e)
        this.cdr.detectChanges();
      })
      const {Orders} = await import('ngOrdersRemote/OrdersComponent');
      this.ngOrdersRemote.createComponent(Orders, {
        injector: this.injector
      });
  }
}
