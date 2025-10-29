import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearTipoCuentaComponent } from './TiposCuenta/crear-tipo-cuenta/crear-tipo-cuenta.component';
import { IndiceTiposCuentasComponent } from './TiposCuenta/indice-tipos-cuentas/indice-tipos-cuentas.component';
import { EditarTipoCuentaComponent } from './TiposCuenta/editar-tipo-cuenta/editar-tipo-cuenta.component';
import { NoEncontradoComponent } from './compartidos/componentes/no-encontrado/no-encontrado.component';
import { IndiceCuentaComponent } from './Cuenta/indice-cuenta/indice-cuenta.component';
import { CrearCuentaComponent } from './Cuenta/crear-cuenta/crear-cuenta.component';
import { EditarCuentaComponent } from './Cuenta/editar-cuenta/editar-cuenta.component';
import { IndiceTransaccionComponent } from './Transaccion/indice-transaccion/indice-transaccion.component';
import { CrearTransaccionComponent } from './Transaccion/crear-transaccion/crear-transaccion.component';
import { EditarTransaccionComponent } from './Transaccion/editar-transaccion/editar-transaccion.component';
import { IndiceCategoriaComponent } from './Categoria/indice-categoria/indice-categoria.component';
import { CrearCategoriaComponent } from './Categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './Categoria/editar-categoria/editar-categoria.component';
import { IndiceTiposOperacionesComponent } from './TiposOperacion/indice-tipos-operaciones/indice-tipos-operaciones.component';
import { CrearTipoOperacionComponent } from './TiposOperacion/crear-tipo-operacion/crear-tipo-operacion.component';
import { EditarTipoOperacionComponent } from './TiposOperacion/editar-tipo-operacion/editar-tipo-operacion.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'transacciones', component: IndiceTransaccionComponent},
    {path: 'transacciones/crear', component: CrearTransaccionComponent},
    {path: 'transacciones/editar/:id', component: EditarTransaccionComponent},
    {path: 'tipoCuentas', component: IndiceTiposCuentasComponent},
    {path: 'tipoCuentas/crear', component: CrearTipoCuentaComponent},
    //para poder leer esta variable de ruta hay que configurar el proveedor withComponentInputBindign() en el proveedor de ruta
    {path: 'tipoCuentas/editar/:id', component: EditarTipoCuentaComponent},
    {path: 'cuentas', component: IndiceCuentaComponent},
    {path: 'cuentas/crear', component: CrearCuentaComponent},
    {path: 'cuentas/editar/:id', component: EditarCuentaComponent},
    {path: 'categorias', component: IndiceCategoriaComponent},
    {path: 'categoria/crear', component: CrearCategoriaComponent},
    {path: 'categoria/editar/:id', component: EditarCategoriaComponent},
    {path: 'tipoOperacion', component: IndiceTiposOperacionesComponent},
    {path: 'tipoOperacion/crear', component: CrearTipoOperacionComponent},
    {path: 'tipoOperacion/editar/:id', component: EditarTipoOperacionComponent},
    //wildCard para atrapar rutas no encontradas
    {path: '**', component: NoEncontradoComponent}
];
