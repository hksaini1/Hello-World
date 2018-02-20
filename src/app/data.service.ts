import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable()
export class DataService {
 public bankData:any;
  private loginUrl = ' https://ifsc.razorpay.com/';
  constructor(private _http: Http) { }


  Search(f){
    let headers = new Headers();
    let mParams = new URLSearchParams();
    let searchText=f||"";
   debugger;
    return this._http.get(this.loginUrl+searchText).map(data2 => {
     
      JSON.stringify(data2)
      this.bankData= JSON.stringify(data2);
      console.log("data",this.bankData);
     // return this.bankData;
      
    });
  }



}
