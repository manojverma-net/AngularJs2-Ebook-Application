import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES,Router } from '@angular/router';

@Component({
    selector: 'pm-header',
    templateUrl : './app/shared/header/header.component.html' ,
    directives: [ROUTER_DIRECTIVES], 
    providers: [ROUTER_DIRECTIVES]
})

export class HeaderComponent{ 

    constructor(private router: Router){ 
    }
    pageTitle:string ='Google Ebook Store'; 
    menuItems:string[] = []; //['books','book-details']; 
  
    onMenuClick(selectedMenu : string){ 
            this.router.navigate(['/'+selectedMenu]);
    }
}
 
class MenuType {  

    constructor(url:string ,text:string) { 
        this.url = url;
        this.text = text;
    } 
    url:string = '#';
    text:string;
}