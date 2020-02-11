import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
  }

  appendHeader(header, content) {
    this.headers = this.headers.append(header, content);
  }

  // Movies List
  getMovies(pageIndex, itemsPerPage): Observable<any> {
    return this.http.get(`https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=${pageIndex}&perPage=${itemsPerPage}`)
      .pipe(
        tap(result => {
        }),
        catchError(this.handleError('getMovies()'))
      );
  }

  // Movie Details

  getMovieDetails(id): Observable<any> {
    return this.http.get(`https://cdn-discover.hooq.tv/v1.2/discover/titles/${id}`)
      .pipe(
        tap(result => {
        }),
        catchError(this.handleError('getMovieDetails()'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
