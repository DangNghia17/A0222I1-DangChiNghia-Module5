import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicDetailComponent } from './dic-detail.component';

describe('DicDetailComponent', () => {
  let component: DicDetailComponent;
  let fixture: ComponentFixture<DicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
