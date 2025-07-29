import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styleUrl: './orders.less'
})
export class Orders implements OnInit {
  @Input() ordersData: any;
  @Output() onDataReceived: EventEmitter<any> = new EventEmitter<any>();

  public ngOnInit(): void {
    console.log(`NG Orders Remote:::${this.ordersData}`);
  }
  public sendToHost() {
    this.onDataReceived.emit('Ok! Data received at NG Orders Remote');
  }
}
