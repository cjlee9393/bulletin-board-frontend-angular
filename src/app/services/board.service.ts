import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
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
export class BoardService {
  board: Board;

  constructor(private httpClient: HttpClient) {
    this.board = {} as Board;
  }

  getBoards(): Observable<Board[]> {
    const path = `${API_HOST}/boards`

    return this.httpClient.get(path, requestOptions) as Observable<Board[]>
  }

  setBoard(board: Board): void {
    this.board = board;
  }

  getBoard(): Board {
    return this.board;
  }
}