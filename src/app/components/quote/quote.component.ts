import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes :Quote [] = [
    new Quote("Dian k.","I think the more unexpected something is, the more there is to learn from it, like this project.", "Christoph H.",0,0),

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


downVote(downvote,index){
  if(downvote){
    this.quotes[index].downVote +=1;
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
