import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FareEstimatorPage } from './fare-estimator';

@NgModule({
  declarations: [
    FareEstimatorPage,
  ],
  imports: [
    IonicPageModule.forChild(FareEstimatorPage),
  ],
})
export class FareEstimatorPageModule {}
