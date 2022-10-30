import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './component/organisms/footer/footer.component';
import { HeaderComponent } from './component/organisms/header/header.component';


const routes: Routes = [
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path:'footer',
    component: FooterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
