import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SERVICES/shared.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  authorBooksdata: any = [];
  recomondadeBooksdata: any = [];
  constructor(private shared_Service: SharedService) {

  }
  ngOnInit() {
    this.getAuthBooks();
    this.getRecomBooks();
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
}
