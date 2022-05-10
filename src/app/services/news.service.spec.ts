import { TestBed } from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { News } from '../interfaces/News';
import { of } from 'rxjs';

describe('NewsService', () => {
  
  // configurazione asincrona per il testing del servizio

  let service: NewsService,
      httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        NewsService,
      ]
    });
    service = TestBed.inject(NewsService);
    httpTestingController = TestBed.inject(HttpTestingController);
    spyOn(service, 'getIDs').and.returnValue(of([]));
    spyOn(service, 'getNewsInfo').and.returnValue(of(<News>{}));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the ids', (done) => {
    service.getIDs().subscribe(res => {
      expect(res).toEqual([]);
      done();
    });
  });

  it('should get the news info', (done) => {
    service.getNewsInfo(31328385).subscribe(res => {
      expect(res).toEqual(<News>{});
      done();
    });
  });
});
