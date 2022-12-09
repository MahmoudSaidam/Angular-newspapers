import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesService } from '../courses.service';
import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  listCourse:any[];

  @ViewChild(EditCourseComponent) modelcontent!:EditCourseComponent;


  constructor(private CoursesService:CoursesService) { }


  ngOnInit(): void {

    this.CoursesService.GetCoursesall().subscribe(res=>{
      this.listCourse=res;
      console.log("TTT",res);
    });





  }



  onEdit(id:number){

    console.log("RRR",id);

   this.modelcontent.OnEidtCours(id);

  }








}
