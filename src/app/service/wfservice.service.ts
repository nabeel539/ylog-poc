import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WirelessServiceService {

  constructor(private http :HttpClient) { }

  getFormJsonData(){
    return this.http.get('assets/viewformhtml.json')
  }
}
