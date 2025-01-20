import { Component, Input } from '@angular/core';
import {CryptoCountry} from './crypto';


@Component({
  selector: 'app-crypto-table',
  standalone: true,
  templateUrl: './crypto-table.component.html',
  styleUrl: './crypto-table.component.scss',
})
export class CryptoTableComponent {
  @Input() cryptos: CryptoCountry[] = [];
  @Input() editable: boolean = false;
}
