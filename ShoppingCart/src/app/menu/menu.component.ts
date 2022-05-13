import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn : boolean = false;
  searchText : string = ''

  constructor(private router:Router, public hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  handleSearch() {
    if(this.searchText=='') {
      
    } else {
      //call search and display search form and results
      console.log("before call " + this.searchText);
      this.router.navigate(['productsearch', this.searchText]);
      console.log("after call " + this.searchText);
    }
  }
}
