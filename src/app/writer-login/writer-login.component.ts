import { Component, OnInit } from '@angular/core';
import { WriterService } from '../services/writer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-writer-login',
  templateUrl: './writer-login.component.html',
  styleUrls: ['./writer-login.component.css']
})
export class WriterLoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private writerService: WriterService, private route: ActivatedRoute, private router: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
  }
  
  login(username: string, password: string){
      this.writerService.authenticate(username, password, () => {
        this.router.navigate(['/']);
      });
  }
}