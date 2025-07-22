import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingUtil {
  private billingData: any = "BillingUtil private data";

  public getBillingData() {
    return this.billingData;
  }
}
