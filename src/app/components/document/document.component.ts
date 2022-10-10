import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Document } from 'src/app/models/document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  @Input() document: Document;

  isShowDocumentView: boolean;
  isShowDocumentEdit: boolean;

  constructor() {
    this.document = {} as Document;
    this.isShowDocumentView = false;
    this.isShowDocumentEdit = false;
  }

  ngOnInit(): void {
    this.isShowDocumentView = true;
    this.isShowDocumentEdit = false;
  }

  editDocument(): void {
    this.isShowDocumentView = false;
    this.isShowDocumentEdit = true;
  }

  deleteDocument(): void {
    alert('deleteDocument()')
  }
}