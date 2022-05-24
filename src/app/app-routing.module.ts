import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MediaComponent } from './media/media.component';





const routes: Routes = [

{path:'media',component:MediaComponent},
{ path:'books', component:BooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
