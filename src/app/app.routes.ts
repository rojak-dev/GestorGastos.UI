import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearTipoCuentaComponent } from './TiposCuenta/crear-tipo-cuenta/crear-tipo-cuenta.component';
import { IndiceTiposCuentasComponent } from './TiposCuenta/indice-tipos-cuentas/indice-tipos-cuentas.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'tipoCuenta', component: IndiceTiposCuentasComponent},
    {path: 'tipoCuenta/crear', component: CrearTipoCuentaComponent}
];
