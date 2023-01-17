import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Resolvers
import { GetItemsResolver } from '../../shared/resolver/get-items.resolver';

// Components
import { ResultsComponent } from './results.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      results: GetItemsResolver,
    },
    runGuardsAndResolvers: 'always',
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
