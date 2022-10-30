import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/organisms/footer/footer.component';
import { HeaderComponent } from './component/organisms/header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedButtonComponent } from './component/atoms/shared-button/shared-button.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SharedButtonComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SharedButtonComponent
  ],
  
  imports: [
    CommonModule,
    MaterialModule,
    SharedRoutingModule, //para juntar as rotas do shared junto com as do AppRouting
    FlexLayoutModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class SharedModule { }
