import { Component, OnInit } from '@angular/core';
import { WriterService } from 'src/app/services/writer.service';
import { BoardService } from 'src/app/services/board.service';
import { environment } from 'src/environments/environment';
import { Board } from 'src/app/models/board';
import { ActivatedRoute, Router } from '@angular/router';

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
  isLoggedin: boolean;

  constructor(private writerService: WriterService, private boardService: BoardService, private route: ActivatedRoute, private router: Router) {
    this.username = '';
    this.point = 0;
    this.boards = [];
    this.selectedBoard = {} as Board;
    this.isLoggedin = false;
  }

  ngOnInit(): void {
    this.writerService.statusChange().subscribe(res => {
      if (res.username){
        this.username = res.username;
        this.point = res.point;
        this.isLoggedin = true;

        this.boardService.getBoards().subscribe(res => {
          this.boards = res;
        })
      }
    })    

    this.boardService.statusChange().subscribe(res => {
      if (res) {
        this.boardService.getBoards().subscribe(res => {
          this.boards = res;
        })
      }
    })
  }

  setBoard(board: Board): void {
    this.boardService.setBoard(board);

    this.router.navigate(['/']);
  }

  logout(): void {
    this.isLoggedin = false;
    this.writerService.logout();
    this.router.navigate(['/']);
  }
}