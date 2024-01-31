import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-routing';

  constructor(private router: Router) {
  }

  /** Passing parameters without adding them to URL */
  navigateToBooks() {
    this.router.navigate(['books'], { state: { example: 'bar' } });
  }
}
