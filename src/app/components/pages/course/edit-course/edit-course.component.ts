import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  display:boolean=false

  constructor() { }


  formEducations = new FormGroup({
    id: new FormControl(0),

  });

  ngOnInit(): void {
  }




  OnSaveEducations(){

  }

  OnEidtCours(id:number){

   console.log("IDDD",id);
  }

}
