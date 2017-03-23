import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import {Http} from "@angular/http";

@Injectable()
export class BackendRequestService {

  constructor(private http: Http) { }

  apiUrl: string = 'http://89.166.103.104/api.php?id=1491123'

  getDeparturesFromApi(): Observable<any> {
    return this.http.get(this.apiUrl).map(res => res.json())
  }

}
