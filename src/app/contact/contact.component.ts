import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import Contact from 'src/classes/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact!: Contact
  @Output() onRemove = new EventEmitter<Contact>()

  get contactNumber(): string {
    return (this.contact.number && this.contact.number.trim()) || 'NO NUMBER'
  }

  constructor() { }

  remover() {
    this.onRemove.emit(this.contact)
  }

  atualizar() {
    const newName = prompt(`What's the new name for ${this.contact.name}?`, this.contact.name)?.trim()
    if (!newName)
      return

    const newNumber = prompt(
      `Set the new number for ${this.contact.name} (current: ${this.contact.number}):`, 
      this.contact.number
    ) || ''

    this.contact.name = newName
    this.contact.number = newNumber
  }

}
