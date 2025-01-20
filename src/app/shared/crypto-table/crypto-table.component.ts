import { Component, Input } from '@angular/core';
import { Crypto} from './crypto';
import { UpdateCryptoBtnComponent } from './update-crypto-btn/update-crypto-btn.component';
import { DeleteCryptoBtnComponent } from './delete-crypto-btn/delete-crypto-btn.component';

@Component({
  selector: 'app-crypto-table',
  standalone: true,
  imports: [UpdateCryptoBtnComponent, DeleteCryptoBtnComponent],
  templateUrl: './crypto-table.component.html',
  styleUrl: './crypto-table.component.scss',
})
export class CryptoTableComponent {
  @Input() cryptos: Crypto[] = [];
  @Input() editable: boolean = false;
}
