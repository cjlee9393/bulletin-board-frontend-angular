import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../models/document';
import { environment } from 'src/environments/environment';
import { WriterService } from './writer.service';

const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  tableHeaders: string[] = ['did', 'documentname'];

  constructor(private httpClient: HttpClient, private writerService: WriterService) { }

  getDocuments(bid: number): Observable<Document[]> {
    const path = `${API_HOST}/documents/${bid}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.writerService.token_auth}`
    })
    const requestOptions = { headers: headers };

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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.writerService.token_auth}`
    })
    const requestOptions = { headers: headers };

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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.writerService.token_auth}`
    })
    const requestOptions = { headers: headers };

    return this.httpClient.post(path, body, requestOptions) as Observable<Object>;
  }

  deleteDocument(did: number): Observable<Object> {
    const path = `${API_HOST}/documents?did=${did}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.writerService.token_auth}`
    })
    const requestOptions = { headers: headers };

    return this.httpClient.delete(path, requestOptions) as Observable<Object>;
  }

  getTableHearders(): string[] {
    return this.tableHeaders;
  }
}