import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtCraftComponent } from './art-craft/art-craft.component';
import { SchoolstationaryComponent } from './schoolstationary/schoolstationary.component';
import { OfficestationaryComponent } from './officestationary/officestationary.component';
import { ComputerstationaryComponent } from './computerstationary/computerstationary.component';
import { CollegestationaryComponent } from './collegestationary/collegestationary.component';
import { WatercolorComponent } from './watercolor/watercolor.component';
import { PencilcolorComponent } from './pencilcolor/pencilcolor.component';
import { GeometryboxComponent } from './geometrybox/geometrybox.component';
import { NatrajpencilComponent } from './natrajpencil/natrajpencil.component';
import { DrafteromegaComponent } from './drafteromega/drafteromega.component';
import { RollerscaleComponent } from './rollerscale/rollerscale.component';
import { PendriveComponent } from './pendrive/pendrive.component';
import { CdwalletComponent } from './cdwallet/cdwallet.component';
import { DairiesComponent } from './dairies/dairies.component';
import { PensComponent } from './pens/pens.component';


const routes: Routes = [
  { path: 'art-craft', component: ArtCraftComponent},
  { path: 'sch-stationary', component: SchoolstationaryComponent},
  { path: 'office-stationary', component: OfficestationaryComponent},
  { path: 'computer-stationary', component: ComputerstationaryComponent},
  { path: 'college-stationary', component: CollegestationaryComponent},
  { path: 'water-color', component:WatercolorComponent},
  { path: 'pencil-color', component:PencilcolorComponent},
  { path: 'geometry-box', component:GeometryboxComponent },
  { path: 'natraj-pencil', component:NatrajpencilComponent },
  {path: 'drafter-omega', component:DrafteromegaComponent},
  { path:'roller-scale',component:RollerscaleComponent},
  { path:'pendrive',component:PendriveComponent},
  { path:'cd-wallet',component:CdwalletComponent},
  { path:'dairies',component:DairiesComponent},
  { path:'pens',component:PensComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ArtCraftComponent,
                                SchoolstationaryComponent,
                                OfficestationaryComponent,
                                ComputerstationaryComponent,
                                CollegestationaryComponent,
                                WatercolorComponent,
                                PencilcolorComponent,
                                GeometryboxComponent,
                                NatrajpencilComponent,
                                DrafteromegaComponent,
                                RollerscaleComponent,
                                PendriveComponent,
                                CdwalletComponent,
                                DairiesComponent,
                                PensComponent
                              ]