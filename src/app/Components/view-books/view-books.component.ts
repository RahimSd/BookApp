import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SERVICES/shared.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  authorBooksdata: any = [];
  recomondadeBooksdata: any = [];
  p: number = 1;
  pp: number = 1;
  constructor(private shared_Service: SharedService, private router: Router) {

  }
  ngOnInit() {
    this.getAuthBooks();
    this.getRecomBooks();
    console.log('URl ==>', this.router.url);


  }

  getAuthBooks() {
    this.shared_Service.getAuthorBooks()
      .subscribe(reslt => {
        console.log('getAuthorBooks result', reslt);
        console.log(this.authorBooksdata);
        this.authorBooksdata = reslt;
      });
  }
  getRecomBooks() {
    this.shared_Service.getRecomndadeBooks()
      .subscribe(result => {
        this.recomondadeBooksdata = result;
      })
  }
  addfavoritebooks(book: any) {
    console.log('add favorites ', book);

  }
}
