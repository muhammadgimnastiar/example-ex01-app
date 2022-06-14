import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverHightligthComponent } from './hover-hightligth.component';

describe('HoverHightligthComponent', () => {
  let component: HoverHightligthComponent;
  let fixture: ComponentFixture<HoverHightligthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverHightligthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverHightligthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
