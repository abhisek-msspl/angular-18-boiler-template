import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
export interface IUnsaveFormCheck {
  checkChanges: boolean;
  valueModified: boolean;
  submitForm: boolean;
}

@Injectable({ providedIn: 'root' })
export class CommonService {
  public aclBroadcastChannel: BroadcastChannel = new BroadcastChannel('aclChannel');

  /* Error interceptor properties */
  public isRefreshingToken = false;
  public tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  /* Setting loader status */
  private _loaderSubject = new BehaviorSubject<boolean>(true);
  public loaderSource$ = this._loaderSubject.asObservable();

  public setLoadingStatus(type: boolean): void {
    this._loaderSubject.next(type);
  }

  /* token info backup for reuse token */
  private _tokenInfoSubject = new BehaviorSubject<string | null>(null);
  public tokenInfoSource$ = this._tokenInfoSubject.asObservable();

  public saveTokenInfo(type: string | null) {
    this._tokenInfoSubject.next(type);
  }

  /* Set access controls *ACL* */
  private accessControls = new BehaviorSubject<IMainMenu[] | null>(null);
  public accessControls$ = this.accessControls.asObservable();

  public setAccessControls(data: IMainMenu[], needBroadcast = true) {
    this.accessControls.next(data);
    if (needBroadcast) this.aclBroadcastChannel.postMessage(data);
  }
}
