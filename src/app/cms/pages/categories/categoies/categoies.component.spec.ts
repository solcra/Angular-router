import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoiesComponent } from './categoies.component';

describe('CategoiesComponent', () => {
  let component: CategoiesComponent;
  let fixture: ComponentFixture<CategoiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
