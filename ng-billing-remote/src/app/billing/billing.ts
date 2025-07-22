import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  
  constructor(private store: Store) {}

  public ngOnInit(): void {
      console.log('NG Billing Remote:::',this.billingData);
  }
  public handleBtnclick() {
    this.store.dispatch(increment());
    this.receivedEvent.emit('From NG Remote: hello, data received');
  }
}
