import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WfservicedatatableTsService {

  constructor( private http : HttpClient) { 

  }
  getFormJsonDatatable(){
     return this.http.get('assets/datatable.json');
    // let headers= new HttpHeaders().set("authToken",'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBSEgiLCJhdWQiOiJZTG9nQXBwVjIiLCJpYXQiOjE3MDU0NjU0MzF9.Gq3e6EiPhkvKsXp8Tre8ypffPhvi5Rcod8fklujAfvw')
    // return this.http.post("https://ociqaapp.ylogapp.com/YLogAPI/wirelessForms/data/dataTable?formId=100411&key=All",{},{headers});
  }
  getFormJsonDatatableheader(){
     return this.http.get('assets/datatableheadername.json');
  }
// approvalflow
getFormJsonDataapprovalflow(){
   return this.http.get('assets/wfapprovalsteps.json');
}
}
