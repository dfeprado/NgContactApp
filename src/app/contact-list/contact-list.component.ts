import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Contact from 'src/classes/Contact';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { ContactService } from '../contact/contact.service';
import { DialogPosition } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  contacts: Contact[] = []

  constructor(private contactService: ContactService, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.contacts = await this.contactService.getAll()
  }

  // clearFilterIfNoTerm(searchTerm: string) {
  //   if (!searchTerm)
  //     this.doSearch('')
  // }

  // async doSearch(searchTerm: string) {
  //   const term = searchTerm.trim().toLowerCase()
  //   this.contacts = term ? await this.contactService.find({name: term}) : await this.contactService.getAll()
  // }

  async removerContato(contact: Contact) {
    const remove = confirm(`Tem certeza que deseja remover ${contact.name}?`)
    if (!remove)
      return

    this.contacts = await this.contactService.delete(contact)
  }

  startAddingContact() {
    this.dialog.open(ContactDialogComponent, {position: {top: '5em'}})
      .afterClosed().subscribe({
        next: async result => {
          if (result)
            this.contacts = await this.contactService.insert(new Contact(result.name, result.number))
        }
      })
  }
}