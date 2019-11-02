import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mate = [{ id: '1', name: 'CEMEX' }, { id: '2', name: 'LANCO' }];

  getMaterials(): Observable<any[]> {
    return of(this.mate);
  }
}
