import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearTipoCuentaComponent } from './TiposCuenta/crear-tipo-cuenta/crear-tipo-cuenta.component';
import { IndiceTiposCuentasComponent } from './TiposCuenta/indice-tipos-cuentas/indice-tipos-cuentas.component';
import { EditarTipoCuentaComponent } from './TiposCuenta/editar-tipo-cuenta/editar-tipo-cuenta.component';
import { NoEncontradoComponent } from './compartidos/componentes/no-encontrado/no-encontrado.component';
import { IndiceCuentaComponent } from './Cuenta/indice-cuenta/indice-cuenta.component';
import { CrearCuentaComponent } from './Cuenta/crear-cuenta/crear-cuenta.component';
import { EditarCuentaComponent } from './Cuenta/editar-cuenta/editar-cuenta.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'tipoCuentas', component: IndiceTiposCuentasComponent},
    {path: 'tipoCuentas/crear', component: CrearTipoCuentaComponent},
    //para poder leer esta variable de ruta hay que configurar el proveedor withComponentInputBindign() en el proveedor de ruta
    {path: 'tipoCuentas/editar/:id', component: EditarTipoCuentaComponent},
    {path: 'cuentas', component: IndiceCuentaComponent},
    {path: 'cuentas/crear', component: CrearCuentaComponent},
    {path: 'cuentas/editar/:id', component: EditarCuentaComponent},
    //wildCard para atrapar rutas no encontradas
    {path: '**', component: NoEncontradoComponent}
];
