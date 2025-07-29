import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BillingUtil } from './billing-util';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.less',
  providers: [BillingUtil]
})
export class App implements OnInit {
  constructor(private billingUtil: BillingUtil) { }

  protected readonly title = signal('ng-shopping-host');

  public ngOnInit(): void {
    (window as any)['BillingUtilService'] = this.billingUtil;
  }
}
