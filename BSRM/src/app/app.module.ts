import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sharepage/sidenav/sidenav.component';
import { EventEmitter } from '@angular/core';
import { CardComponent } from './card/card.component';
import { HondaComponent } from './Bikes/honda/honda.component';
import { RcComponent } from './Bikes/rc/rc.component';
import { BajajComponent } from './Bikes/bajaj/bajaj.component';
import { LoginComponent } from './Login/login/login.component';
import { SignupComponent } from './Login/signup/signup.component';
import { MotorpageComponent } from './pages/motorpage/motorpage.component';
import { HondapageComponent } from './pages/hondapage/hondapage.component';
import { AddressComponent } from './pages/address/address.component';
import { RepageComponent } from './pages/repage/repage.component';
import { YamahaComponent } from './Bikes/yamaha/yamaha.component';
import { KtmComponent } from './Bikes/ktm/ktm.component';
import { SuzukiComponent } from './Bikes/suzuki/suzuki.component';
import { HeroComponent } from './Bikes/hero/hero.component';
import { TvsComponent } from './Bikes/tvs/tvs.component';
import { YamahapageComponent } from './pages/yamahapage/yamahapage.component';
import { KtmpageComponent } from './pages/ktmpage/ktmpage.component';
import { SuzukipageComponent } from './pages/suzukipage/suzukipage.component';
import { HeropageComponent } from './pages/heropage/heropage.component';
import { TvspageComponent } from './pages/tvspage/tvspage.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    SidenavComponent,
    CardComponent,
    HondaComponent,
    RcComponent,
    BajajComponent,
    LoginComponent,
    SignupComponent,
    MotorpageComponent,
    HondapageComponent,
    AddressComponent,
    RepageComponent,
    YamahaComponent,
    KtmComponent,
    SuzukiComponent,
    HeroComponent,
    TvsComponent,
    YamahapageComponent,
    KtmpageComponent,
    SuzukipageComponent,
    HeropageComponent,
    TvspageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
