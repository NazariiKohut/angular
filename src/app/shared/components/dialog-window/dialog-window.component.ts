import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Message} from '../../../pages/home/home.component';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogWindowComponent>, @Inject(MAT_DIALOG_DATA) public data: Message) {
  }

  ngOnInit(): void {
  }

  onOk(): void {
    this.dialogRef.close('Ok!');
  }

  onCancel(): void {
    this.dialogRef.close('Cancel!');
  }

}
