import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import React from 'react';
import { EventBusService } from '../services/event-bus-service';

@Component({
  selector: 'app-react-wrapper',
  imports: [],
  templateUrl: './react-wrapper.html',
  styleUrl: './react-wrapper.less'
})
export class ReactWrapper implements AfterViewInit {

  @ViewChild('reactWrapper', { static: true }) reactWrapper!: ElementRef;

  constructor(
    private eventBus: EventBusService) { }
  public async ngAfterViewInit() {
    const { default: ReactRemoteApp } = await loadRemoteModule({
      remoteEntry: 'http://localhost:5004/remoteEntry.js',
      remoteName: 'reactRemoteApp',
      exposedModule: './ReactRemoteApp'
    });
    import("react-dom/client").then(reactDOM => {
      const elem = reactDOM.createRoot(this.reactWrapper.nativeElement);
      elem.render(
        React.createElement(
          ReactRemoteApp, {
          dataFromHost: 'This is data from NG HOST',
          onReceviedData: this.onReceviedData
        }
        )
      );
      this.eventBus.onSendMessage('This is data from NG HOST');
    })
  }
  private onReceviedData = (e: any) => {
    console.log(e);
    this.eventBus.onReceiveMessage(e);
  }
}
