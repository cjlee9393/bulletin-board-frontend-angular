import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { Comment } from 'src/app/models/comment';
import { DocumentService } from 'src/app/services/document.service';
import { CommentService } from 'src/app/services/comment.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


const bid = environment.bid;

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[];
  document: Document;
  comments: Comment[];
  searchString: string;
  
  isShowDocument: boolean;
  isShowDocumentList: boolean;

  mySubscription;

  constructor(private documentService: DocumentService, private commentService: CommentService, private router: Router) {
    this.documents = [];
    this.document = {} as Document;
    this.comments = [];
    this.searchString = '';
    this.isShowDocument = false;
    this.isShowDocumentList = false;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         // Trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.documentService.getDocuments(bid).subscribe(res => {
      this.documents = res;
    })

    this.isShowDocument = false;
    this.isShowDocumentList = true;
  }

  viewDocument(document: Document): void {
    this.commentService.getComments(document.did).subscribe(res => {
      this.comments = res;

      console.log(this.comments);
    })
    this.document = document;
    this.isShowDocument = true;
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
