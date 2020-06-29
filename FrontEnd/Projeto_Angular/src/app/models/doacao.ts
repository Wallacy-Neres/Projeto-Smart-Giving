import { Usuario } from './usuario';

export class Doacao {
    codigo: string;
    endereco: string;
    doado: number;
    data: Date;
    cupom: string;
    usuario: Usuario;
}