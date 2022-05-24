import { UserService } from './user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  list:any=[];
  
  constructor(private service:UserService){}
  ngOnInit(): void {
    this.userInformation();
  

  }
  userInformation(){
    this.service
    .userInfo()
    .then((res:any)=>{
     console.log('data',res.results)
      this.list=res.results;
    })
    .catch((err)=>{
      console.log('err',err);
    });
  }
}
