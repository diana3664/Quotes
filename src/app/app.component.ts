import { Component } from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: string[];
  constructor(){
    this.quotes = ["On staying flexible. Don't make plans, make options.","I think the more unexpected something is, the more there is to learn from it.","One ought every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words."]

  }
}
