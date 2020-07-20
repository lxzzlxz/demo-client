import { NgModule } from '@angular/core';
import { TwoSevenComponent } from './two-seven.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';

@NgModule({
  declarations: [
    TwoSevenComponent
  ],
  imports: [
    NbLayoutModule,
    NbSidebarModule,
  ],
  exports: [
    TwoSevenComponent
  ],
})
export class TwoSevenModule { }
