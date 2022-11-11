import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/modal/dialog.component';
import { TasksService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  mensagem: string;
  name: string;

  constructor(public dialog: MatDialog, private todoService: TasksService) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.mensagem},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.mensagem = result;
      this.todoService.AddTask(result);
    });
  }
}
