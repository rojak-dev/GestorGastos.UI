import { Component, inject } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { TipoCuentaCreacionDTO } from '../../models/TipoCuenta';

@Component({
  selector: 'app-crear-tipo-cuenta',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-tipo-cuenta.component.html',
  styleUrl: './crear-tipo-cuenta.component.css'
})
export class CrearTipoCuentaComponent {

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula()]}]
  })

  obtnerErrorCampoNombre(): string{
    let nombre  = this.form.controls.nombre;

    if(nombre.hasError('required')){
      return "El campo nombre es requerido";
    }

    if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return "";
  }

  guardarCambios(){
    console.log(this.form.value);

    if(!this.form.valid)
    {
      return;
    }

    const tipoCuenta = this.form.value as TipoCuentaCreacionDTO;
    //this.posteoFormulario.emit(tipoCuenta);
  }
}
