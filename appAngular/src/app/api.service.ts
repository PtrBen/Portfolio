import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import {MyNewInterface} from "./my-new-interface";
@Injectable()
export class ApiService {

  private postsURL ="http://localhost:3000/expPro";

  constructor(private http: Http ) {}
 getPosts(): Observable<MyNewInterface[]>{
    return this.http
     .get(this.postsURL)
     .map((response: Response)=> {
       return <MyNewInterface[]>response.json();
     })
     .catch(this.handleError);
 }

 private handleError(error: Response) {
   return Observable.throw(error.statusText);
 }

}
