import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerpropertiesComponent } from './containerproperties.component';

describe('ContainerpropertiesComponent', () => {
  let component: ContainerpropertiesComponent;
  let fixture: ComponentFixture<ContainerpropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerpropertiesComponent ]
    })
    .compileComponents();
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
