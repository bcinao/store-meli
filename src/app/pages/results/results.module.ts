import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ResultsRoutingModule } from './results-routing.module';
import { SharedModule } from '../../shared/shared.module';

// Components
import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    SharedModule
  ]
})
export class ResultsModule { }
