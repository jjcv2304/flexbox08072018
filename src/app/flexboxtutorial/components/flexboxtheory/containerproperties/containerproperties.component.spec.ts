import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerpropertiesComponent } from './containerproperties.component';
import {MaterialModule} from '../../../../shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ContainerpropertiesComponent', () => {
  let component: ContainerpropertiesComponent;
  let fixture: ComponentFixture<ContainerpropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [ ContainerpropertiesComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
