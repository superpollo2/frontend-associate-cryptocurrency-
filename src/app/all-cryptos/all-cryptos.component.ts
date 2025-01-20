import { Component, OnInit } from '@angular/core';
import { CryptoTableComponent } from './crypto-country-table/crypto-table.component';
import {  CryptoCountry } from './crypto-country-table/crypto';
import { GetAllCoinsService } from './services/get-all/get-coins.service';

@Component({
  selector: 'app-all-cryptos',
  standalone: true,
  imports: [CryptoTableComponent],
  templateUrl: './all-cryptos.component.html',
  styleUrl: './all-cryptos.component.scss',
})
export class AllCryptosComponent implements OnInit {
  constructor(private getAllCoinsService: GetAllCoinsService) {}
  cryptos: CryptoCountry[] = [];
  country: string = '';

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(): void {
    this.getAllCoinsService.getCryptos().subscribe({
      next: (res) => {
        this.cryptos = res.cryptos;
        this.country = res.country;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
