import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEngineerComponent } from './dashboard-engineer.component';

describe('DashboardEngineerComponent', () => {
  let component: DashboardEngineerComponent;
  let fixture: ComponentFixture<DashboardEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
