import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../models/document';
import { environment } from 'src/environments/environment';

const API_HOST = environment.apiHost;
const token_auth = environment.token_auth;

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient: HttpClient) { }

  getDocuments(bid: number): Observable<Document[]> {
    const path = `${API_HOST}/documents/${bid}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token_auth}`
    })
    const requestOptions = { headers: headers };

    return this.httpClient.get(path, requestOptions) as Observable<Document[]>
  }
}