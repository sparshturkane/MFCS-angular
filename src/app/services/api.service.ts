import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { StoreService } from './store.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseURL: String;
  constructor(private httpClient: HttpClient, private storeService: StoreService) {
    this.baseURL = environment.BaseURL
  }


  public register(postParams) {

    this.storeService.setLoaderData('block');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.httpClient.post(this.baseURL + 'users/register', postParams, {
      headers: headers
    }).subscribe(
      (data) => {
        this.storeService.setRegister(data);
        this.storeService.setLoaderData('none');
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured category.");
        } else {
          this.storeService.setRegister(err.error);
          this.storeService.setLoaderData('none');
        }
      }
    );
  }

  public login(postParams) {

    this.storeService.setLoaderData('block');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.httpClient.post(this.baseURL + 'users/login', postParams, {
      headers: headers
    }).subscribe(
      (data) => {
        this.storeService.setLogin(data);
        this.storeService.setLoaderData('none');
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured category.");
        } else {
          this.storeService.setLogin(err.error);
          this.storeService.setLoaderData('none');
        }
      }
    );
  }

  public transaction_get(token) {

    this.storeService.setLoaderData('block');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('authorization', 'Bearer ' + token);

    return this.httpClient.get(this.baseURL + 'transactions/', {
      headers: headers
    }).subscribe(
      (data) => {
        this.storeService.setTransaction(data);
        this.storeService.setLoaderData('none');
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured category.");
        } else {
          this.storeService.setTransaction(err.error);
          this.storeService.setLoaderData('none');
        }
      }
    );
  }

  public transaction_create(postParams, token) {

    this.storeService.setLoaderData('block');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('authorization', 'Bearer ' + token);

    return this.httpClient.post(this.baseURL + 'transactions/', postParams, {
      headers: headers
    }).subscribe(
      (data) => {
        this.storeService.setTransaction(data);
        this.storeService.setLoaderData('none');
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured category.");
        } else {
          this.storeService.setTransaction(err.error);
          this.storeService.setLoaderData('none');
        }
      }
    );
  }


  public transaction_update(postParams, token) {

    this.storeService.setLoaderData('block');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('authorization', 'Bearer ' + token);

    return this.httpClient.patch(this.baseURL + 'transactions/' + postParams.transactionId, postParams, {
      headers: headers
    }).subscribe(
      (data) => {
        this.storeService.setTransaction(data);
        this.storeService.setLoaderData('none');
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured category.");
        } else {
          this.storeService.setTransaction(err.error);
          this.storeService.setLoaderData('none');
        }
      }
    );
  }


  public transaction_delete(postParams, token) {

    this.storeService.setLoaderData('block');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('authorization', 'Bearer ' + token);

    return this.httpClient.delete(this.baseURL + 'transactions/' + postParams, {
      headers: headers
    }).subscribe(
      (data) => {
        this.storeService.setTransaction(data);
        this.storeService.setLoaderData('none');
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured category.");
        } else {
          this.storeService.setTransaction(err.error);
          this.storeService.setLoaderData('none');
        }
      }
    );
  }


}
