import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface NewContactInfo {
  name: string
  number?: string
}

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  contactName = ''
  contactNumber = ''

  constructor(private dialogRef: MatDialogRef<ContactDialogComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.contactName = this.contactName.trim()
    if (!this.contactName)
      return

    this.dialogRef.close({name: this.contactName, number: this.contactNumber})
  }

}
