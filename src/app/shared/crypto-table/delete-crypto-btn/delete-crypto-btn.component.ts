import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../modal/modal.component';
import { CommonModule } from '@angular/common';
import type { Crypto } from '../crypto';

@Component({
  selector: 'app-delete-crypto-btn',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './delete-crypto-btn.component.html',
  styleUrls: [
    './delete-crypto-btn.component.scss',
    '../crypto-table.component.scss',
  ],
})
export class DeleteCryptoBtnComponent {
  isModalVisible = false;
  @Input() selectedCrypto: Crypto | null = null;

  amount: number = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  deleteCrypto() {
    if (this.selectedCrypto === null) {
      return;
    }
    console.log(this.selectedCrypto, this.amount);
    this.closeModal();
    this.cdRef.detectChanges();
  }
}
