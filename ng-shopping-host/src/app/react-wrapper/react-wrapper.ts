import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-react-wrapper',
  imports: [],
  templateUrl: './react-wrapper.html',
  styleUrl: './react-wrapper.less'
})
export class ReactWrapper implements AfterViewInit {

  @ViewChild('reactWrapper', {static: true}) reactWrapper!: ElementRef;

  public async ngAfterViewInit() {
    const {default: ReactRemoteApp} = await loadRemoteModule({
      remoteEntry: 'http://localhost:5004/remoteEntry.js',
      remoteName: 'reactRemoteApp',
      exposedModule: './ReactRemoteApp'
    });
    import("react-dom/client").then(reactDOM => {
      const elem = reactDOM.createRoot(this.reactWrapper.nativeElement);
      elem.render(ReactRemoteApp({
        dataFromNgHost: 'This is data from NG Host', 
        onDataReceived: this.handleDataReceived
      }));
    })
  }
  private handleDataReceived = (e: any) => {
    console.log(e);
  }
}
