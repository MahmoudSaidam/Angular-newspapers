import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  private url_api=environment.apiurl;

  basic_url = this.url_api+'Course/api/v1/';


  GetCoursesall():Observable<any[]>{

    return this.http.get<any[]>(`${this.basic_url}getAll`,{
      headers:new HttpHeaders({"Content-Type":"application/json"}),
     observe:'body',
     }).pipe(
      map((res:any)=>{
        return res.course.data;

      })
     );


   };


   getusersId(id:any):Observable<any>{

    return this.http.get<any>(`${this.basic_url}get/${id}`,
    {
      headers : new HttpHeaders({"Content-Type":"application/json"}),
      observe:'body',
    });

  }




}
