
import { Component } from '@angular/core';
import { CiboService } from '../cibo.service';

@Component({
  selector: 'app-ricerca-f',
  templateUrl: './ricerca-f.component.html',
  styleUrls: ['./ricerca-f.component.css']
})
export class RicercaFComponent {
  searchResults: any[] = [];
  searchTerm: string = '';

  constructor(private CiboService: CiboService) {}

  search(): void {
    this.CiboService.searchFood(this.searchTerm).subscribe(data => {
      this.searchResults = data.products || [];
    });
  }
}
