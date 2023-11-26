import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from '../../login-box/login-box.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, LoginBoxComponent, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 /* loginForm:any;

  constructor(private loginService:LoginService, private router:Router){
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if(!this.loginForm.valid){
      return;
    }

    this.loginService.login(username, password).subscribe({
      next: (user) => {
        console.log(user)
      },
      error: (error) => {
        console.log(error)
      },
    });
    
    this.router.navigate(['/home']);
    
  }*/
}
