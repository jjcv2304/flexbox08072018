import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemspropertiesComponent } from './itemsproperties.component';

describe('ItemspropertiesComponent', () => {
  let component: ItemspropertiesComponent;
  let fixture: ComponentFixture<ItemspropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
