import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dialog } from '../../Dialog';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './modal.component.html',
})

export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog,
  ) {}

  onNoClick(result: string = ""): void {
    this.dialogRef.close(result);
  }
}
