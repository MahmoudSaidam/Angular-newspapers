import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, of, filter, startWith, map } from 'rxjs';
import { UsersService } from '../users.service';
import { Iusers } from './../users.models';
import { LoadingService } from './../../../dashboard/loading.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {



  isloading: boolean = false;

  userslist$: Observable<Iusers[]>;



  text: string;

  results$: Observable<string[]>;
  users: any[];

  cols:any[];

  FormSerach=new FormGroup({
    name:new FormControl('',[Validators.required]),
  });




  constructor(private usersservice: UsersService, public LoadingService: LoadingService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {

// this.GetusersAll();

    this.usersservice.Getall().subscribe(res=>{
      console.log("%%%",res);
    });






  }




  OnSearch(){
    console.log("Result Search 55 ","valuell",this.FormSerach.get('name').value.toString());

    this.FormSerach.get('name').valueChanges.subscribe((res:any)=>{

      var valuell=res.toString();



    });
  }






  GetusersAll() {

    this.usersservice.Getall().subscribe(
      data => {

        this.userslist$ = of(data);
        this.users=data;
        this.isloading = true;
        console.log("####", this.userslist$);
      },
      error => {
        this.isloading = false;
        console.error(error);
      });


      this.cols = [
        { field: 'name', header: 'username' },
        { field: 'email', header: 'email' },
        { field: 'role_name', header: 'role name' },

    ];


  }





  search(event:any) {

    console.log("SEarch",event.query);

      this.usersservice.GetSearch(event.query).subscribe(res => {
          this.results$ = of(res);
          this.cdr.detectChanges();

         console.log("SEarch",this.results$);
      });
  }





  // SeachTable(){

  //   if(this.formSearch.get('name').value==null){

  //   }
  //   else{
  //     this.formSearch.get('name').valueChanges.subscribe(data=>{
  //       console.log("Result",data);
  //     });
  //     this.users=this.users.filter(res=>{
  //       return res.name.toLocaleLowerCase().match(this.formSearch.get('name').value.toLocaleLowerCase());
  //     })
  //   }

  //   // this.usersservice.GetSearchAll(e.query).subscribe(res=>{
  //   //   this.us=res;
  //   //   console.log("SEarch All",this.results);
  //   // })
  // }




}
