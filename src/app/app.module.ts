import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { HttpClient } from 'selenium-webdriver/http';
import { UserService } from './user-service/user.service';
import { RepositoryComponent } from './repository/repository/repository.component';
import{ RepositoryService } from './repository-service/repository-service.service'
import { DatePipe } from './date.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    FormSearchComponent,
    RepositoryComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
