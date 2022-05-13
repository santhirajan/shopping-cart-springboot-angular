import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;
  selectedProduct ?: Product;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  isBook(product : Product) {
    if(product.category==='Books')
      return true;
    return false;
  }

  addToCart() {
    this.router.navigate(['cart']);
  }
}
