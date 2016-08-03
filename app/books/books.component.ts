import { Component,OnInit, trigger,state,style,transition,animate } from '@angular/core'; 
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BookService } from '../../app/book.service';
import { MenuItemType } from '../interface/menu.type';
import { PaginationComponent } from '../../app/shared/pagination/pagination.component';



@Component({
    selector:'books',
    templateUrl : './app/books/books.component.html' ,
    
    directives: [ROUTER_DIRECTIVES,PaginationComponent] ,
    providers: [BookService]    
})
export class BooksComponent implements OnInit {
  
    books: any[] ;
    searchTerm:string ='';

    constructor(private bookService: BookService) { 
    }

 
    categories:MenuItemType[] = [
        { url:'Agriculture',text:'Agriculture'},
        { url:'Bussiness',text:'Bussiness'},
        { url:'Cooking',text:'Cooking'},
        { url:'Food & Wine',text:'Food & Wine'},
        { url:'History',text:'History'},
        { url:'Programming',text:'Programming'},
        { url:'Philosophy',text:'Philosophy'},
        { url:'Religion',text:'Religion'} 
    ];
 
    ngOnInit(){
        this.bookService.getBooks().toPromise().then(res=>{
            this.books=   res.json().items;  
        }).catch(x=>{ 
            console.log("error"); 
        });
    } 

    showCategoryBooks(selectedCategory:string){ 
         this.bookService.getBooks(selectedCategory).toPromise().then(res=>{
            this.books=   res.json().items;  
        }).catch(x=>{ 
            console.log("error"); 
        });
    }

    searchBooks(){
        if(this.searchTerm.trim() !=""){
            this.bookService.getBooks(this.searchTerm).toPromise().then(res=>{
                this.books=   res.json().items;  
            }).catch(x=>{ 
                console.log("error"); 
            });
        }
    }

    clickEvent(currentPage:number){
        debugger;
        alert(currentPage);
    }
}

