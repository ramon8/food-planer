import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfiguratorComponent } from './form-configurator.component';

describe('FormConfiguratorComponent', () => {
  let component: FormConfiguratorComponent;
  let fixture: ComponentFixture<FormConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
