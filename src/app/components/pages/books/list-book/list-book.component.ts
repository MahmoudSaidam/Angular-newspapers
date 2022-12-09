import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from './../books.service';
import { filter, Observable, of, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ibook } from './../Ibook.model';
import { LoadingService } from './../../../dashboard/loading.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  booksList$:Observable<Ibook[]>
  categorylist:any;


  constructor(private BooksService:BooksService,
    private Router:Router,private route:ActivatedRoute,private toastr:ToastrService,private cdr:ChangeDetectorRef,public LoadingService:LoadingService) { }

  ngOnInit(): void {

    this.BooksService.Getbooks().subscribe(
      res=>{
         this.booksList$=of(res);
         this.cdr.detectChanges();
      }
    )



  }


 getData(){
  this.BooksService.Getbooks().subscribe(
    res=>{
       this.booksList$=of(res);
       this.cdr.detectChanges();
    }
  )
 }

  onDelete(id:number){

      this.BooksService.Remove(id).subscribe(
      res=>{
        console.log("D",res)
        this.getData();
        this.cdr.detectChanges();
      }
    )

  }




}
