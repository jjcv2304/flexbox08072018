import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxtheoryComponent } from './flexboxtheory.component';

describe('FlexboxtheoryComponent', () => {
  let component: FlexboxtheoryComponent;
  let fixture: ComponentFixture<FlexboxtheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxtheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxtheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
