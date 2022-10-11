import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { Document } from 'src/app/models/document';
import { CommentService } from 'src/app/services/comment.service';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  comment: Comment;
  @Input() document: Document;

  constructor(private commentService: CommentService, private router: Router) {
    this.comment = {} as Comment;
    this.document = {} as Document;
  }

  ngOnInit(): void {
  }

  create(did: number, comment: Comment): void {
    this.commentService.createComment(did, comment).subscribe(res => {
      console.log('post request sent');

      this.router.navigate(['/']);
    })
  }
}
