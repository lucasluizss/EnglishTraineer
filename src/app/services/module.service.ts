import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import Module from '@models/module.model';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  constructor(private readonly db: AngularFirestore) {}

  all() {
    return this.db.collection('Modules').snapshotChanges();
  }

  save(item: Module) {
    const now = Date.now();

    let slug;
    let document;

    document = {
      content: item,
      modified: now,
      created: now,
    };

    this.db.collection('Modules').add(item);
  }
}
