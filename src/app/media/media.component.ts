
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

 
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