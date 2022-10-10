import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from 'src/app/models/document';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  @Input() document: Document;
  
  constructor(private documentService: DocumentService, private route: ActivatedRoute, private router: Router) {
    this.document = {} as Document;
  }

  ngOnInit(): void {
  }

  edit(document: Document): void {
    this.documentService.updateDocument(document).subscribe(res => {
      console.log('patch reqeust sent');

      this.router.navigate(['/']);
    })
  }
}