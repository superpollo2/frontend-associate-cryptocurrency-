import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { map, Observable } from 'rxjs';
import { Crypto } from '../../../shared/crypto-table/crypto';

interface AddCoinResponse {
  coin: {
    cryptocoinId: number;
    cryptocoinName: string;
    symbol: string;
    exchangeRate: number;
    amount: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AddCoinService {
  private apiUrl =
    'https://run.mocky.io/v3/773d495f-eea7-4af1-b2b6-5fc346073084';

  constructor(private http: HttpClient, authService: AuthService) {}

  private mapCrypto(crypto: any): Crypto {
    return {
      id: crypto.cryptocoinId,
      amount: crypto.amount,
      symbol: crypto.symbol,
      name: crypto.cryptocoinName,
      rate: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(crypto.exchangeRate),
    };
  }

  addCoin(coinId: number): Observable<Crypto> {
    const userId = localStorage.getItem('userId');
    return this.http
      .post<AddCoinResponse>(this.apiUrl, { userId, coinId })
      .pipe(map((res) => this.mapCrypto(res.coin)));
  }
}
