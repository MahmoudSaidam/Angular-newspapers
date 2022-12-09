import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Iusers } from './../users.models';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {



  constructor(private usersservice:UsersService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {


      var id =this.route.snapshot.paramMap.get('id');

     this.usersservice.getusersId(id).subscribe(
      res=>{
        console.log("Show",res);
      }
     )

  }

}
