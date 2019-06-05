import { BrowserModule } from '@angular/platform-browser';
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
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    NgMaterialMultilevelMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }