import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Page} from "../page/page";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CategoryService {

  private url: string = "data/category.json";

  constructor(private http: Http) {
  }

  getCategories(): Promise<Page[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(res => res.json() as Page[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
