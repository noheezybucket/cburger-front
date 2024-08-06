import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBurgerComponent } from './single-burger.component';

describe('SingleBurgerComponent', () => {
  let component: SingleBurgerComponent;
  let fixture: ComponentFixture<SingleBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBurgerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
