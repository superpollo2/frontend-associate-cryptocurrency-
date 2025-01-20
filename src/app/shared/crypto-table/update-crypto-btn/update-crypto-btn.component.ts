import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../modal/modal.component';
import { CommonModule } from '@angular/common';
import type { Crypto } from '../crypto';

@Component({
  selector: 'app-update-crypto-btn',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './update-crypto-btn.component.html',
  styleUrls: [
    './update-crypto-btn.component.scss',
    '../crypto-table.component.scss',
  ],
})
export class UpdateCryptoBtnComponent {
  isModalVisible = false;

  private _selectedCrypto: Crypto | null = null;
  @Input()
  set selectedCrypto(value: Crypto | null) {
    this._selectedCrypto = value;
    this.amount = this._selectedCrypto?.amount ?? 0; 
  }
  get selectedCrypto(): Crypto | null {
    return this._selectedCrypto;
  }

  amount: number = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  updateCrypto() {
    if (this.selectedCrypto === null) {
      return;
    }
    console.log(this.selectedCrypto, this.amount);
    this.closeModal();
    this.cdRef.detectChanges();
  }
}
