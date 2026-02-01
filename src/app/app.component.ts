import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { IPagination } from './shared/Models/IPagination';
import { IProduct } from './shared/Models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{ 
  constructor() {}
  ngOnInit(): void {}

  
}
