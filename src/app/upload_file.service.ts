import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DsListService {
  apiEndPoint_upload_file = "http://localhost:3000/upload_file";
  constructor(private http: Http) { }


  uploadDatasource(payload): Observable<any[]> {
    let headers = new Headers();

    headers.append('Accept', 'application/json, text/plain,');
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.apiEndPoint_upload_file,payload, options)
      .map((res: Response) => {
        let data = res.json();
        return data;
      })
      .catch(error => Observable.throw(error))

  }
}