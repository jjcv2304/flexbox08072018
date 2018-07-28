import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexboxtutorialAppComponent } from './flexboxtutorial-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { FlexboxtheoryComponent } from './components/maincontent/flexboxtheory/generalproperties/flexboxtheory.component';
import { ContainerpropertiesComponent } from './components/maincontent/flexboxtheory/containerproperties/containerproperties.component';
import { ItemspropertiesComponent } from './components/maincontent/flexboxtheory/itemsproperties/itemsproperties.component';
import { FlexboxsandboxComponent } from './components/maincontent/flexboxpractice/flexboxsandbox/flexboxsandbox.component';

const routes: Routes = [
  {
    path: '', component: FlexboxtutorialAppComponent,
    children: [
      { path: 'flexboxtheory', component: FlexboxtheoryComponent },
      { path: 'containerproperties', component: ContainerpropertiesComponent },
      { path: 'itemsproperties', component: ItemspropertiesComponent },
      { path: 'flexboxsandbox', component: FlexboxsandboxComponent },
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
    ItemspropertiesComponent, FlexboxsandboxComponent]
})
export class FlexboxtutorialModule { }
