import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private UserService:UserService) { }
  firstname:string | undefined;
  lastname:string | undefined;
  phone:string | undefined;
  email:string | undefined;
  password:string | undefined;
  register() {
    let newUser = {
      firstname: this.firstname,
      lastname: this.lastname,
      phone:this.phone,
      email: this.email,
      password: this.password,

    };

    this.UserService.Register(newUser).subscribe({
      next: (response) => {
        console.log('User Created With success ', response);
        
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
  }

  ngOnInit() {
  }

}
