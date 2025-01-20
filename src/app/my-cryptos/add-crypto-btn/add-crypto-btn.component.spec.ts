import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCryptoBtnComponent } from './add-crypto-btn.component';

describe('AddCryptoBtnComponent', () => {
  let component: AddCryptoBtnComponent;
  let fixture: ComponentFixture<AddCryptoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCryptoBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCryptoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
