import { Component, OnInit } from '@angular/core';
import { AnnoncesServiceService } from '../annonces-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tabannonces :any;
 

  constructor(private anonceService:AnnoncesServiceService) { }

  getAllAnnonces() {
    this.tabannonces = [];
    this.anonceService.getAllAnnonces().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          this.tabannonces.push({ id: key, ...response[key] });
        }
        console.log(this.tabannonces);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  logout(){
    localStorage.removeItem("username")
  }

  ngOnInit() {
  this.getAllAnnonces()
  }
}

