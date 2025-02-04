import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildComponent } from './home-child.component';

describe('HomeChildComponent', () => {
  let component: HomeChildComponent;
  let fixture: ComponentFixture<HomeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
