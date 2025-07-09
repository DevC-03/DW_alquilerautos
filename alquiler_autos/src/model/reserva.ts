export class Reserva {
    id: number;
    cliente: number;
    vehiculo: number;
    chofer: number;
    fecha_inicio: Date;
    fecha_fin: Date;
    estado: string = 'PENDIENTE';
    precio_total: number;
    seguro: boolean = true;
    requiere_chofer: boolean = false;
}