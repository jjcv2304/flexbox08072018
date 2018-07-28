import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxsandboxComponent } from './flexboxsandbox.component';

describe('FlexboxsandboxComponent', () => {
  let component: FlexboxsandboxComponent;
  let fixture: ComponentFixture<FlexboxsandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
