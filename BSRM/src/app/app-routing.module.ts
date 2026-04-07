import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
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
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'motor',component:MenuComponent, canActivate: [AuthGuard]},
  {path:'bajaj/:id',component:MotorpageComponent, canActivate: [AuthGuard]},
  {path:'honda/:id',component:HondapageComponent, canActivate: [AuthGuard]},
  {path:'yamaha/:id',component:YamahapageComponent, canActivate: [AuthGuard]},
  {path:'ktm/:id',component:KtmpageComponent, canActivate: [AuthGuard]},
  {path:'suzuki/:id',component:SuzukipageComponent, canActivate: [AuthGuard]},
  {path:'hero/:id',component:HeropageComponent, canActivate: [AuthGuard]},
  {path:'tvs/:id',component:TvspageComponent, canActivate: [AuthGuard]},
  {path:'re/:id',component:RepageComponent, canActivate: [AuthGuard]},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent, canActivate: [AuthGuard]},
  {path:'honda',component:HondaComponent},
  {path:'re',component:RcComponent},
  {path:'bajaj',component:BajajComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'address',component:AddressComponent, canActivate: [AuthGuard]},
  {path:'yamaha',component:YamahaComponent},
  {path:'ktm',component:KtmComponent},
  {path:'suzuki',component:SuzukiComponent},
  {path:'hero',component:HeroComponent},
  {path:'tvs',component:TvsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
