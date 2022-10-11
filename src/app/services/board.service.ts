import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WriterService } from './writer.service';

import { Subject } from 'rxjs';

const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  board: Board;
  private isChanged: Subject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private httpClient: HttpClient, private writerService: WriterService) {
    this.board = {} as Board;
  }

  getBoards(): Observable<Board[]> {
    const path = `${API_HOST}/boards`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.writerService.token_auth}`
    })
    const requestOptions = { headers: headers };

    return this.httpClient.get(path, requestOptions) as Observable<Board[]>
  }

  setBoard(board: Board): void {
    this.board = board;
  }

  getBoard(): Board {
    return this.board;
  }

  createBoard(board: Board): Observable<Object> {
    this.isChanged.next(false);

    const path = `${API_HOST}/boards`
    const body = {
      boardname: board.boardname
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.writerService.token_auth}`
    })
    const requestOptions = { headers: headers };

    this.isChanged.next(true);

    return this.httpClient.post(path, body, requestOptions) as Observable<Object>
  }

  statusChange(): Observable<boolean> {

    return this.isChanged.asObservable();
  }
}