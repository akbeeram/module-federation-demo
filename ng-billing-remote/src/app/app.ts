import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Billing } from "./billing/billing";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Billing],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('ng-billing-remote');
}
