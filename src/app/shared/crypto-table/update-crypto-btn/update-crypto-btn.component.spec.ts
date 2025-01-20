import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCryptoBtnComponent } from './update-crypto-btn.component';

describe('UpdateCryptoBtnComponent', () => {
  let component: UpdateCryptoBtnComponent;
  let fixture: ComponentFixture<UpdateCryptoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCryptoBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCryptoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
