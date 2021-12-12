import { Injectable } from '@angular/core';
import Contact from 'src/classes/Contact';
import { ContactFinder, ContactService } from './contact.service';

@Injectable()
export class MemoryContactService implements ContactService{
  private contacts: Contact[] = [
    new Contact('Daniel', ''),
    new Contact('Nayra', '')
  ]

  constructor() { }

  async delete(contact: Contact): Promise<Contact[]> {
    const idx = this.contacts.findIndex(e => e === contact)
    if (idx !== -1)
      this.contacts.splice(idx, 1)

    return this.sort(this.contacts)
  }

  async insert(contact: Contact): Promise<Contact[]> {
    this.contacts.push(contact)
    return this.sort(this.contacts)
  }

  async update(contact: Contact): Promise<Contact[]> {
    return this.sort(this.contacts)
  }

  async getAll(): Promise<Contact[]> {
    return this.sort(this.contacts)
  }

  async find(finder: ContactFinder): Promise<Contact[]> {
    return this.sort(this.contacts.filter(e => e.name.toLowerCase() === finder.name))
  }

  private sort(list: Contact[]) {
    return list.sort((a, b) => {
      if (a.name < b.name)
        return -1
      else if (a.name > b.name)
        return 1
      else
        return 0
    })
  }
}
