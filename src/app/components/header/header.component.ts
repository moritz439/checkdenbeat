import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { fade } from 'src/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fade]
})
export class HeaderComponent {

  userIsHome: Observable<boolean>;

  constructor(private router: Router) {
    this.userIsHome = this.router.events.pipe(filter(event => event instanceof NavigationEnd), map((event: NavigationEnd) => event.url === '/'));

  }
}
