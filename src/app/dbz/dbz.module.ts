import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { Prueba1Component } from './components/prueba-1/prueba-1.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormComponent,
    Prueba1Component,
  ],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
