import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { GUARDS } from './guards/index';
import { AUTH_SERVICES } from './auth/index';
import { ENTITY_SERVICES } from './entities/index';
import { AppStateModule } from './app-state/app-state.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStateModule,
    SharedModule
  ],
  providers: [
    ...ENTITY_SERVICES,
    ...AUTH_SERVICES,
    ...GUARDS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
