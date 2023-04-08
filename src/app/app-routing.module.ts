import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { FavcharComponent } from './favchar/favchar.component';
import { ParentComponent } from './ex08/parent/parent.component';

const routes: Routes = [
  {
    path: '',
    component: FavcharComponent,
  },
  {
    path: 'favchar',
    component: FavcharComponent,
  },
  {
    path: 'form',
    component: FormComponentComponent,
  },
  {
    path: 'output',
    component: ParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
