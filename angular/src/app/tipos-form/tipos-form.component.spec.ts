import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposFormComponent } from './tipos-form.component';

describe('TiposFormComponent', () => {
  let component: TiposFormComponent;
  let fixture: ComponentFixture<TiposFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
