import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Resolvers
import { GetItemResolver } from '../../shared/resolver/get-item.resolver';

// Components
import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      result: GetItemResolver,
    },
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
