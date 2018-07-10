import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { MaterialModule } from '../shared/material.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexboxtutorialAppComponent } from './flexboxtutorial-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import {HttpClientModule} from '@angular/common/http';
import { FlexboxtheoryComponent } from './components/flexboxtheory/flexboxtheory.component';

const routes: Routes = [
  {
    path: '', component: FlexboxtutorialAppComponent,
    children: [
      { path: 'flexboxtheory', component: FlexboxtheoryComponent },
      { path: 'test', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    // FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlexboxtutorialAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, FlexboxtheoryComponent]
})
export class FlexboxtutorialModule { }
