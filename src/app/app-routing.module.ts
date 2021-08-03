import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiftynavComponent } from './fiftynav/fiftynav.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthComponent } from './fourth/fourth.component';
import { ThirdComponent } from './third/third.component';
import { FiveComponent } from './five/five.component';

import { SixComponent } from './six/six.component';
const routes: Routes = [
  {path:"fifty",component:FiftynavComponent},
  {path:"second",component:SecondpageComponent},
  {path:"third",component:ThirdpageComponent},
  {path:"four",component:FourthComponent},
  {path:"tri",component:ThirdComponent},
  {path:"five",component:FiveComponent},
  {path:"six",component:SixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
