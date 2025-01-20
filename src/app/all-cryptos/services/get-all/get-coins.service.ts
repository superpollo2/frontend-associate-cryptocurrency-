import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { CryptoCountry } from '../../../shared/crypto-table/crypto';

interface Cryptocoin {
  cryptocoinId: number;
  cryptocoinName: string;
  symbol: string;
  exchangeRate: number;
}

interface GetCoinsResponse {
  cryptocoins: Cryptocoin[];
  countryDTO: {
    countryName: string;
    countryId: number;
  };
}

interface GetCoinsResponse {
  cryptocoins: Cryptocoin[];
  country: string;
}


@Injectable({
  providedIn: 'root',
})
export class GetAllCoinsService {
  private apiUrl =
    'http://localhost:8080/api/v1/cryptocoin/country';

  constructor(private http: HttpClient) {}

  private mapCrypto(crypto: any): CryptoCountry {
    return {
      id: crypto.cryptocoinId,
      symbol: crypto.symbol,
      name: crypto.cryptocoinName,
      rate: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(crypto.exchangeRate),
    };
  }



  getCryptos(): Observable<{ cryptos: CryptoCountry[]; country: string }> {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found. Ensure the user is logged in.');
      return of({ cryptos: [], country: '' });  
    }

    const url = `${this.apiUrl}/${userId}/coins-availables`;

    return this.http.get<GetCoinsResponse>(url).pipe(
      map((res) => {
        const cryptos = res.cryptocoins.map((crypto) => this.mapCrypto(crypto));
        return { cryptos, country: res.countryDTO.countryName };  
      })
    );
  }
}
