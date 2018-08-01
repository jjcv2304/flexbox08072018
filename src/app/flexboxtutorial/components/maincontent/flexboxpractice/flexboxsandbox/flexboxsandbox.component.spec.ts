///<reference path="../../../../../../../node_modules/@types/jasmine/index.d.ts"/>
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxsandboxComponent } from './flexboxsandbox.component';
import {MaterialModule} from '../../../../../shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';

describe('FlexboxsandboxComponent', () => {
  let component: FlexboxsandboxComponent;
  let fixture: ComponentFixture<FlexboxsandboxComponent>;

  beforeEach(async(() => {
    // noinspection JSIgnoredPromiseFromCall
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [ FlexboxsandboxComponent ]
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
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.mat-header-cell').textContent).toContain('Property Value');
  });

  it('should have first tab with X rows', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('mat-row').length).toBe(component.dataSourceContainerProperties.data.length);
  });

  it('should have second tab with X rows', () => {
    fixture.detectChanges();
   // todo create event to switch tabs
    expect(fixture.nativeElement.querySelectorAll('mat-row').length).toBe(component.dataSourceItemProperties.data.length);
  });
});
