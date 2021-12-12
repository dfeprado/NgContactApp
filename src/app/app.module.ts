import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdDirective } from './ad.directive';
import { FormsModule } from '@angular/forms';
import {ContactService} from './contact/contact.service'


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { CustomupperCasePipe } from './customupper-case.pipe';
import { ArrayFilterPipe } from './array-filter.pipe';
import { MemoryContactService } from './contact/memory-contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FloatingFabComponent } from './floating-fab/floating-fab.component'
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { LocalStorageContactService } from './contact/local-storage-contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    AdDirective,
    CustomupperCasePipe,
    ArrayFilterPipe,
    ToolbarComponent,
    FloatingFabComponent,
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
    
  ],
  providers: [{provide: ContactService, useClass: LocalStorageContactService}],
  exports: [MatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
