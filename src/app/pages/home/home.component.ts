import { Component, OnInit } from '@angular/core';
export interface LinkList{
  link: string;
  logo: string;
}
export interface Aboutme{
  title: string;
  content: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
linkList: LinkList[];
aboutMe: Aboutme;
  constructor() {
    this.linkList = [
      {link: 'About me', logo: 'assets/person.svg'},
      {link: 'Education', logo: 'assets/graduation.svg'},
      {link: 'Experience', logo: 'assets/diamond.svg'},
      {link: 'Skills', logo: 'assets/pencil.svg'},
      {link: 'Portfolio', logo: 'assets/work.svg'},
      {link: 'Contacts', logo: 'assets/telephone.svg'},
      {link: 'Feedback', logo: 'assets/relationship.svg'},
    ];
    this.aboutMe = {
      title: 'About me',
      content: 'loremsdafgjhhfgdsfghfdasdfgjhkfvcxdfgghjkfgds'
    };
  }

  ngOnInit(): void {
  }

}
