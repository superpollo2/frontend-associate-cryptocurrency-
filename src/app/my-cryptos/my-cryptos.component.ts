import { Component, OnInit } from '@angular/core';
import { CryptoTableComponent } from '../shared/crypto-table/crypto-table.component';
import { AddCryptoBtnComponent } from './add-crypto-btn/add-crypto-btn.component';
import { GetCoinsService } from './services/get-coins/get-coins.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-cryptos',
  standalone: true,
  imports: [CryptoTableComponent, AddCryptoBtnComponent, CommonModule],
  templateUrl: './my-cryptos.component.html',
  styleUrl: './my-cryptos.component.scss',
})
export class MyCryptosComponent implements OnInit {
  cryptos$ = this.getCoinsService.userCryptos$;
  constructor(private getCoinsService: GetCoinsService) {}

  ngOnInit(): void {
    this.getCoinsService.getCryptos();
  }
}
