import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvspageComponent } from './tvspage.component';

describe('TvspageComponent', () => {
  let component: TvspageComponent;
  let fixture: ComponentFixture<TvspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
