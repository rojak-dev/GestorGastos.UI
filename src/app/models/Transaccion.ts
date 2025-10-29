export interface TransaccionCreacionDTO{
    usuarioId: number;
    fechaTransaccion: Date;
    monto: number;
    tipoOperacionId: number;
    nota: string;
    cuentaId: number;
    categoriaId: number;
}

export interface TransaccionDTO{
    id: number;
    usuarioId: number;
    fechaTransaccion: Date;
    monto: number;
    tipoOperacionId: number;
    nota: string;
    cuentaId: number;
    categoriaId: number;
}