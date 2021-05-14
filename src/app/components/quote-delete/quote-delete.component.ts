import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-quote-delete',
  templateUrl: './quote-delete.component.html',
  styleUrls: ['./quote-delete.component.css']
})
export class QuoteDeleteComponent implements OnInit {

  @Input() quote: Quote;

  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
