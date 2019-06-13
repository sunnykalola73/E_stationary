import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MatMenuModule} from '@angular/material/menu';
import { BodyComponent } from './body/body.component';
import { FiltersectionComponent } from './filtersection/filtersection.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { SignupserviceService } from './signupservice.service';
import { LoginserviceService } from './loginservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponent,
    BodyComponent,
    FiltersectionComponent,
    FooterComponent
  ],
  imports: [
    platformBrowser.BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    NgMaterialMultilevelMenuModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ SignupserviceService,LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }