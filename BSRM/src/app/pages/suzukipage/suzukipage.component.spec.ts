import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuzukipageComponent } from './suzukipage.component';

describe('SuzukipageComponent', () => {
  let component: SuzukipageComponent;
  let fixture: ComponentFixture<SuzukipageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuzukipageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuzukipageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
