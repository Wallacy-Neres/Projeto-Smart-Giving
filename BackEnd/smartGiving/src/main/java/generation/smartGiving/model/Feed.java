package generation.smartGiving.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "TB_FEED")
public class Feed {

	@Column(name = "CD_FEED")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long codigo;
	
	@Column(name = "DT_PUBLICACAO", nullable = false)
	@NotNull
	private Date data = new java.sql.Date(System.currentTimeMillis());
	
	@Column(name = "DS_PUBLICACAO", nullable = false, length = 200)
	@NotNull
	@Size(min = 5, max = 200)
	private String texto;

	@ManyToOne
	@JoinColumn(name = "CD_USUARIO", nullable = false)
	private Usuario usuario;
	
	public long getCodigo() {
		return codigo;
	}

	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	
	
}
