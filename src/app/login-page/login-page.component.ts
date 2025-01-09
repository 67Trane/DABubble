import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { AnimationScreenComponent } from "./animation-screen/animation-screen.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, AnimationScreenComponent, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
