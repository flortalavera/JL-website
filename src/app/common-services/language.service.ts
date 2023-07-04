import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language: string = '';
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  setLanguage(lang: string): Observable<any> {
    this.language = lang;
    const fileUrl = `assets/language/${this.language}.json`;
    return this.http.get(fileUrl).pipe(
      tap(data => this.dataSubject.next(data))
    );
  }

  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }
}