import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule
    
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatSelectModule

  ]
})
export class AngularMaterialModule { }
