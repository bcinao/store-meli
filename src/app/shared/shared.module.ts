import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';

// Resolvers
import { GetItemsResolver } from './resolver/get-items.resolver';
import { GetItemResolver } from './resolver/get-item.resolver';
import { ConditionsPipe } from './pipes/conditions.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    BreadcrumbComponent,
    ConditionsPipe,
  ],
  exports: [HeaderComponent, SearchComponent, BreadcrumbComponent, ConditionsPipe],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [GetItemsResolver, GetItemResolver],
})
export class SharedModule {}
