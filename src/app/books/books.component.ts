import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }
}
