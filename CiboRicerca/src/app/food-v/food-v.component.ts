import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CiboService } from '../cibo.service';

@Component({
  selector: 'app-food-v',
  templateUrl: './food-v.component.html',
  styleUrls: ['./food-v.component.css']
})
export class FoodVComponent implements OnInit {
  productDetails: any = {};
  productId: string = '';

  constructor(
    private route: ActivatedRoute,
    private ciboService: CiboService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.ciboService.getProductDetails(this.productId).subscribe(data => {
      this.productDetails = data.product || {};
    });
  }
}
