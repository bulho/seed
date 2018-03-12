import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }




}
