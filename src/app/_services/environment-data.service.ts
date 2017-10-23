import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class EnvironmentDataService {

  constructor(
    private http: Http
  ) { }

  getEnvironment(): Observable<any> {
    return this.http.get('/api/getEnvironment')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
