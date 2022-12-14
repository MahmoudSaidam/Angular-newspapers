import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  public isloading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true);

  constructor() { }
}
