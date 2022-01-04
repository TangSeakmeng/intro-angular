import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ApiResultStore } from '../stores/api-result.store';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  // @observable public isLoading: boolean = false;
  // @observable public agentDepartment: any;

  // endpoint = 'http://localhost:3000/api';
  // httpHeader = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  //   })
  // };

  // httpHeaderWithToken = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  //     'Authorization': 'Bearer ' + this.agentDepartmentJSONMapping()?.token
  //   })
  // };

  constructor(
    private apiResultStore: ApiResultStore,
    private httpClient: HttpClient,
  ) {

  }

  async getPosts() {
    const result = await this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts').toPromise();
    this.apiResultStore.result = result;
  }

  async getAlbums() {
    const result = await this.httpClient.get<any>('https://jsonplaceholder.typicode.com/albums').toPromise();
    this.apiResultStore.result = result;
  }

  processError(err: { error: { message: string; }; status: any; message: any; }) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }

}
