import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../models/document';
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
export class DocumentService {

  constructor(private httpClient: HttpClient) { }

  getDocuments(bid: number): Observable<Document[]> {
    const path = `${API_HOST}/documents/${bid}`

    return this.httpClient.get(path, requestOptions) as Observable<Document[]>
  }

  updateDocument(document: Document): Observable<Object> {
    const did = document.did;
    const documentname = document.documentname;
    const content = document.content;
    
    const path = `${API_HOST}/documents/${did}`
    const body = {
                  documentname: documentname,
                  content: content
                };

    return this.httpClient.patch(path, body, requestOptions) as Observable<Object>;
  }

  createDocument(wid: number, bid: number, document: Document): Observable<Object> {
    
    const path = `${API_HOST}/documents`
    const body = {
                  wid: wid,
                  bid: bid,
                  documentname: document.documentname,
                  content: document.content
                };

    return this.httpClient.post(path, body, requestOptions) as Observable<Object>;
  }
}