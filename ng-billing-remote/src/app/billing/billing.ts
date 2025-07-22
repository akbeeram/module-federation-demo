import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from 'ngShoppingHost/CounterStore';

@Component({
  selector: 'app-billing',
  imports: [CommonModule],
  templateUrl: './billing.html',
  styleUrl: './billing.less',
  standalone: true
})
export class Billing implements OnInit {
  @Input() billingData: any;
  @Output() receivedEvent: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private store: Store, private injector: Injector) {}

  public ngOnInit(): void {
      console.log('NG Billing Remote:::',this.billingData);
      this.loadService();
  }
  public handleBtnclick() {
    this.store.dispatch(increment());
    this.receivedEvent.emit('From NG Remote: hello, data received');
  }
  private async loadService() {
    const module = await import('ngShoppingHost/BillingUtil');
    const utilInstance: any = this.injector.get(module.BillingUtil);
    console.log(utilInstance?.billingData);
  }
}
