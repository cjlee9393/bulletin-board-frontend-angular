import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Writer } from '../models/writer';
import { environment } from 'src/environments/environment';

const API_HOST = environment.apiHost;

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

  getWriters(): Observable<Writer> {
    const path = `${API_HOST}/writers`

    return this.httpClient.get(path) as Observable<Writer>
  }

  deliverPoint(srcId: number, dstId: number, point: number): Observable<Writer> {
    const path = `${API_HOST}/deliverPoint?srcId=${srcId}&dstId=${dstId}&point=${point}`

    return this.httpClient.get(path) as Observable<Writer>
  }
}