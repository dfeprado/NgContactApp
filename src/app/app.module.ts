import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdDirective } from './ad.directive';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { CustomupperCasePipe } from './customupper-case.pipe';
import { ArrayFilterPipe } from './array-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    AdDirective,
    AdBannerComponent,
    CustomupperCasePipe,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
