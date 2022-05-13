import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  searchText = ''
  searchProductName : string = '';
  searchCategory : string = '';
  searchDescription : string = '';
  searchPriceRangeMin : number = 0;
  searchPriceRangeMax : number = 10000;

  constructor() { }

  ngOnInit(): void {

  }

  handleMinPriceChange() {
    if(this.searchPriceRangeMax < this.searchPriceRangeMin)
    this.searchPriceRangeMax = this.searchPriceRangeMin + 500;
  }

  handleMaxPriceChange() {
    if(this.searchPriceRangeMax < this.searchPriceRangeMin)
    this.searchPriceRangeMin = this.searchPriceRangeMax - 500;
  }

  handleDetailedSearch() {
    console.log(this.searchProductName);
    console.log(this.searchCategory);
    console.log(this.searchDescription);
    console.log(this.searchPriceRangeMin + " " + this.searchPriceRangeMax);
    alert("check console");
  }
}
