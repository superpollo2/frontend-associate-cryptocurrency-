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

interface AddCoinRequest {
  userId: number;
  cryptocoinId: number;
  amount: number;
}


@Injectable({
  providedIn: 'root',
})
export class AddCoinService {
  private apiUrl =
    'http://localhost:8080/api/v1/cryptocoin/user/associate-coin';

  constructor(private http: HttpClient, authService: AuthService) { }

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

  addCoin(cryptocoinId: number, amount: number): Observable<Crypto> {
    const userId = localStorage.getItem('userId'); 

    if (!userId) {
      throw new Error('User ID is not available');
    }

    const requestBody: AddCoinRequest = {
      userId: Number(userId), 
      cryptocoinId: Number(cryptocoinId), 
      amount,
    };

    return this.http
      .post<AddCoinResponse>(this.apiUrl, requestBody)
      .pipe(map((res) => this.mapCrypto(res.coin)));
  }
}
