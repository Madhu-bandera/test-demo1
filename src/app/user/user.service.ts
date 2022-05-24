import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
 constructor(private http: HttpClient) { }


 userInfo(){
   return new Promise ((resolve, reject)=>{
     this.http
     .get('https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=e0CO6FMMk2WpFQxZmqT0iCVuNyBZ0sPu')
     .subscribe((res)=>{
       if (res){
         resolve(res);
       }
     });
   });
 }
}

