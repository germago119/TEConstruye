import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesPorEtapaComponent } from './materiales-por-etapa.component';

describe('MaterialesPorEtapaComponent', () => {
  let component: MaterialesPorEtapaComponent;
  let fixture: ComponentFixture<MaterialesPorEtapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialesPorEtapaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesPorEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
