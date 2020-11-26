import { Component } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfc-angular';
  public loaderDisplay: String;
  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    this.loaderSubscribe();
    this.storeService.setLoaderData('none');
  }

  loaderSubscribe() {
    this.storeService.loaderDataChanged.subscribe(
      (data) => {
        this.loaderDisplay = data
      }
    )
  }

}
