import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedRequestsComponent } from './finished-requests.component';

describe('FinishedRequestsComponent', () => {
  let component: FinishedRequestsComponent;
  let fixture: ComponentFixture<FinishedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
