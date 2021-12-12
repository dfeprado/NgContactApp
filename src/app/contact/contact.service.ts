import Contact from "src/classes/Contact";

export interface ContactFinder {
    name: string
}

export abstract class ContactService {
    abstract insert(contact: Contact): Promise<Contact[]>
    abstract update(contact: Contact): Promise<Contact[]>
    abstract getAll(): Promise<Contact[]>
    abstract find(finder: ContactFinder): Promise<Contact[]>
    abstract delete(contact: Contact): Promise<Contact[]>

    protected sort(list: Contact[]) {
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