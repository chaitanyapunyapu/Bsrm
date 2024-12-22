import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtmpageComponent } from './ktmpage.component';

describe('KtmpageComponent', () => {
  let component: KtmpageComponent;
  let fixture: ComponentFixture<KtmpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KtmpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KtmpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
