import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepageComponent } from './repage.component';

describe('RepageComponent', () => {
  let component: RepageComponent;
  let fixture: ComponentFixture<RepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
