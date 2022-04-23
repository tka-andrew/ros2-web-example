import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentsComponent } from './main-contents.component';

describe('MainContentsComponent', () => {
  let component: MainContentsComponent;
  let fixture: ComponentFixture<MainContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
