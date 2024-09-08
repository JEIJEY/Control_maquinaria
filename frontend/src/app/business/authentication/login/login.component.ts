import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent implements AfterViewInit {
  @ViewChild('signInBtn') signInBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('signUpBtn') signUpBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('signUpLink') signUpLink!: ElementRef<HTMLAnchorElement>;
  @ViewChild('signInLink') signInLink!: ElementRef<HTMLAnchorElement>;
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngAfterViewInit(): void {
    // Maneja el clic en el botón de registro
    this.signUpBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.add('sign-up-mode');
    });

    // Maneja el clic en el botón de inicio de sesión
    this.signInBtn.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.remove('sign-up-mode');
    });

    // Maneja el clic en el enlace de registro (desde el formulario de inicio de sesión)
    this.signUpLink.nativeElement.addEventListener('click', (event) => {
      event.preventDefault(); // Previene la acción por defecto del enlace
      this.container.nativeElement.classList.add('sign-up-mode');
    });

    // Maneja el clic en el enlace de inicio de sesión (desde el formulario de registro)
    this.signInLink.nativeElement.addEventListener('click', (event) => {
      event.preventDefault(); // Previene la acción por defecto del enlace
      this.container.nativeElement.classList.remove('sign-up-mode');
    });
  }
}
