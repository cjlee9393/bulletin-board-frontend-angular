import { Component, OnInit } from '@angular/core';
import { WriterService } from '../services/writer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-writer-register',
  templateUrl: './writer-register.component.html',
  styleUrls: ['./writer-register.component.css']
})
export class WriterRegisterComponent implements OnInit {
  username: string;
  password: string;
  passwordRepeat: string;

  constructor(private writerService: WriterService, private router: Router) {
    this.username = '';
    this.password = '';
    this.passwordRepeat = '';
  }

  ngOnInit(): void {
  }

  register(username: string, password: string, passwordRepeat: string): void{
    if (password.localeCompare(passwordRepeat) != 0){
      const err = new Error();
      err.name = "PasswordRepeatNotSameError";
      err.message = "Password repeat is not the same as password";
      alert(err.name + ': ' + err.message);
      throw err;
    }

    this.writerService.register(username, password).subscribe(res => {
      console.log(res);

      this.router.navigate(['/'])
    })
  }
}