import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '/workspaces/painting-gallery/src/app/models/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }
}
