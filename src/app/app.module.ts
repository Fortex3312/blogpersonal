import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './Components/Menu/menu/menu.component';
import { FundamentosComponent } from './Components/Fundamentos/fundamentos/fundamentos.component';

import { IluminacionComponent } from './Components/Fundamentos/iluminacion/iluminacion.component';
import { VestuarioComponent } from './Components/Fundamentos/vestuario/vestuario.component';
import { EscenicosComponent } from './Components/Fundamentos/escenicos/escenicos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FundamentosComponent,
    EscenicosComponent,
    IluminacionComponent,
    VestuarioComponent
  ],
  imports: [
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
