import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRightSideComponent } from './top-right-side.component';

describe('TopRightSideComponent', () => {
  let component: TopRightSideComponent;
  let fixture: ComponentFixture<TopRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRightSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
