import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
export class CommentService {

  constructor(private httpClient: HttpClient) {}

  getComments(did: number): Observable<Comment[]> {
    const path = `${API_HOST}/comments/${did}`

    return this.httpClient.get(path, requestOptions) as Observable<Comment[]>
  }

  updateComment(comment: Comment): Observable<Object> {
    const cid = comment.cid;
    const content = comment.content;
    
    const path = `${API_HOST}/comments/${cid}`
    const body = {
                  content: content
                };

    return this.httpClient.patch(path, body, requestOptions) as Observable<Object>;
  }
}