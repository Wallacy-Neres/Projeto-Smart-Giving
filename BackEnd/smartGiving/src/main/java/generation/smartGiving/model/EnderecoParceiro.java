package generation.smartGiving.model;

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
@Table(name = "TB_ENDERECO_PARCEIRO")
public class EnderecoParceiro {

	@Column(name = "CD_PARCEIRO")
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private long codigo;
	
	@Column(name = "NM_PARCEIRO", nullable = false, length = 50)
	@NotNull
	@Size(min = 3, max = 50)
	private String parceiro;
	
	@Column(name = "DS_PARCEIRO", nullable = false, length = 100)
	@NotNull
	@Size(max = 100)
	private String endereco;
	
	@Column(name = "QT_TOTAL_DOADO", nullable = false)
	@NotNull
	private long totalDoado;
	
	@ManyToOne
	@JoinColumn(name = "CD_USUARIO", nullable = false)
	private Usuario usuario;

	public long getCodigo() {
		return codigo;
	}

	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}

	public String getParceiro() {
		return parceiro;
	}

	public void setParceiro(String parceiro) {
		this.parceiro = parceiro;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public long getTotalDoado() {
		return totalDoado;
	}

	public void setTotalDoado(long totalDoado) {
		this.totalDoado = totalDoado;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario aux) {
		this.usuario = aux;
	}
	
}
