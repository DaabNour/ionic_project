import { Component, OnInit } from '@angular/core';
import { AnnoncesServiceService } from '../annonces-service.service';

@Component({
  selector: 'app-mes-annonces',
  templateUrl: './mes-annonces.page.html',
  styleUrls: ['./mes-annonces.page.scss'],
})
export class MesAnnoncesPage implements OnInit {
  tabannonces: any;
  user:any;

  constructor(private anonceService:AnnoncesServiceService) { }

  
  getAllAnnonces() {
    this.tabannonces = [];
    this.anonceService.getAllAnnonces().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          if (response[key].user === this.user) {
            this.tabannonces.push({ id: key, ...response[key] });
          }
        }
        console.log(this.tabannonces);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }


  ngOnInit() {
    this.user = localStorage.getItem('username');
    this.getAllAnnonces();
  }

}
