import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageObject } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private http: HttpClient,
    private pubnub: any) { 
    const PubNub = require("pubnub");

    pubnub = new PubNub({
      publishKey: "pub-c-c3740f89-b084-4f56-b30a-227c2505d301",
      subscribeKey: "sub-c-2deb58c8-cf86-11eb-b6ed-fa77d5b6609d"
    });

    pubnub.subscribe({
      channels: ['pubnub-twitter'],
      next(response:MessageObject) { console.log(response); },
      error(err:string) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  }

  getTweets() /*: Observable<MessageObject[]> */{
    return /*
      TODO: get actual tweet from PubNub
      this.http.get<MessageObject[]>()
      .pipe(
        tap(_ => this.log('Getting Tweets')),
        catchError(this.handleError<MessageObject[]>('getTweets', []))
      );*/
  }
  
  getByCountry(country: string) /*Observable<Message>*/ {
    // TODO: filter logic after figuring out tweet object
    return
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`ConsumeService: ${message}`);
  }
}



