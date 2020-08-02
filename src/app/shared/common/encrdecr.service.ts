import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncrdecrService {

  constructor() { } secret = '123456$#@$^@1ERF';

  encrypt(data: any) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secret, {
      keySize: 128 / 8,
      iv: this.secret,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
  }

  decrypt(data: any) {
    return JSON.parse(
      CryptoJS.enc.Utf8.stringify(
        CryptoJS.AES.decrypt(data, this.secret, {
          keySize: 128 / 8,
          iv: this.secret,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        })
      )
    );
  }


}
