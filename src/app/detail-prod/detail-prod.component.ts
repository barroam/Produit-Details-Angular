import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-prod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})

export class DetailProdComponent {
  @Input() produit: any;
}
