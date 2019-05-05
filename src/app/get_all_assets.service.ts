import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GetAllAssets {
  apiEndPoint_get_all_assets = "http://localhost:3000/assets";
  constructor(private http: Http) { }


  getAssetsRecord(): Observable<any[]>{
    let headers = new Headers();

    headers.append('Accept', 'application/json, text/plain,');
    let options = new RequestOptions({ headers: headers });


    return this.http.get(this.apiEndPoint_get_all_assets)
      .map((res: Response) => {
        let data = res.json();
        return data;
      })
      .catch(error => Observable.throw(error))

  }
}