import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideOptionComponent } from './left-side-option.component';

describe('LeftSideOptionComponent', () => {
  let component: LeftSideOptionComponent;
  let fixture: ComponentFixture<LeftSideOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftSideOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
