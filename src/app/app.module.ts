import { FormatPhone } from './Pipes/formatPhone.pipe';
import { ContactListDetailComponent } from './components/contact-list-detail/contact-list-detail.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContactListManagerComponent } from './components/contact-list-manager/contact-list-manager.component';

@NgModule({
  declarations: [
    ContactListManagerComponent,
    ContactListComponent,
    ContactListDetailComponent,
    FormatPhone
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ContactListManagerComponent]
})
export class AppModule { }
