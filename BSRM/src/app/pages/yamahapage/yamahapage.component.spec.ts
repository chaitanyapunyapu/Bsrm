import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamahapageComponent } from './yamahapage.component';

describe('YamahapageComponent', () => {
  let component: YamahapageComponent;
  let fixture: ComponentFixture<YamahapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YamahapageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamahapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
