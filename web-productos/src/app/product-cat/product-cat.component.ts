import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import {Product} from '../product';

@Component({
  selector: 'app-product-cat',
  templateUrl: './product-cat.component.html',
  styleUrls: ['./product-cat.component.scss']
})
export class ProductCatComponent implements OnInit {

  data: Product[]=[];
  isLoadingResults=true;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts()
    .subscribe(res=>{
      this.data=res;
      console.log(this.data);
      this.isLoadingResults=false;
    },err=>{
      console.log(err);
      this.isLoadingResults=false;
    })
  }

}
