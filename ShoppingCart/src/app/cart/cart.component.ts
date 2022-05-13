import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = PRODUCTS;
  selectedProduct ?: Product;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product : Product) {
    this.selectedProduct = product;
  }
}
