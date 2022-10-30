import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { colorTypeModel } from '../../atoms/shared.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() color: colorTypeModel = 'primary';
  @Input() logo: string = '/assets/logo/logo-zahti-with-underscore.png'
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

}
