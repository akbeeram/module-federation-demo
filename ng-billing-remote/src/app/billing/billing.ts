import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from 'ngShoppingHost/CounterStore';

@Component({
  selector: 'app-billing',
  imports: [CommonModule],
  templateUrl: './billing.html',
  styleUrl: './billing.less',
  standalone: true,
})
export class Billing implements OnInit {
  @Input() billingData: any;
  @Output() onDataReceived: EventEmitter<any> = new EventEmitter<any>();

  constructor(private store: Store<{ count: number }>, private injector: Injector) { }

  public count: number = -1;

  public ngOnInit(): void {
    console.log(`NG Billing Remote:::${this.billingData}`)
    this.store.select('count').subscribe((e: number) => {
      this.count = e;
    });
  }
  public sendToHost() {
    this.onDataReceived.emit('Ok! Data received at NG Billing Remote');
  }
  public incCount() {
    this.store.dispatch(increment());
  }
  public decCount() {
    this.store.dispatch(decrement());
  }
}
