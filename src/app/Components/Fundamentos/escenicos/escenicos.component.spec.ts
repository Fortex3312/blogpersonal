import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscenicosComponent } from './escenicos.component';

describe('EscenicosComponent', () => {
  let component: EscenicosComponent;
  let fixture: ComponentFixture<EscenicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscenicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscenicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
