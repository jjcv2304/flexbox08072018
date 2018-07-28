import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemspropertiesComponent } from './itemsproperties.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../../../../shared/material.module';

describe('ItemspropertiesComponent', () => {
  let component: ItemspropertiesComponent;
  let fixture: ComponentFixture<ItemspropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [ ItemspropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemspropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
