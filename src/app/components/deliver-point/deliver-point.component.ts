import { Component, OnInit } from '@angular/core';
import { Writer } from 'src/app/models/writer';
import { environment } from 'src/environments/environment';
import { WriterService } from 'src/app/services/writer.service';

const username = environment.username;
const password = environment.password;

@Component({
  selector: 'app-deliver-point',
  templateUrl: './deliver-point.component.html',
  styleUrls: ['./deliver-point.component.css']
})
export class DeliverPointComponent implements OnInit {
  loggedInWriter: Writer;
  selectedWriter: Writer;
  writers: Writer[];
  point: number;

  constructor(private writerService: WriterService) {
    this.loggedInWriter = {} as Writer;
    this.selectedWriter = {} as Writer;
    this.writers = [];
    this.point=0;
  }

  ngOnInit(): void {
    this.writerService.authenticate(username, password).subscribe(res => {
      this.loggedInWriter = res;
    })

    this.writerService.getWriters().subscribe(res => {
      this.writers = res;
    })
  }

  deliverPoint(srcWriter: Writer, dstWriter: Writer, point: number): void {
    if (srcWriter.point < point) {
      const err = new Error();
      err.name = "PointNotEnoughError"
      err.message = "point to deliver is not enough"
      
      alert(err.name + ': ' + err.message)
      throw err
    }
    
    this.writerService.deliverPoint(srcWriter.wid, dstWriter.wid, point).subscribe(res => {
      console.log(res)
    });
  }
}