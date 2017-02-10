import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectorsComponent } from './directors.component';
import { DirectorComponent } from './director.component';
import { LineEditComponent } from './line-edit.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  DirectorsComponent,
                  DirectorComponent,
                  LineEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
