import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../shared/model/abc';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

@Input() productInfo! : Istd

  constructor() { }

  ngOnInit(): void {
    console.log(this.productInfo)
  }

}
