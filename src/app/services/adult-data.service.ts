import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdultDataService {
  private graphUrl = "http://localhost:4000/home";
  private relationUrl = "http://localhost:4000/relation";

  constructor(private http: HttpClient) { }

  sexRatio() {
    return this.http.get<any>(this.graphUrl);
  }

  relationShipStatus(){
    return this.http.get<any>(this.relationUrl);
  }
}
