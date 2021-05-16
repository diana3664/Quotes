import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes :Quote [] = [
    new Quote("Dian K.","On staying flexible. Don't make plans, make options.","Nicholas N.",0,0),
    new Quote("Christine C.","I think the more unexpected something is, the more there is to learn from it.", "Christoph H.",0,0),
    new Quote("Martin L","One ought every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words.","Ann QQ",0,0),

  ]; 

  addNewQoute(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  
completeQuote(isComplete, index){
  if (isComplete){
    let toDelete = confirm('Are you sure you want to delete this quote?')

    if(toDelete){
      this.quotes.splice(index,1);
    }
   
  }
}

upVote(upvote,index){
  if(upvote){
    this.quotes[index].upvote +=1;
  }
}


downVote(upvote,index){
  if(upvote){
    this.quotes[index].upvote +=1;
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
