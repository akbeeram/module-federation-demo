import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-wc-wrapper',
  imports: [],
  templateUrl: './wc-wrapper.html',
  styleUrl: './wc-wrapper.less'
})
export class WcWrapper implements AfterViewInit, OnInit {
  @ViewChild('wcWrapper', {static: true}) wcWrapper!: ElementRef;

  public ngOnInit(): void {
      window.addEventListener('wcUsersAppEvent', (e: any) => {
        console.log(e?.detail);
      })
  }

  public ngAfterViewInit(): void {
      const wc = document.createElement('users-app');
      wc.setAttribute('usersData', 'This is input from Angular Host');
      this.wcWrapper.nativeElement.appendChild(wc);
  }
}
