import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCryptosComponent } from './my-cryptos.component';

describe('MyCryptosComponent', () => {
  let component: MyCryptosComponent;
  let fixture: ComponentFixture<MyCryptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCryptosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
