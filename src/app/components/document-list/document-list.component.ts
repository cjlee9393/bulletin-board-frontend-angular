import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { DocumentService } from 'src/app/services/document.service';
import { environment } from 'src/environments/environment';

const bid = environment.bid;

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[];
  searchString: string;

  constructor(private documentService: DocumentService) {
    this.documents = [];
    this.searchString = '';
  }

  ngOnInit(): void {
    this.documentService.getDocuments(bid).subscribe(res => {
      this.documents = res;
    })
  }

  viewDocument(document: Document): void {
    alert(document)
  }

  search(searchString: string): void {
    const results = [];

    for (let document of this.documents){
      if (document.documentname.includes(searchString)){
        results.push(document);
      }
    }

    this.documents = results;
  }
}
