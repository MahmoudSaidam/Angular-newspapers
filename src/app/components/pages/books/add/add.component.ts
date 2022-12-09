import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './../../users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from './../books.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  submitted: boolean = false;
  categories:any;
  bookdetails:any;
  idbook:any;
  prograssbar:number=0;
  image:File;
  formimage:FormGroup;
  formbook:FormGroup;
  message:string;
  constructor(private bookservice:BooksService,
    private router:Router,private route:ActivatedRoute,private toastr: ToastrService,private fb:FormBuilder) { }





    // formbook=new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   details: new FormControl('', [Validators.required]),
    //   status: new FormControl('', [Validators.required]),
    //   category_id: new FormControl('', [Validators.required]),
    //   images: new FormControl('', [Validators.required]),
    // });

  ngOnInit(): void {

    var id =this.route.snapshot.paramMap.get('id');

    console.log("####",id);

    if(id){
      this.bookservice.GetBookId(id).subscribe(res=>{
        this.bookdetails=res;
        console.log("ID",res);
        this.formbook.get("name")?.setValue(this.bookdetails.name);
        this.formbook.get("details")?.setValue(this.bookdetails.details);
        this.formbook.get("status")?.setValue(this.bookdetails.status);
        this.formbook.get("category_id")?.setValue(this.bookdetails.category_id);
      })
    }

    this.bookservice.GetCategoryall().subscribe(
      res=>{
        this.categories=res;
        console.log("@@@",this.categories);
      }
    )
    this.creatForm();
    this.creatformval();

  }

  creatformval(){
    this.formbook = this.fb.group({
      name:['',Validators.required],
      details:['',Validators.required],
      status:['',Validators.required],
      category_id:['',Validators.required],
      images:['',Validators.required],
    });
  }

  creatForm(){
    this.formimage= this.fb.group({
      image:[null]
    });
  }
  setValue() {

    this.formbook.get("name")?.setValue(this.bookdetails.name);
    this.formbook.get("details")?.setValue(this.bookdetails.details);
    this.formbook.get("status")?.setValue(this.bookdetails.status);
    this.formbook.get("category_id")?.setValue(this.bookdetails.category_id);
  }

  uploadimage(e:any){

    this.image=e.target.files[0];
    this.formbook.patchValue({
      images: this.image,
    });
    this.formbook.get('images').updateValueAndValidity();



  }

  onsubmitupload(){

    const formData=new FormData();

    formData.append("image",this.image,this.image.name);

    console.log("Success########",formData);
    this.bookservice.imagUpload(formData).subscribe(res=>{
      console.log("Success",res);
    });


  }

onsubmit(){



  if(this.formbook.valid){

    this.idbook=this.route.snapshot.paramMap.get('id');

    if(this.idbook){
      const body:any={
        ...this.formbook.value,
        id:this.idbook,
        category_id:this.formbook.get('category_id').value

      }

      this.bookservice.update(body).subscribe(
        res=>{
          this.toastr.success('update success user');
        }
      )

    }else{

      this.prograssbar = 0;


      // formData.append("images",this.image,this.image.name);

      var formData: any = new FormData();

      formData.append('name', this.formbook.get('name').value);
      formData.append('details', this.formbook.get('details').value);
      formData.append('status', this.formbook.get('status').value);
      formData.append('category_id', this.formbook.get('category_id').value);
      formData.append('images', this.formbook.get('images').value);


      this.bookservice.create(formData).subscribe(
        {
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.prograssbar = Math.round(100 * event.loaded / event.total);

            }
            else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.toastr.error(this.message);
            }

          },
          error: (error) => {
            console.log(error);
            this.prograssbar = 0;
            if (error.error && error.error.message) {
              this.message = error.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
          }

        }

      )
    }



    this.formbook.reset();
   //this.router.navigate(['books']);

  }
  else{
    this.submitted = true;
    this.toastr.error('Enter The Fields Empty');
  }

}






}
