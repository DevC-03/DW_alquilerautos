export class Reserva {
    cliente: number;
    vehiculo: number;
    chofer: number;
    fecha_inicio: Date;
    fecha_fin: Date;
    estado: string;
    precio_total: number;
    seguro: boolean;
    requiere_chofer: boolean;
}