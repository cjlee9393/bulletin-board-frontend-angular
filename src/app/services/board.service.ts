import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) {}

  getBoards(): Observable<Board[]> {
    const path = `${API_HOST}/boards`

    return this.httpClient.get(path) as Observable<Board[]>
  }
}