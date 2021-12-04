import Contact from "src/classes/Contact";

export interface ContactFinder {
    name?: string
}

export abstract class ContactService {
    abstract insert(contact: Contact): Promise<Contact[]>
    abstract update(contact: Contact): Promise<Contact[]>
    abstract getAll(): Promise<Contact[]>
    abstract find(finder: ContactFinder): Promise<Contact[]>
    abstract delete(contact: Contact): Promise<Contact[]>
}