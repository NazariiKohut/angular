import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feeedbacks',
  templateUrl: './feeedbacks.component.html',
  styleUrls: ['./feeedbacks.component.css']
})
export class FeeedbacksComponent implements OnInit {
  @Input() feedback;

  constructor() {
  }

  ngOnInit(): void {
  }

}
