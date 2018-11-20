import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import {Heros} from '../mock-heros'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros=Heros;
  hero: Hero={
    id:1,
    name:'Salman Khan'
  };
  constructor() { }

  ngOnInit() {
  }
   test(){
    return 'hello world';
  }

}
