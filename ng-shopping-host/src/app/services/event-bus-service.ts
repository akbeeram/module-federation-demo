import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  messages = signal<Record<string, string>[]>([
    // {
    //   type: 'I', msg: 'received'
    // }
  ]);

  public onSendMessage(msg: string) {
    this.messages.update(msgs => [{
      type: 'O',
      msg
    }, ...msgs])
  }

  public onReceiveMessage(msg: string) {
    this.messages.update(msgs => [{ type: 'I', msg }, ...msgs])
  }
}
