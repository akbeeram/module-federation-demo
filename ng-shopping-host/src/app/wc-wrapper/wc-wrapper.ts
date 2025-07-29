import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EventBusService } from '../services/event-bus-service';

@Component({
  selector: 'app-wc-wrapper',
  imports: [],
  templateUrl: './wc-wrapper.html',
  styleUrl: './wc-wrapper.less'
})
export class WcWrapper implements AfterViewInit, OnInit {
  @ViewChild('wcWrapper', { static: true }) wcWrapper!: ElementRef;

  constructor(
    private eventBus: EventBusService) { }
  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    const wc = document.createElement('users-app');
    wc.setAttribute('usersData', 'This is data from NG HOST');
    wc.addEventListener('onWcReceviedData', (e: any) => {
      console.log(e);
      this.eventBus.onReceiveMessage(e?.detail)
    })
    this.wcWrapper.nativeElement.appendChild(wc);
    this.eventBus.onSendMessage('This is data from NG HOST')
  }
}
