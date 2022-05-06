import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/interfaces/News';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() newsInfo: News = {
    id: 0,
    url: '',
    by: '',
    title: '',
    time: 0,
  }

  formattedNewsTime!: string;

  constructor() { }

  ngOnInit(): void {  
    this.unixToDate(this.newsInfo.time);
  }

  unixToDate($unix: number) {
    const ms = $unix * 1000;
    const dateObj = new Date(ms);
    const localeDate = dateObj.toLocaleDateString();
    this.formattedNewsTime= localeDate;
  }

}
