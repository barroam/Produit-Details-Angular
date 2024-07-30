import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProdComponent } from '../detail-prod/detail-prod.component';

@Component({
  selector: 'app-prod',
  standalone: true,
  imports: [CommonModule,DetailProdComponent],
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})

export class ProdComponent {

  produits = [
    { id: 1, titre: 'Rolex Submariner', prix: 7500, description: 'Montre de plongée emblématique.', image: 'https://img.freepik.com/photos-gratuite/montre-doree-elegante-surface-blanche_181624-27078.jpg?t=st=1722132861~exp=1722136461~hmac=4819d4a6777f796aca020c527b754eabaf2cef7b79ae7bce5a6b0a0e4535b9a7&w=826' },
    { id: 2, titre: 'Omega Seamaster', prix: 4500, description: 'Montre de plongée professionnelle.', image: 'https://img.freepik.com/photos-gratuite/montre-elegante-chaine-argent-or-isolee_181624-27080.jpg?t=st=1722132887~exp=1722136487~hmac=d25506c9fb63e43f4033af9c29c83dfc7b4210d5164c8fe131caa60162e312f5&w=826' },
    { id: 3, titre: 'Tag Heuer Carrera', prix: 3200, description: 'Montre de sport classique.', image: 'https://img.freepik.com/photos-gratuite/montre-elegante-chaine-argent-or-sous-lumieres-isolees_181624-28442.jpg?t=st=1722133791~exp=1722137391~hmac=2395b7a7a36bc7863846b5f4dd2058fd457f2192f37e8dc2d45c38fba09dcad5&w=740' },
    { id: 4, titre: 'Audemars Piguet Dame', prix: 15000, description: 'Montre de luxe emblématique .', image: 'https://img.freepik.com/photos-gratuite/montre-or-bande-cuir-blanc-sous-lumieres-isolees-blanc_181624-28414.jpg?semt=ais_user' },
    { id: 5, titre: 'Patek Philippe Nautilus', prix: 25000, description: 'Montre de sport de luxe.', image: 'https://img.freepik.com/photos-premium/montre-argent-or-isolee-fond-blanc-ete-generee_1022157-5997.jpg?w=826' },
    { id: 6, titre: 'Breitling Navitimer', prix: 6000, description: 'Montre de pilote iconique.', image: 'https://img.freepik.com/photos-premium/montre-argent-or-isolee-fond-blanc-ete-generee_1022157-6047.jpg?w=826' }
  ];

  selectedProduit: any = null;

  onSelect(produit: any): void {
    this.selectedProduit = produit;
  }
}
