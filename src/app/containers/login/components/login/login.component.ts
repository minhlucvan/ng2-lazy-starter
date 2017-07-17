import { createSelector } from 'reselect';
import { Observable } from 'rxjs/Observable';
import { LoginState, selectLogin, selectOneOfGreedings } from './../../state/login/login.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public greeding$: Observable<string> = null;

  constructor(
    private store: Store<LoginState>
  ) { }

  ngOnInit() {
    this.greeding$ = this.store.select<string>(createSelector(selectLogin, selectOneOfGreedings));
  }

}
