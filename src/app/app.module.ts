import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdDirective } from './ad.directive';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { CustomupperCasePipe } from './customupper-case.pipe';
import { ArrayFilterPipe } from './array-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    AdDirective,
    CustomupperCasePipe,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
