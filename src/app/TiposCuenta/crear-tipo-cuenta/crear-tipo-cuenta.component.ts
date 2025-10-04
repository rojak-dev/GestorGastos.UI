import { Component, inject } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-crear-tipo-cuenta',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-tipo-cuenta.component.html',
  styleUrl: './crear-tipo-cuenta.component.css'
})
export class CrearTipoCuentaComponent {

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['']
  });

  guardarCambios(){
    console.log(this.form.value);
  }
}
