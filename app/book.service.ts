import { Injectable } from '@angular/core';
import { Http,Response  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { BookModel }     from './book.model';
import { AppSettings } from './app.config';


@Injectable()
export class BookService {
 
    private _url = ''; 
    constructor(private http: Http) {  
      this._url = AppSettings.API_ENDPOINT;
    }
     
    getBooks(category:string = 'programming'){
      return this.http.get(this._url+'?q='+category);
    }
 
    getBook(Id: string){
       return this.http.get(this._url+ '/'+Id).toPromise();
    }
 
    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    } 
}