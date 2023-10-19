import { Component, OnInit } from '@angular/core';
import { AnnoncesServiceService } from '../annonces-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-details-annonce',
  templateUrl: './details-annonce.page.html',
  styleUrls: ['./details-annonce.page.scss'],
})
export class DetailsAnnoncePage implements OnInit {
  selectedannonce: any;

  constructor(
    private annonceService: AnnoncesServiceService,
    private activatedRoute: ActivatedRoute) {}

  getOneAnnonce() {
    this.activatedRoute.paramMap.subscribe((params) => { 
      const id = params.get('id');
      console.log(id);

      if (id) {
        this.annonceService.getOnebyId(id).subscribe((annonce) => {
          this.selectedannonce = annonce;
          console.log(this.selectedannonce);
        });
      }
    });
  }

  ngOnInit() {
    this.getOneAnnonce();
  }
}
