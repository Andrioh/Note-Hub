import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  Ativa: boolean = false;
  AtivaBack: boolean = false;

  GetHeader() {
    return this.Ativa;
  }

  AlterHeader(): boolean {
    this.Ativa = !this.Ativa;
    return this.Ativa;
  }

  GetButtonSearch() {
    return this.AtivaBack;
  }

  AlterButtonSearch(): boolean {
    this.AtivaBack = !this.AtivaBack
    return this.AtivaBack
  }
}
