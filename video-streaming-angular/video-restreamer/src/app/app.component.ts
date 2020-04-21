import { Component, Inject } from '@angular/core';
import {UtilService} from './util.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video-restreamer';
  constructor(private service:UtilService,public dialog: MatDialog){

  } 
  configurebackendurl(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80%',
      data: { 
        "nodejs":"http://134.209.105.222:8001/nodejs",
        "python":"http://134.209.105.222:8000/python"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if (result!=undefined){
        this.service.nodejs_backend_url = result.nodejs
        this.service.python_backend_url = result.python
      }
    });
  }
}

