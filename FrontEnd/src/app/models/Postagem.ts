import { Usuario } from './usuario';

export class Postagem {
    public codigo: number;
    public texto: string;
    public data: Date;
    usuario: Usuario;
}