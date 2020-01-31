import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaFormComponent } from './marca-form.component';

describe('MarcaFormComponent', () => {
  let component: MarcaFormComponent;
  let fixture: ComponentFixture<MarcaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
