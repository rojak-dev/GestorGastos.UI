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
      this.form.patchValue({
        nombre: this.model.nombre,
        tipoCuenta: this.model.tipoCuentaId,
        balance: this.model.balance,
        descripcion: this.model.descripcion
      });
    }
  }

  @Input() model: CuentaDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<CuentaCreacionDTO>();

  private readonly dosDecimalesRegex = /^\d{1,16}(\.\d{1,2})?$/;
  tipoCeuntaServicio = inject(TipoCuentaService);
  tiposCuentasList: TipoCuentaDTO[] = [{id: 1, nombre: "cards", orden: 1}, {id: 2, nombre: "efectivo", orden: 1}];


  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula(), Validators.maxLength(50)]}],
    tipoCuenta: new FormControl<number | null>(null, {validators: [Validators.required]}),
    balance: new FormControl<number | null>(null, {validators: [Validators.required, Validators.min(0), Validators.max(9999999999999999.99), Validators.pattern(this.dosDecimalesRegex)]}),
    descripcion: new FormControl<string | null>(null, {validators: [Validators.maxLength(1000)]})
  });

  cargarCatologo(){
    //this.tipoCeuntaServicio.obtenerTodos().subscribe()
  }
}
