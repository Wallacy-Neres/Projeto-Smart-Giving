import { Usuario } from './usuario';

export class Postagem {
    public codigo: number;
    public titulo: string;
    public texto: string;
    public data: Date;
    usuario: Usuario;
}