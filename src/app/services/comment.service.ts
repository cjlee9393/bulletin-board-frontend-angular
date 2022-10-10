import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {}

  getComments(did: number): Observable<Comment[]> {
    const path = `${API_HOST}/comments/${did}`

    return this.httpClient.get(path) as Observable<Comment[]>
  }
}