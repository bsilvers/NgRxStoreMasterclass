import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllUserData } from 'src/shared/to/all-user-data';
import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/htt'

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {
  constructor(private http: HttpClient) {}

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get('/api/threads').pipe(map(res => res.json()));
  }
}
