import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicPageComponent } from './dic-page.component';

describe('DicPageComponent', () => {
  let component: DicPageComponent;
  let fixture: ComponentFixture<DicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
