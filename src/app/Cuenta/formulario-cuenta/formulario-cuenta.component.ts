import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CuentaCreacionDTO, CuentaDTO } from '../../models/Cuenta';
import { FormBuilder, FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { TipoCuentaDTO } from '../../models/TipoCuenta';
import { TipoCuentaService } from '../../servicios/tipo-cuenta.service';

@Component({
  selector: 'app-formulario-cuenta',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
  templateUrl: './formulario-cuenta.component.html',
  styleUrl: './formulario-cuenta.component.css'
})
export class FormularioCuentaComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }

    this.cargarCatologo();
  }

  @Input() model: CuentaDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<CuentaCreacionDTO>();

  private readonly dosDecimalesRegex = /^\d{1,16}(\.\d{1,2})?$/;
  tipoCeuntaServicio = inject(TipoCuentaService);
  tiposCuentasList: TipoCuentaDTO[] = [];


  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula(), Validators.maxLength(50)]}],
    tipoCuenta: new FormControl<number | null>(null, {validators: [Validators.required]}),
    balance: new FormControl<number | null>(null, {validators: [Validators.required, Validators.min(0), Validators.max(9999999999999999.99), Validators.pattern(this.dosDecimalesRegex)]}),
    descripcion: new FormControl<string | null>(null, {validators: [Validators.maxLength(1000)]})
  });

  obtenerErrorCampoNombre(){
    let campo = this.form.controls.nombre;

    if(campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if(campo.hasError('maxlength')){
      return `El campo nombre no puede tener más de ${campo.getError('maxlength').requiredLength} caracteres`;
    }

    if(campo.hasError('primeraLetraMayuscula')){
      return 'La priemra letra debe ser mayuscula'
    }

    return "";
  }

  obtnerErroresTipoCuenta(){
    let campo = this.form.controls.tipoCuenta;

    if(campo.hasError('required')){
      return 'El campo tipo cuenta es requerido';
    }

    return "";
  }

  obtenerErroresBalance(){
    let campo = this.form.controls.balance;

    if(campo.hasError('required')){
      return 'El campo balance es requerido';
    }

    if(campo.hasError('max')){
      return 'el campo solo soporta hasta 9999999999999999.99';
    }

    if(campo.hasError('pattern')){
      return 'El campo solo acepta números';
    }

    return "";
  }

  obtenerErroresDescripcion(){
    let campo = this.form.controls.descripcion;

    if(campo.hasError('maxlength')){
      return `El campo no acepta más de ${campo.getError('maxlength').requiredLength} caracteres`
    }

    return "";
  }

  cargarCatologo(){
    this.tipoCeuntaServicio.obtenerAllSinPaginar().subscribe({
      next: (respuesta) => {
        this.tiposCuentasList = respuesta;
      },
      error: (err) => {
        console.error('Error al obtener los tipos cuenta');
      }
    });
  }

  guardarCambios(){
    if(!this.form.valid){
      return;
    }

    const cuenta = this.form.value as CuentaCreacionDTO;
    this.posteoFormulario.emit(cuenta);
  }
}
