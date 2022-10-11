import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WriterService } from './writer.service';

const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient, private writerService: WriterService) {}

  getComments(did: number): Observable<Comment[]> {
    const path = `${API_HOST}/comments/${did}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.writerService.token_auth}`
    })
    const requestOptions = { headers: headers };

    return this.httpClient.get(path, requestOptions) as Observable<Comment[]>
  }

  updateComment(comment: Comment): Observable<Object> {
    const cid = comment.cid;
    const content = comment.content;
    
    const path = `${API_HOST}/comments/${cid}`
    const body = {
      content: content
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.writerService.token_auth}`
    })
    const requestOptions = { headers: headers };

    return this.httpClient.patch(path, body, requestOptions) as Observable<Object>;
  }
}