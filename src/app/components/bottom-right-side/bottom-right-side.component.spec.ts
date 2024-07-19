import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRightSideComponent } from './bottom-right-side.component';

describe('BottomRightSideComponent', () => {
  let component: BottomRightSideComponent;
  let fixture: ComponentFixture<BottomRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomRightSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
