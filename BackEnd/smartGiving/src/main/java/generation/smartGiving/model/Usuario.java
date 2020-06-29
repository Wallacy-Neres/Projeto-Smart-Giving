package generation.smartGiving.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;

@Entity
@Table(name = "TB_USUARIO")
public class Usuario {

	@Column(name = "CD_USUARIO")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long codigo;
	
	@Column(name = "NM_USUARIO", nullable = false, length = 50)
	@NotNull
	@Size(min = 2, max = 50)
	private String nome;
	
	@Column(name = "NM_EMAIL", nullable = false, length = 30)
	@NotNull
	@Email
	private String email;
	
	@Column(name = "CD_SENHA", nullable = false, length = 100)
	@NotNull
	@Size(min = 5, max = 100)
	private String senha;
	
	@Column(name = "NM_SEXO", nullable = false, length = 1)
	@NotNull
	@Size(min = 1, max = 1)
	private String sexo;
	
	@Column(name = "DT_DATA_NASCIMENTO", nullable = false)
	@NotNull
	private Date data;
	
	public long getCodigo() {
		return codigo;
	}
	
	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getSenha() {
		return senha;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public String getSexo() {
		return sexo;
	}
	
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	
	public Date getData() {
		return data;
	}
	
	public void setData(Date data) {
		this.data = data;
	}
}
