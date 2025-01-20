import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { CommonModule } from '@angular/common';
import type { Crypto, CryptoCountry } from '../../shared/crypto-table/crypto';
import { GetAllCoinsService } from '../../all-cryptos/services/get-all/get-coins.service';
import { AddCoinService } from '../services/add-coin/add-coin.service';
import { firstValueFrom } from 'rxjs';
import { GetCoinsService } from '../services/get-coins/get-coins.service';

@Component({
  selector: 'app-add-crypto-btn',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './add-crypto-btn.component.html',
  styleUrl: './add-crypto-btn.component.scss',
})
export class AddCryptoBtnComponent implements OnInit {
  isModalVisible = false;
  selectedCrypto: number | null = null;
  amount: number = 1;
  cryptos: CryptoCountry[] = [];

  constructor(
    private cdRef: ChangeDetectorRef,
    private getAllCoinsService: GetAllCoinsService,
    private addCoinService: AddCoinService,
    private getCoinsService: GetCoinsService
  ) {}

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(): void {
    this.getAllCoinsService.getCryptos().subscribe({
      next: (res) => {
        this.cryptos = res.cryptos;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  async addCrypto() {
    if (this.selectedCrypto === null  || this.amount <= 0) {
      return;
    }
    try {
      const newCoin = await firstValueFrom(
        this.addCoinService.addCoin(this.selectedCrypto, this.amount)
      );

      this.getCoinsService.addCrypto(newCoin);
      this.closeModal();
      this.cdRef.detectChanges();
      this.selectedCrypto = null;
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
}
