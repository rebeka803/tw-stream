import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ConsumeService } from '../consume.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.sass']
})
export class ConsumerComponent implements OnInit {

  messages: Message[] = [];

  constructor(private consumeService: ConsumeService) { }

  ngOnInit(): void {
    this.getTweets();  
  }

  getTweets(): void {
    this.consumeService.getTweets()
    .subscribe(messages => this.messages = messages);
  }
}