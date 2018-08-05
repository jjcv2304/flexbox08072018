///<reference path="../../../../../../../node_modules/@types/jasmine/index.d.ts"/>
///<reference path="../../../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {FlexboxsandboxComponent} from './flexboxsandbox.component';
import {MaterialModule} from '../../../../../shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormControl} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('FlexboxsandboxComponent', () => {
  let component: FlexboxsandboxComponent;
  let fixture: ComponentFixture<FlexboxsandboxComponent>;

  beforeEach(async(() => {
    // noinspection JSIgnoredPromiseFromCall
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      declarations: [FlexboxsandboxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxsandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header with name Property Value', () => {
    expect(fixture.nativeElement.querySelector('.mat-header-cell').textContent).toContain('Property Value');
  });

  it('should have first tab with X rows', () => {
    expect(fixture.nativeElement.querySelectorAll('mat-row').length).toBe(component.dataSourceContainerProperties.data.length);
  });

  it('should have second tab with X rows', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      let tabGroup = fixture.debugElement.query(By.css('#flexboxsandbox-tab-group'));
      tabGroup.attributes['ng-reflect-selected-index'] = '1';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelectorAll('mat-row').length).toBe(component.dataSourceItemProperties.data.length);
    });
  }));

});
