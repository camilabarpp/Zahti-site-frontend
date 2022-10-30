import { Component, Input, OnInit } from '@angular/core';
import { buttonTypeModel, buttonTypeEvent, colorTypeModel } from '../shared.types';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent implements OnInit {

  @Input() isDisabled: boolean = false;
  @Input() text?: string;
  @Input() type: buttonTypeModel = 'basic';
  @Input() buttonEvent: buttonTypeEvent = 'submit';
  @Input() color: colorTypeModel = 'none';
  @Input() label?: string;
  @Input() icon?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
