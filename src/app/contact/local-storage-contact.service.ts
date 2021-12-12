import { Injectable } from '@angular/core';
import Contact from 'src/classes/Contact';
import { ContactFinder, ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageContactService extends ContactService {
  private contacts: Contact[] = []

  constructor() {
    super()

    this.load()
  }

  private load() {
    const json = localStorage.getItem('contacts')
    if (!json)
      return

    this.contacts = JSON.parse(json)
  }

  async insert(contact: Contact): Promise<Contact[]> {
    this.contacts.push(contact)
    this.sortContacts();
    this.save()
    return this.contacts
  }

  async update(contact: Contact): Promise<Contact[]> {
    this.sortContacts()
    this.save()
    return this.contacts
  }

  async getAll(): Promise<Contact[]> {
    return this.contacts
  }

  async delete(contact: Contact): Promise<Contact[]> {
    const idx = this.contacts.findIndex(c => c === contact)
    if (idx === -1)
      throw new Error('Contact not found')

    this.contacts.splice(idx, 1)
    this.sortContacts()
    this.save()
    return this.contacts
  }

  private sortContacts() {
    this.contacts = this.sort(this.contacts);
  }

  private save() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }

  async find(finder: ContactFinder): Promise<Contact[]> {
    return this.sort(this.contacts.filter(c => c.name.toLowerCase().startsWith(finder.name)))
  }
}
