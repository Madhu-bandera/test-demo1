import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

 
list:any=[];
  
  constructor(private service:UserService){}
  ngOnInit(): void {
    this.booksInformation();
  

  }
  booksInformation(){
    this.service
    .getData()
    .then((res:any)=>{
     console.log('data',res.results.books)
      this.list=res.results.books;
    })
    .catch((err)=>{
      console.log('err',err);
    });
  }
}