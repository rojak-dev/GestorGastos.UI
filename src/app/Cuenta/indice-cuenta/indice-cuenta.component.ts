import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-cuenta',
  imports: [RouterLink, MatButtonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './indice-cuenta.component.html',
  styleUrl: './indice-cuenta.component.css'
})
export class IndiceCuentaComponent {

}
