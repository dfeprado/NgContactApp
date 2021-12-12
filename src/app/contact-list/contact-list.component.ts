import { Component, OnInit } from '@angular/core';
import Contact from 'src/classes/Contact';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  contacts: Contact[] = []

  constructor(private contactService: ContactService) { }

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
    const contactName = prompt('What is your contact name?')?.trim()
    if (!contactName)
      return

    const contactNumber = prompt(`What is ${contactName}'s number?`)?.trim()

    this.addContact(contactName, contactNumber || '')
  }

  private async addContact(name: string, number: string) {
    this.contacts = await this.contactService.insert(new Contact(name, number))
  }
}