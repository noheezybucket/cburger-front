import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBurgerComponent } from './create-burger.component';

describe('CreateBurgerComponent', () => {
  let component: CreateBurgerComponent;
  let fixture: ComponentFixture<CreateBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBurgerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
