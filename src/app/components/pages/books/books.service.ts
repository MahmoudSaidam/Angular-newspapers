import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable, filter } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ibook } from './Ibook.model';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiurl = environment.apiurl;

  basic_url = this.apiurl + 'book';

  constructor(private http: HttpClient) { }


  Getbooks(): Observable<Ibook[]> {

    return this.http.get<Ibook[]>(this.basic_url, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      observe: 'body',
    }).pipe(
      map((res:any)=>{
        return res.data
      })
    );


  };



  GetBookId(id: any): Observable<Ibook> {

    return this.http.get<any>(`${this.basic_url}/${id}`,
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        observe: 'body',
      });

  }

  GetCategoryall(): Observable<any> {

    return this.http.get<any>(`${this.apiurl}category/`,
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        observe: 'body',
      });

  }


  create(body: any): Observable<any> {
    return this.http.post<any>(this.basic_url+'/create', body, {
      headers: new HttpHeaders(),
      reportProgress:true,
      observe:"events"
    });

  }

  crea(formData: any){
   return  this.http.post(this.basic_url+'/create', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }

  update(body: any): Observable<any> {
    return this.http.put<any>(`${this.basic_url}/${body.id}`, body, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      observe: 'body'
    });

  }

  Remove(id:number):Observable<Ibook[]>{
    return this.http.delete<Ibook[]>(`${this.basic_url}/${id}`);


   }


 imagUpload(data:any){
  const headers=new HttpHeaders();
  return this.http.post('http://127.0.0.1:8000/api/image/',data, {
    headers: headers
  });
 }

}
