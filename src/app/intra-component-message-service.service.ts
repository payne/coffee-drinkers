import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Drinker } from './drinker';

@Injectable()
export class IntraComponentMessageServiceService {
  private subject = new Subject<any>();
 
  constructor() { }

  sendMessage(drinker: Drinker) {
      this.subject.next({ drinker });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }


}
