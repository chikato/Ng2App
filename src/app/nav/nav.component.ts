import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ckt-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  private pages: Object[] = [
    {pageName: "home", path: ""},
    {pageName: "products", path: "/products"},
    {pageName: "contact", path: "/contact"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
