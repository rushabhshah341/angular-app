import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor( private http: HttpClient) {
  }
  public getMyData() {
    const baseUrl = 'http://localhost:8080/users/mydata';
    const headers = new HttpHeaders({
        'Content-type': 'application/json',
        'X-Api-Version': '1.0'
    });
    return this.http.get(baseUrl, { headers: headers});

  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
