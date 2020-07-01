package generation.smartGiving.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "TB_DESCONTO")
public class Desconto {
	
	@Column(name = "CD_DESCONTO", nullable = false, length = 10)
	@Id
	@Size(max = 10)
	private String codigo = "4F7GGT6DEF";
	
	@Column(name = "DS_ENDERECO", nullable = false, length = 100)
	@NotNull
	@Size(max = 100)
	private String endereco;
	
	@Column(name = "QT_DOADO", nullable = false)
	@NotNull
	private long doado;
	
	@Column(name = "DT_DOACAO", nullable = false)
	@NotNull
	private Date data = new java.sql.Date(System.currentTimeMillis());
	
	@Column(name = "CD_CUPOM_USADO", nullable = false, length = 10)
	@NotNull
	@Size(max = 10)
	private String cupom = "false";
	
	@ManyToOne
	@JoinColumn(name = "CD_USUARIO", nullable = false)
	private Usuario usuario;

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public long getDoado() {
		return doado;
	}

	public void setDoado(long doado) {
		this.doado = doado;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getCupom() {
		return cupom;
	}

	public void setCupom(String cupom) {
		this.cupom = cupom;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
}
