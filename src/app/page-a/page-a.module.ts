import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAComponent } from './page-a.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{
  path: '',
  component: PageAComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageAComponent]
})
export class PageAModule { }
