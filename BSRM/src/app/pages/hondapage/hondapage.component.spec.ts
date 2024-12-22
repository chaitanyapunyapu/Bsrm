import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HondapageComponent } from './hondapage.component';

describe('HondapageComponent', () => {
  let component: HondapageComponent;
  let fixture: ComponentFixture<HondapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HondapageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HondapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
