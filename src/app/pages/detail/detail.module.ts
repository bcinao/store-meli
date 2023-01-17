import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from '../../shared/shared.module';

// Components
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule
  ]
})
export class DetailModule { }
