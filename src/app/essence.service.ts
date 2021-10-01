import { Injectable } from '@angular/core';
import { Essence } from './essence';
import { ESSENCES } from './mock-essences';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EssenceService {
  private essencesUrl = 'api/essences';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getEssences(): Observable<Essence[]> {
    return this.http.get<Essence[]>(this.essencesUrl)
      .pipe(
        catchError(this.handleError<Essence[]>('getEssences',[]))
      );
  }

  getEssence(id: Number): Observable<Essence> {
    const url = `${this.essencesUrl}/${id}`;
    return this.http.get<Essence>(url).pipe(
      catchError(this.handleError<Essence>('getEssence id=${id}'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
