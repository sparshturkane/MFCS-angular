import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  // REGISTER DATA
  private registerApiData;
  public registerApiDataChanged = new Subject<any>();

  getRegister() {
    return this.registerApiData;
  }

  setRegister(response) {
    this.registerApiData = response;
    this.registerApiDataChanged.next(this.registerApiData);
  }

  // LOGIN DATA
  private loginApiData;
  public loginApiDataChanged = new Subject<any>();

  getLogin() {
    return this.loginApiData;
  }

  setLogin(response) {
    this.loginApiData = response;
    this.loginApiDataChanged.next(this.loginApiData);
  }

  // TRANSACTION DATA
  private transactionApiData;
  public transactionApiDataChanged = new Subject<any>();

  getTransaction() {
    return this.transactionApiData;
  }

  setTransaction(response) {
    this.transactionApiData = response;
    this.transactionApiDataChanged.next(this.transactionApiData);
  }

  // USER LOADER DATA
  private loaderData;
  public loaderDataChanged = new Subject<any>();

  getLoaderData() {
    return this.loaderData;
  }

  setLoaderData(Response) {
    this.loaderData = Response;
    this.loaderDataChanged.next(this.loaderData);
  }
}
