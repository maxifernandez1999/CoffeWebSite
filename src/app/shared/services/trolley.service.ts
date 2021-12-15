import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class TrolleyService {
  trolleyRef: AngularFirestoreCollection<any>;
  constructor(firestore: AngularFirestore) {
    this.trolleyRef = firestore.collection('products');
  }

  public getTrolleyProducts(): Observable<IProduct[]> {
    return this.trolleyRef.valueChanges() as Observable<IProduct[]>;
  }
}
