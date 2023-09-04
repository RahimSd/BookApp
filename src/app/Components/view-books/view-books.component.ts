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
  recoFavBooksData: any;
  constructor(private shared_Service: SharedService, private router: Router) {

  }
  ngOnInit() {
    this.getAuthBooks();
    this.getRecomBooks();
    this.getrecoFavBooks();


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
  getrecoFavBooks() {
    this.shared_Service.getrecFavBooks().subscribe(recBooks => {
      this.recoFavBooksData = recBooks;
    });
  }
  addfavoriterecombooks(book: any) {
    console.log('add favorites ', book);
    this.shared_Service.addfavoriterecombooks(book).subscribe(res => {
      alert(book.bookname + " Book is  added in the favourite section");
    }, error => {
      alert(book.bookname + " Book is  already added in the favourite section");

    });
  }
  deleteRecFavBooks(book: any) {
    console.log('delete', book);
    if (confirm("Are you sure want to delete Favourite book " + book.author)) {
      this.shared_Service.deleteFavBooks("http://localhost:3000/favoritesauthorthBooks/" + book.id).subscribe(res => {
        this.getrecoFavBooks();
      });
    }
  }
}
