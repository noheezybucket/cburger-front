import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgersListComponent } from './burgers-list.component';

describe('BurgersListComponent', () => {
  let component: BurgersListComponent;
  let fixture: ComponentFixture<BurgersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
