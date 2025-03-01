import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCryptosComponent } from './all-cryptos.component';

describe('AllCryptosComponent', () => {
  let component: AllCryptosComponent;
  let fixture: ComponentFixture<AllCryptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCryptosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
