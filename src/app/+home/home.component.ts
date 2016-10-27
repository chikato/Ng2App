import {Component, OnInit} from '@angular/core';
import {Page} from "../shared/page/page";
import {CategoryService} from "../shared/category/category.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CategoryService]
})

export class HomeComponent implements OnInit {

  categories: Page[];
  isFinishedView: boolean = false;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategories().then(
      categories => this.categories = categories
    );
  }

  ngAfterViewInit() {
    setTimeout(() => this.isFinishedView = true, 100);
  }

}
