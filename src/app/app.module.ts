import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiftynavComponent } from './fiftynav/fiftynav.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdComponent } from './third/third.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthComponent } from './fourth/fourth.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';

@NgModule({
  declarations: [
    AppComponent,
    FiftynavComponent,
    SecondpageComponent,
    ThirdComponent,
    ThirdpageComponent,
    FourthComponent,
    FiveComponent,
    SixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
