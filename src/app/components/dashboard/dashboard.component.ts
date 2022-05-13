import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/interfaces/News';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public loading: boolean = false;
  public windowScrolled: boolean = false;

  private allIDs = [];
  private filteredIDs = []; 

  private currentNewsCount: number = 0;

  public loadedNews: News[] = [];

  private idSubscription!: Subscription;
  private newsSubscription!: Subscription;

  constructor(private _fetch: NewsService) { }

  ngOnInit(): void {
    this.loading = true;

    this.idSubscription = this._fetch.getIDs()
      .subscribe(
          res => {
              this.allIDs = res; 
              this.filterNewsIDs();
              this.getNews();
              this.loading = false;
          }
      );

    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  ngOnDestroy() {
    if (this.idSubscription && this.newsSubscription) {
      this.idSubscription.unsubscribe();
      this.newsSubscription.unsubscribe();
    }
  }

  filterNewsIDs() {
    for (let i = this.currentNewsCount; i < (this.currentNewsCount + 10); i++) {
      this.filteredIDs.push(this.allIDs[i]);
    }
    this.currentNewsCount = this.currentNewsCount + 10;
  }

  getNews() {
      for (let i = this.currentNewsCount - 10; i < this.filteredIDs.length; i++ ) {
      this.newsSubscription = this._fetch.getNewsInfo(this.filteredIDs[i])
        .subscribe(res => this.loadedNews.push(res));
    }
  }

  loadMore() {
    this.filterNewsIDs();
    this.getNews();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
