import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Writer } from '../models/writer';
import { environment } from 'src/environments/environment';

const API_HOST = environment.apiHost;
const token_auth = environment.token_auth;
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token_auth}`
})
const requestOptions = { headers: headers };

@Injectable({
  providedIn: 'root'
})

export class WriterService {
  username: string;
  point: number;
  token_auth: string;

  constructor(private httpClient: HttpClient) {
    this.username = '';
    this.point = 0;
    this.token_auth = '';
  }

  authenticate(username: string, password: string): Observable<Writer> {
    const path = `${API_HOST}/authenticate?username=${username}&password=${password}`

    return this.httpClient.get(path) as Observable<Writer>
  }

  getWriters(): Observable<Writer[]> {
    const path = `${API_HOST}/writers`

    return this.httpClient.get(path, requestOptions) as Observable<Writer[]>
  }

  deliverPoint(srcWid: number, dstWid: number, point: number): Observable<Writer> {
    const path = `${API_HOST}/deliverPoint?srcWid=${srcWid}&dstWid=${dstWid}&point=${point}`

    return this.httpClient.get(path, requestOptions) as Observable<Writer>
  }
}