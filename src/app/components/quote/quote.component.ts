import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes :Quote [] = [
    new Quote(1,"On staying flexible. Don't make plans, make options."),
    new Quote(2,"I think the more unexpected something is, the more there is to learn from it."),
    new Quote(2,"One ought every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words."),

  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
