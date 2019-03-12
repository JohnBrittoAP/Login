import { Injectable } from '@angular/core';

import { Http, RequestOptions,Headers} from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:Http) { }
  login(body:any)
  {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let  options = new RequestOptions({
    headers: headers
    });
    return this.httpService.post('http://localhost:3000',body,options ).pipe(
    map(res =>res.json()) 
    )
    
  }
}
