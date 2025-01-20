import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCryptoBtnComponent } from './delete-crypto-btn.component';

describe('DeleteCryptoBtnComponent', () => {
  let component: DeleteCryptoBtnComponent;
  let fixture: ComponentFixture<DeleteCryptoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCryptoBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCryptoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
