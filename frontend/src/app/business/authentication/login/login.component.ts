import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  @ViewChild('signInBtn') signInBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('signUpBtn') signUpBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngAfterViewInit(): void {
    // Agrega la clase 'sign-up-mode' al contenedor cuando el botón "Sign up" es clicado
    this.signUpBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.add('sign-up-mode');
    });

    // Remueve la clase 'sign-up-mode' del contenedor cuando el botón "Sign in" es clicado
    this.signInBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.remove('sign-up-mode');
    });
  }
}
