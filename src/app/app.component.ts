import { UserService } from './user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  
  constructor(private service:UserService){}
  ngOnInit(): void {
  }
}