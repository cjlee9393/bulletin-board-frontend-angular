import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Writer } from '../models/writer';
import { environment } from 'src/environments/environment';

const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})

export class WriterService {
  username: string;
  wid: number;
  point: number;
  token_auth: string;
  currentWriter: BehaviorSubject<Writer>;

  constructor(private httpClient: HttpClient) {
    this.username = '';
    this.wid = 0;
    this.point = 0;
    this.token_auth = '';
    this.currentWriter = new BehaviorSubject({} as Writer)
  }

  authenticate(username: string, password: string, callback: Function): void {
    const path = `${API_HOST}/authenticate?username=${username}&password=${password}`

    this.httpClient.get(path).subscribe(res => {
      if (!res){
        const err = new Error();
        err.name = "LoginFailError";
        err.message = "Username or password is incorrect";

        alert(err.name + ': ' + err.message);

        throw err;
      }

      const writer = {
        wid: (res as Writer).wid,
        username: (res as Writer).username,
        password: (res as Writer).password,
        point: (res as Writer).point,
      }
      this.wid = (res as any).wid;
      this.token_auth = (res as any).token_auth;
      this.currentWriter.next(writer);

      callback();
    })
  }

  logout(): void {
    this.currentWriter.next({} as Writer)
    this.username = '';
    this.point = 0;
    this.token_auth = '';
  }

  register(username: string, password: string): Observable<Object> {
    const path = `${API_HOST}/writers`
    const body = {
      username: username,
      password: password
    }

    return this.httpClient.post(path, body) as Observable<Object>
  }

  getWriters(): Observable<Writer[]> {
    const path = `${API_HOST}/writers`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token_auth}`
    })
    const requestOptions = { headers: headers };

    return this.httpClient.get(path, requestOptions) as Observable<Writer[]>
  }

  deliverPoint(srcWid: number, dstWid: number, point: number): Observable<Writer> {
    const path = `${API_HOST}/deliverPoint?srcWid=${srcWid}&dstWid=${dstWid}&point=${point}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token_auth}`
    })
    const requestOptions = { headers: headers };

    return this.httpClient.get(path, requestOptions) as Observable<Writer>
  }

  statusChange(): Observable<Writer> {
    return this.currentWriter.asObservable();
  }
}