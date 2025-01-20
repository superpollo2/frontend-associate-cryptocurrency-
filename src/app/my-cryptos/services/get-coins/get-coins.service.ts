import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { Crypto } from '../../../shared/crypto-table/crypto';

interface GetCoinsResponse {
  cryptocoinId: number;
  cryptocoinName: string;
  symbol: string;
  exchangeRate: number;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class GetCoinsService {
  private apiUrl =
    'http://localhost:8080/api/v1/cryptocoin/user';

  private userCryptosSubject = new BehaviorSubject<Crypto[]>([]);
  userCryptos$ = this.userCryptosSubject.asObservable();

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

  getCryptos(): void {

    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found. Ensure the user is logged in.');
      return;
    }

    const url = `${this.apiUrl}/${userId}/coins`;


    this.http
      .get<GetCoinsResponse[]>(url)
      .pipe(map((res) => res.map((crypto) => this.mapCrypto(crypto))))
      .subscribe({
        next: (cryptos) => this.userCryptosSubject.next(cryptos),
        error: (error) => console.error('There was an error!', error),
      });
    //   , {
    //     params: { userId },
    // })
  }

  addCrypto(newCrypto: Crypto) {
    const currentCryptos = this.userCryptosSubject.getValue();
    const existingCrypto = currentCryptos.find(
      (crypto) => crypto.id === newCrypto.id
    );

    if (existingCrypto) {
      const newCryptoWithUpdatedAmount = {
        ...existingCrypto,
        amount: existingCrypto.amount + 1,
      };
      const updatedCryptos = currentCryptos.map((crypto) =>
        crypto.id === newCrypto.id ? newCryptoWithUpdatedAmount : crypto
      );
      this.userCryptosSubject.next(updatedCryptos);
    } else {
      this.userCryptosSubject.next([...currentCryptos, newCrypto]);
    }
  }
}
