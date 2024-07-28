
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdComponent } from './prod/prod.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProdComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

