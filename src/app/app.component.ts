import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Angular App';
  constructor(private httpService:HttpClient){
  }
  arrBirds: string [];
  ngOnInit(){
    this.httpService.get('./assets/Birds.json').subscribe(
      data =>{
        this.arrBirds=data as string[];
        console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
  }
}
