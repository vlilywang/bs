import { Injectable, Inject } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable, Subject } from 'rxjs';
import { User } from "../../../../../../snippets/domain/user";
@Injectable()
export class CurrentAccountService {

  private headers = new HttpHeaders({ 'content-Type': 'application/json' });
  constructor(
    private http: HttpClient,
    private _http: Http,
    private router: Router,
  ) { }

  getUser(id: number): Promise<User>{
    const url = ``;
    return this._http.get(url)
    .toPromise()
    .then(response => response.json().data as User);
  }

}