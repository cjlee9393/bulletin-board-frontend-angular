import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  @Input() comment: Comment;
  
  constructor(private commentService: CommentService, private route: ActivatedRoute, private router: Router) {
    this.comment = {} as Comment;
  }

  ngOnInit(): void {
  }

  edit(comment: Comment): void {
    this.commentService.updateComment(comment).subscribe(res => {
      console.log('patch reqeust sent');

      this.router.navigate(['/']);
    })
  }

}
