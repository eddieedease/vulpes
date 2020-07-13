import {
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';

import {
  Observable
} from 'rxjs';
import { throttleTime } from 'rxjs/operators';

// The service is responsible for the cookies
import {
  CookieService
} from 'ngx-cookie-service';

// import evironment for current dev bunlde
import {
  environment
} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VulserService {

  constructor(private http_: HttpClient, private router: Router, private _cookieService: CookieService) {

  }

  // debugging from development mode
  debugLog(logging: any) {
    if (environment.production !== true) {
      console.log(logging);
    }
  };

  // getCurrent ACTS a STORE Service getter
  // 
  getCurrent(_type) {
    switch (_type) {

    }
  }

  // setCurrent acts as a STORE Service setter
  setCurrent(_type, _val, _cookiestore) {
    switch (_type) {

    }
  }




  // Cookie functions
  // Return cookie by keyvalue
  getCookie(key: string) {
    return this._cookieService.get(key);
  }

  // Return all cookies
  getAllCookies() {
    return this._cookieService.getAll();
  }

  // Set a specific cookie
  setCookie(_key, _value) {
    // add expire date in 2030
    this._cookieService.set(_key, _value);
  }

  // Delete cookies, ex. Logout or not valid cookies
  deleteAllCookies() {
    this._cookieService.deleteAll();
  }







  // API CALLS
  // API TESTCALL
  API_testCall(): Observable < any > {
    const url = environment.apilink + 'testcall?rnd=' + new Date().getTime();
    // tslint:disable-next-line:prefer-const

    const headers = {
      'Content-Type': 'application/json'
    };

    const headersConfig = new HttpHeaders(headers);

    const options = {
      headers: headersConfig
    };

    // tslint:disable-next-line:max-line-length
    return this.http_.get(url, options)
      .pipe(throttleTime(5000));
  }

}
