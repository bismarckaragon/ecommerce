import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataproductComponent } from './dataproduct.component';

describe('DataproductComponent', () => {
  let component: DataproductComponent;
  let fixture: ComponentFixture<DataproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
