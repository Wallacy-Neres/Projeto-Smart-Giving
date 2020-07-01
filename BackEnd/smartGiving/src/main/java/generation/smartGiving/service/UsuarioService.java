package generation.smartGiving.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import generation.smartGiving.model.Usuario;
import generation.smartGiving.model.UsuarioLogin;
import generation.smartGiving.repository.DescontoRepository;
import generation.smartGiving.repository.EnderecoParceiroRepository;
import generation.smartGiving.repository.FeedRepository;
import generation.smartGiving.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	@Autowired
	private FeedRepository feedRepository;
	
	@Autowired
	private EnderecoParceiroRepository enderecoRepository;
	
	@Autowired
	private DescontoRepository descontoRepository;
	
	public Usuario CadastrarUsuario(Usuario usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		
		usuario.setSenha(senhaEncoder);
		
		return repository.save(usuario);
	}
	
	public Usuario encriptarSenha(Usuario usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		
		usuario.setSenha(senhaEncoder);
		
		return usuario;
	}
	
	public Optional<UsuarioLogin> Logar(Optional<UsuarioLogin> user){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Usuario> usuario = repository.findByEmail(user.get().getEmail());
		
		if(usuario.isPresent()) {
			if(encoder.matches(user.get().getSenha(), usuario.get().getSenha())) {
				String auth = user.get().getEmail() + ":" + user.get().getSenha();
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodedAuth);
				
				user.get().setToken(authHeader);
				user.get().setNome(usuario.get().getNome());
				user.get().setCodigo(usuario.get().getCodigo());
				user.get().setPerfil(usuario.get().getPerfil());
				
				return user;
			}
		}
		return null;
	}
	
	public void Excluir(long codigo) {
		feedRepository.deleteFeedsWithUserCodigo(codigo);
		enderecoRepository.deleteEnderecosWithUserCodigo(codigo);
		descontoRepository.deleteCuponsWithUserCodigo(codigo);
		repository.deleteById(codigo);
	}
	
}
