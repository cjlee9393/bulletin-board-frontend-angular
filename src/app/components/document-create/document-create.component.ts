import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from 'src/app/models/document';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const wid = environment.wid;
const bid = environment.bid;

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent implements OnInit {
  @Input() document: Document;

  constructor(private documentService: DocumentService, private route: ActivatedRoute, private router: Router) {
    this.document = {} as Document;
  }

  ngOnInit(): void {
  }

  create(document: Document): void {
    this.documentService.createDocument(wid, bid, document).subscribe(res => {
      console.log('post reqeust sent');

      this.router.navigate(['/']);
    })
  }
}
