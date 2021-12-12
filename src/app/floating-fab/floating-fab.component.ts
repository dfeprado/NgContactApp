import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-fab',
  templateUrl: './floating-fab.component.html',
  styleUrls: ['./floating-fab.component.css']
})
export class FloatingFabComponent implements OnInit {
  @Input('disabled') isDisabled = false

  constructor() { }

  ngOnInit(): void {
  }

}
