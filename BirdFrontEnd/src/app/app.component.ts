import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from './auth/services/auth.service';
import { UserInfo } from './auth/models/auth.models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'Bird Database';
  birdItems: MenuItem[];
  contactItems: MenuItem[];
  coupleItems: MenuItem[];
  isAuthenticated = false;
  currentUser: UserInfo | null = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Subscribe to auth state changes
    this.authService.authState$.subscribe(state => {
      this.isAuthenticated = state.isAuthenticated;
      this.currentUser = state.user;
    });

    this.birdItems = [
      {
        label: 'Overzicht Vogels',
        icon: 'pi pi-home',
        routerLink: '/birds'
      },
      {
        label: 'Vogel Aanmaken',
        icon: 'pi pi-plus',
        routerLink: '/birds/create'
      }
    ];

    this.contactItems = [
      {
        label: 'Overzicht Contacten',
        icon: 'pi pi-home',
        routerLink: '/contacts'
      },
      {
        label: 'Contact Aanmaken',
        icon: 'pi pi-plus',
        routerLink: '/contacts/create'
      }
    ];


    this.coupleItems = [
      {
        label: 'Overzicht Koppels',
        icon: 'pi pi-home',
        routerLink: '/couples'
      },
      {
        label: 'Koppel Aanmaken',
        icon: 'pi pi-plus',
        routerLink: '/couples/create'
      }
    ];
  }

  public navigateToPage(path: string) {
    this.router.navigate([path]);
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
