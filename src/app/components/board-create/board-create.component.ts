import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board';
import { BoardService } from 'src/app/services/board.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-create',
  templateUrl: './board-create.component.html',
  styleUrls: ['./board-create.component.css']
})
export class BoardCreateComponent implements OnInit {
  board: Board;

  constructor(private boardService: BoardService, private route: ActivatedRoute, private router: Router) {
    this.board = {} as Board;
  }

  ngOnInit(): void {
    
  }

  create(board: Board){
    this.boardService.createBoard(board).subscribe(res => {
      console.log('post request sent');
    })

    this.router.navigate(['/']);
  }
}