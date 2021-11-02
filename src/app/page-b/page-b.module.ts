import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBComponent } from './page-b.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{
  path: '',
  component: PageBComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageBComponent]
})
export class PageBModule { }
