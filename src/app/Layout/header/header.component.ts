import { Component, OnInit } from '@angular/core';
import { WriterService } from 'src/app/services/writer.service';
import { environment } from 'src/environments/environment';

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

  constructor(private writerService: WriterService) {
    this.username = '';
    this.point = 0;
  }

  ngOnInit(): void {
    this.writerService.authenticate(username, password).subscribe(res => {
      this.username = res.username;
      this.point = res.point;
    })
  }
}