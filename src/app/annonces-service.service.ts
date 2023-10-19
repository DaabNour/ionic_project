import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesServiceService {

  constructor(private http: HttpClient) { }
  addAnnonce(nAnnonce:any) {
    return this.http.post(
      'https://annonce-c12a2-default-rtdb.firebaseio.com/Annonce.json',
      nAnnonce
    );
  }
  getAllAnnonces() {
    return this.http.get(
      'https://annonce-c12a2-default-rtdb.firebaseio.com/Annonce.json'
    );
  }

  getOnebyId(id: string) {
    return this.http.get(
      `https://annonce-c12a2-default-rtdb.firebaseio.com/Annonce/${id}.json`
    );
  }
}
