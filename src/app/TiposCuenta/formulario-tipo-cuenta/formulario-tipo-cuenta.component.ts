import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { TipoCuentaCreacionDTO, TipoCuentaDTO } from '../../models/TipoCuenta';
import { TipoCuentaService } from '../../servicios/tipo-cuenta.service';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';

@Component({
  selector: 'app-formulario-tipo-cuenta',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-tipo-cuenta.component.html',
  styleUrl: './formulario-tipo-cuenta.component.css'
})
export class FormularioTipoCuentaComponent implements OnInit{
  ngOnInit(): void {
    if(this.modelo !== undefined)
    {
      this.form.patchValue(this.modelo);
    }
  }
  private formbuilder = inject(FormBuilder);
  
  @Input() modelo: TipoCuentaDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<TipoCuentaCreacionDTO>();

  form = this.formbuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula(), Validators.maxLength(50)]}]
  });

  obtnerErrorCampoNombre(): string{
    let nombre  = this.form.controls.nombre;

    if(nombre.hasError('required')){
      return "El campo nombre es requerido";
    }

    if(nombre.hasError('maxLength')){
      return `El campo nombre no puede tener más de ${nombre.getError("maxLength").requiredLength} caracteres`;
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

    this.posteoFormulario.emit(tipoCuenta);
  }
}
