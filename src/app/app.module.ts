import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeightConverterPipe } from './height-converter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';



@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeightConverterPipe,
    StarshipDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
