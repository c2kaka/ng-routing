import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
  /** Input() router param  **/
  @Input()
  set id(id: string) {
    console.log('id:', id);
  }

  @Input()
  set description(description: string) {
    console.log('description:', description);
  }

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('params:', params);
    })
  }
}
