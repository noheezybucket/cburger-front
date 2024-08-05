import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerCardComponent } from './burger-card.component';

describe('BurgerCardComponent', () => {
  let component: BurgerCardComponent;
  let fixture: ComponentFixture<BurgerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
