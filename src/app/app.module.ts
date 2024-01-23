import { NgModule } from '@angular/core';
import {
  BrowserModule,
  
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homePage/homePage.component';
import { FormBoxComponent } from './formBox/formBox.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, HomepageComponent, FormBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
