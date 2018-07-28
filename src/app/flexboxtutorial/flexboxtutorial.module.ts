import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexboxtutorialAppComponent } from './flexboxtutorial-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { FlexboxtheoryComponent } from './components/flexboxtheory/generalproperties/flexboxtheory.component';
import { ContainerpropertiesComponent } from './components/flexboxtheory/containerproperties/containerproperties.component';
import { ItemspropertiesComponent } from './components/flexboxtheory/itemsproperties/itemsproperties.component';

const routes: Routes = [
  {
    path: '', component: FlexboxtutorialAppComponent,
    children: [
      { path: 'flexboxtheory', component: FlexboxtheoryComponent },
      { path: 'containerproperties', component: ContainerpropertiesComponent },
      { path: 'itemsproperties', component: ItemspropertiesComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlexboxtutorialAppComponent, ToolbarComponent,
    SidenavComponent, FlexboxtheoryComponent, ContainerpropertiesComponent,
    ItemspropertiesComponent]
})
export class FlexboxtutorialModule { }
