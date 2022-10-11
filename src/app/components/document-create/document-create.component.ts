import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { BoardService } from 'src/app/services/board.service';
import { Document } from 'src/app/models/document';
import { ActivatedRoute, Router } from '@angular/router';
import { WriterService } from 'src/app/services/writer.service';
import { Writer } from 'src/app/models/writer';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent implements OnInit {
  @Input() document: Document;
  loggedInWriter: Writer;

  constructor(private documentService: DocumentService, private boardService: BoardService, private writerService: WriterService, private router: Router) {
    this.document = {} as Document;
    this.loggedInWriter = {} as Writer;
  }

  ngOnInit(): void {
    this.writerService.statusChange().subscribe(res => {
      this.loggedInWriter = res;
    })
  }

  create(document: Document): void {
    const wid = this.loggedInWriter.wid;
    const bid = this.boardService.getBoard().bid;

    this.documentService.createDocument(wid, bid, document).subscribe(res => {
      console.log('post reqeust sent');

      this.router.navigate(['/']);
    })
  }
}
