import { Component, OnInit } from '@angular/core';
import { AnnoncesServiceService } from '../annonces-service.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {

  constructor(private AnnonceService:AnnoncesServiceService) { }
  model: string = '';
  km: number = 0;
  color: string = '';
  price: number = 0;
  Category:string=''

  addNewAnnonce() {
    let newAnnonce = {
      model: this.model,
      price: this.price,
      color: this.color,
      km:this.km,
      category: this.Category,
      date: new Date(),
      user:localStorage.getItem('username')
    };


    this.AnnonceService.addAnnonce(newAnnonce).subscribe({
      next: (response) => {
        console.log('Annonce added successfully:', response);
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
  }

  ngOnInit() {
  }

}
