import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language: string = '';
  private data: any;

  constructor(
    private http: HttpClient
  ) { }

  setLanguage(lang: string): Observable<any> {
    this.language = lang;
    const fileUrl = `assets/language/${this.language}.json`;
    return this.http.get(fileUrl).pipe(
      tap(data => this.data = data)
    );
  }

  getData(key: string): string {
    return this.data[key] || '';
  }
}