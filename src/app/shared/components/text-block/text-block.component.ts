import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit {
  @Input() aboutMe;
  constructor() { }

  ngOnInit(): void {
  }

}
