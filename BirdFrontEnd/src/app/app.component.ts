import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bird Database';
  birdItems: MenuItem[];
  ownerItems: MenuItem[];
  coupleItems: MenuItem[];
  breederItems: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
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

    this.ownerItems = [
      {
        label: 'Overzicht Eigenaars',
        icon: 'pi pi-home',
        routerLink: '/owners'
      },
      {
        label: 'Eigenaar Aanmaken',
        icon: 'pi pi-plus',
        routerLink: '/owners/create'
      }
    ];

    this.breederItems = [
      {
        label: 'Overzicht Kwekers',
        icon: 'pi pi-home',
        routerLink: '/breeders'
      },
      {
        label: 'Kweker Aanmaken',
        icon: 'pi pi-plus',
        routerLink: '/breeders/create'
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
}
