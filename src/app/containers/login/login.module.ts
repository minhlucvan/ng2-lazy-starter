import { AsyncReducerModule } from './../../app-state/async-reducer';
import { LoginReducer } from './state/login/login.reducers';
import { LoginEffects } from './state/login/login.effects';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from 'app/shared/shared.module';
import { LoginRouting } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRouting,
    EffectsModule.run(LoginEffects),
    AsyncReducerModule.add('login', LoginReducer)
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class LoginModule {}
