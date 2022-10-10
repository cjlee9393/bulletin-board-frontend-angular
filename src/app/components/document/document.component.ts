import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Document } from 'src/app/models/document';
import { Comment } from 'src/app/models/comment';
import { DocumentService } from 'src/app/services/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  @Input() document: Document;
  @Input() comments: Comment[];

  isShowDocumentView: boolean;
  isShowDocumentEdit: boolean;

  constructor(private documentService: DocumentService, private route: ActivatedRoute, private router: Router) {
    this.document = {} as Document;
    this.comments = [];
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
    this.documentService.deleteDocument(this.document.did).subscribe(res => {
      console.log('delete reqeust sent');

      this.router.navigate(['/']);
    })
  }
}