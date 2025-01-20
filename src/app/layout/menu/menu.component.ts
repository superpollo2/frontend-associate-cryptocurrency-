import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  selected: string = '';
  private router = inject(Router);
  private subscription!: Subscription;
  menuItems = [
    {
      label: 'Mis monedas',
      link: '/cryton/my-cryptos',
    },
    {
      label: 'Todas las monedas',
      link: '/cryton/all-cryptos',
    },
  ];

  ngOnInit() {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selected = event.url;
      }
    });

    this.selected = this.router.url;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
