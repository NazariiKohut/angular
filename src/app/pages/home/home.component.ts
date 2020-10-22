import { Component, OnInit } from '@angular/core';
export interface LinkList{
  link: string;
  logo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
linkList: LinkList[];
  constructor() {
    this.linkList = [
      {
        link: 'about me',
        logo: 'assets/maxresdefault.jpg'
      }
    ];
  }

  ngOnInit(): void {
  }

}
