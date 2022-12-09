import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Iusers } from './users.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



   private url_api=environment.apiurl;

  basic_url = 'https://localhost:44349/api/Course/api/v1/getAll';


  constructor(private http:HttpClient) { }



  Getall():Observable<any[]>{

    return this.http.get<any[]>(this.basic_url,{
      headers:new HttpHeaders({"Content-Type":"application/json"}),
     observe:'body',
     }).pipe(
      map((res:any)=>{
        return res.course.data;

      })
     );


   };



   create(body:any):Observable<any>{
    return this.http.post<any>(this.basic_url,body,{
      headers:new HttpHeaders({"Content-Type":"application/json"}),
      observe:'body'
    });

   }



  getusers():Observable<Iusers>{

   return this.http.get<Iusers>(this.url_api,{
    headers : new HttpHeaders({"Content-Type":"application/json"}),
    observe:'body',
    }).pipe(
      map((res:any)=>{
           return res;

         })
    );


  }

  getusersId(id:any):Observable<Iusers>{

    return this.http.get<Iusers>(`${this.url_api}/${id}`,
    {
      headers : new HttpHeaders({"Content-Type":"application/json"}),
      observe:'body',
    });

  }

  GetSearch(body:any):Observable<any[]>{

    return this.http.get<any[]>(`${this.basic_url}/search/${body}`,
    {
      headers : new HttpHeaders({"Content-Type":"application/json"}),
      observe:'body',
    }).pipe(
      map((res:any)=>{
          return res.data.map((object:any) => {
            return  [object.name];
          })
      })
    );
  }

  GetSearchAll(body:any):Observable<any[]>{

    return this.http.get<any[]>(`${this.basic_url}/search/${body}`,
    {
      headers : new HttpHeaders({"Content-Type":"application/json"}),
      observe:'body',
    });
  }


}
