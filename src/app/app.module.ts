import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {Toastr, TOASTR_TOKEN} from './common/toastr.service';
import {JQ_TOKEN} from './common/jQuery.service';

const routes: Routes = [
  { path: 'flexboxtutorial', loadChildren: './flexboxtutorial/flexboxtutorial.module#FlexboxtutorialModule' },
  { path: '**', redirectTo: 'flexboxtutorial' }
];

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
