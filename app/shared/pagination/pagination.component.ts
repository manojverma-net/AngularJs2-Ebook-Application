import { Component,OnInit,EventEmitter } from '@angular/core';
 
@Component({
    selector:'pagination',
    templateUrl : './app/shared/pagination/pagination.Component.html',
    inputs:['itemPerPage','totalItems'] ,
    outputs:['clickEvent']
})
export class PaginationComponent implements OnInit { 
    private currentPage:number;
    private pages:number; 
    private disablePrevButton:boolean;
    private disableNextButton:boolean;

    //Component Input Fields
    itemPerPage:number;
    totalItems:number; 
    
    //Component Output Events
    clickEvent = new EventEmitter<number>(); 

    ngOnInit(){
        if(this.itemPerPage < 1){
            throw "Item per page should be greater than 1"; 
        }
        if(this.totalItems < 1){
            throw "Items should be greater than 0"; 
        }
        //calculate pages
        let pageCount = this.totalItems/this.itemPerPage;
        if(pageCount % 1 == 0){
            this.pages = pageCount;
        }else{
            this.pages = pageCount+1;
        }

        this.disablePrevButton = true;
        this.disableNextButton = (this.pages == 1);
        this.currentPage =1;
    }

    previousPage(){ 
        if(this.disablePrevButton){
            return;
        }

        this.disableNextButton = false;
        if(this.currentPage == 2){
            this.currentPage--;
            this.disablePrevButton = true;  
        }
        else{
            this.currentPage--; 
        }

        //emit previous event
        this.clickEvent.emit(this.currentPage);
    }

    nextPage(){
          
        if(this.disableNextButton){
            return;
        }

        this.disablePrevButton = false;

        if(this.currentPage == (this.pages - 1)){
            this.currentPage++;
            this.disableNextButton = true;  
        }
        else{
            this.currentPage++; 
        }

        //emit previous event
        this.clickEvent.emit(this.currentPage);
    }
}