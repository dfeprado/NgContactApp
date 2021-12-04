import { Component } from '@angular/core';
import Contact from 'src/classes/Contact';
import { FilterFn } from '../array-filter.pipe';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts: Contact[] = [
    new Contact('Daniel', '998517819'),
    new Contact('Nayra', '11997544165'),
    new Contact('Emerson', '')
  ]

  get customFilter(): FilterFn{
    if (!this.searchTerm)
      return null

    return (e: any) => (e as Contact).name.toLowerCase().startsWith(this.searchTerm)
  }

  searchTerm = ''

  constructor() { }

  doSearch(term: string) {
    this.searchTerm = term.trim().toLowerCase()
  }

  removerContato(contact: Contact) {
    const remove = confirm(`Tem certeza que deseja remover ${contact.name}?`)
    if (!remove)
      return

    const idx = this.contacts.findIndex(e => e === contact)
    if (idx !== -1)
      this.contacts.splice(idx, 1)
  }

  startAddingContact() {
    const contactName = prompt('What is your contact name?')?.trim()
    if (!contactName)
      return

    const contactNumber = prompt(`What is ${contactName}'s number?`)?.trim()

    this.addContact(contactName, contactNumber || '')
  }

  private addContact(name: string, number: string) {
    this.contacts.push(new Contact(name, number))
  }

}
