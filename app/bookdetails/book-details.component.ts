import { Component,OnInit, trigger,state,style,transition,animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { BookService } from '../../app/book.service';
import { BookModel }     from '../book.model';

@Component({
    selector:'books-details',
    templateUrl : './app/bookdetails/book-details.component.html',
    providers: [BookService] ,
    animations: [
    trigger('bookState', [
        state('inactive', style({
            backgroundColor: '#eee',
            transform: 'scale(1)'
        })),
        state('active',   style({
            backgroundColor: '#cfd8dc',
            transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
        ])
    ]  
})
export class BookDetailsComponent implements OnInit{
    
    constructor(private route: ActivatedRoute, private service: BookService){ 
    }

    book : any;
    Id:any;
    title:string = 'Angular 2 awasome book';

    ngOnInit(){
         this.route.params.subscribe(params => {
           // (+) converts string 'id' to a number
            let id = params['Id'];   
            let book = this.service.getBook(id)
            .then(res => {  
                this.book=   res.json() ; 
            }).catch(x=>{ 
                console.log("error"); 
            });
      });
 
    }
}