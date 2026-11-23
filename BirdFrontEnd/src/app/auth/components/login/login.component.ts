import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth.models';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  loading = false;
  returnUrl = '/';

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    // Initialize login form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }

    this.loading = true;
    const request: LoginRequest = this.loginForm.value;

    this.authService.login(request).subscribe(
      (response) => {
        this.toastr.success(`Welkom terug, ${response.user.firstName}!`, 'Succesvol ingelogd');

        // Navigate to return url
        this.router.navigate([this.returnUrl]);
      },
      (error) => {
        this.loading = false;
        this.toastr.error(error.message ||
            'Ongeldige inloggegevens. Controleer uw e-mail en wachtwoord.', 'Inloggen mislukt');
      }
    );
  }

  navigateToRegister(): void {
    this.router.navigate(['/register'], {
      queryParams: { returnUrl: this.returnUrl },
    });
  }

  navigateToForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  private markFormGroupTouched(formGroup: UntypedFormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
}
