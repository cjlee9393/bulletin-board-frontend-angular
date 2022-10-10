import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { Input } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  isShowCommentView: boolean;
  isShowCommentEdit: boolean;

  constructor(private commentService: CommentService) {
    this.comment = {} as Comment;
    this.isShowCommentView = false;
    this.isShowCommentEdit = false;
  }

  ngOnInit(): void {
    this.isShowCommentView = true;
    this.isShowCommentEdit = false;
  }

  edit(comment: Comment): void {
    this.isShowCommentView = false;
    this.isShowCommentEdit = true;
  }
}