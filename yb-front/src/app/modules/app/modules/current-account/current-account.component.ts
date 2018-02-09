import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CurrentAccountService } from './snippets/services/current-account.service';
import { User } from '../../../../snippets/domain/user';

@Component({
  selector: 'app-current-account',
  templateUrl: './current-account.component.html',
  styleUrls: ['./current-account.component.css']
})
export class CurrentAccountComponent implements OnInit {
  
  articleId: any;

  user: User;
  constructor(
    public activateRoute: ActivatedRoute,
    private currentService: CurrentAccountService
  ) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(queryParams => {  
      this.articleId = queryParams.id;
      // this.channelId = queryParams.channelId;
    });
    this.activateRoute.paramMap
    .switchMap((params: ParamMap) => this.currentService.getUser(this.articleId)) 
    .subscribe(user => this.user = user);
    
  }

}
/**
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import * as fromAppAuth from '../../../../snippets/reducers/app.store.module';
import * as authAction from '../../../../snippets/actions/auth.action';
import { DetailService } from './snippets/services/detail.service';
import { Article } from '../../snippets/tools/index';
import { CurrentAccountService } from './snippets/services/current-account.service';

  article: Article;
  constructor(
    public router: Router,
    public activateRoute: ActivatedRoute,
    private detailService: DetailService
  ) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(queryParams => {  
      this.articleId = queryParams.id;
      this.channelId = queryParams.channelId;
    });
    this.activateRoute.paramMap
    .switchMap((params: ParamMap) => this.detailService.getArticle(this.articleId, this.channelId)) 
    .subscribe(article => this.article = article);
  }


}


 */