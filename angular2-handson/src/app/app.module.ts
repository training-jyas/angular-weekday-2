import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './components/create/create.component';
import { ServerElementComponent } from './components/server-element/server-element.component';
import { ComponentsComponent } from './components/components.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicDirectiveDirective } from './directives/basic-directive/basic-directive.directive';
import { BetterDirectiveDirective } from './directives/better-directive/better-directive.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    ServerElementComponent,
    ComponentsComponent,
    DirectivesComponent,
    BasicDirectiveDirective,
    BetterDirectiveDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
