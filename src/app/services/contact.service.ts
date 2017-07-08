import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
    constructor(private http: Http) { }

    getContacts() {
        return this.http.get('https://s3.amazonaws.com/technical-challenge/Contacts_v2.json')
                        .map(result => result.json());
    }
}
