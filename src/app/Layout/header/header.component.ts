import { Component, OnInit } from '@angular/core';
import { WriterService } from 'src/app/services/writer.service';
import { BoardService } from 'src/app/services/board.service';
import { environment } from 'src/environments/environment';
import { Board } from 'src/app/models/board';
import { ActivatedRoute, Router } from '@angular/router';

const username = environment.username;
const password = environment.password;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  point: number;
  boards: Board[];
  selectedBoard: Board;

  constructor(private writerService: WriterService, private boardService: BoardService, private route: ActivatedRoute, private router: Router) {
    this.username = '';
    this.point = 0;
    this.boards = [];
    this.selectedBoard = {} as Board;
  }

  ngOnInit(): void {
    this.writerService.authenticate(username, password).subscribe(res => {
      this.username = res.username;
      this.point = res.point;
    })

    this.boardService.getBoards().subscribe(res => {
      this.boards = res;
    })
  }

  setBoard(board: Board): void {
    this.boardService.setBoard(board);

    this.router.navigate(['/']);
  }
}