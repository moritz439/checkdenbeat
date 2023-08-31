import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userScrolled = false;
  homeRouteActive: Observable<boolean>;
  nonFloatyRouteActive: Observable<boolean>;

  private readonly nonFloatyRoutes = ['/privacy', '/imprint', '/about'];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if (window.scrollY === 0) {
      this.userScrolled = false;
    } else {
      this.userScrolled = true;
    }
  }

  constructor(private router: Router) {
    const activeRoute$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd), map((event: NavigationEnd) => event.url));

    this.homeRouteActive = activeRoute$.pipe(map(route => route === '/'));
    this.nonFloatyRouteActive = activeRoute$.pipe(map(route => this.nonFloatyRoutes.includes(route)));
  }
}
