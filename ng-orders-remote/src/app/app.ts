import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Orders } from "./orders/orders";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Orders],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('ng-orders-remote');
}
