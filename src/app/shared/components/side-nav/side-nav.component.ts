import {Component, Input, OnInit} from '@angular/core';

export interface Avatar {
  avatarUrl: string;
  avatarData: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  avatar: Avatar;
  @Input() linkLists;

  constructor() {
    this.avatar = {
      avatarUrl: 'assets/...', avatarData: 'Nazar'
    };
  }

  ngOnInit(): void {
  }

}
