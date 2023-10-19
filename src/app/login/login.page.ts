import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private UserService:UserService,
    private router: Router,
    public toastController: ToastController,) { }
  users:any;
  email: any ;
  password: any;

  login() {
    // Check if the entered email and password match any user in the 'users' array
    const foundUser = this.users.find((user: any) => user.email === this.email && user.password === this.password);

    if (foundUser) {
      this.router.navigate(['/home']);
      localStorage.setItem('username', foundUser.firstname+" "+foundUser.lastname);
    } else {
      console.log('Invalid email or password');
    }
  }
  
  getAllUsers(){
    this.users = [];
    this.UserService.getAllUsers().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          this.users.push({ id: key, ...response[key] });
        }
        console.log(this.users);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit() {
    this.getAllUsers(),
    console.log(this.users);
    
  }

}
