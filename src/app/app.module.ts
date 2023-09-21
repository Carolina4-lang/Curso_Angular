import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { FormularioComponent } from './formulario/formulario.component'; //importo el typescript
@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FotografiaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
