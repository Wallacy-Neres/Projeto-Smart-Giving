package generation.smartGiving.controller;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import generation.smartGiving.model.Usuario;
import generation.smartGiving.model.UsuarioLogin;
import generation.smartGiving.repository.DescontoRepository;
import generation.smartGiving.repository.EnderecoParceiroRepository;
import generation.smartGiving.repository.FeedRepository;
import generation.smartGiving.repository.UsuarioRepository;
import generation.smartGiving.service.SendMail;
import generation.smartGiving.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository repository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private SendMail sendEmail;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Usuario> GetById(@PathVariable long codigo){
		return repository.findById(codigo)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
		
	@PostMapping("/logar")
	public ResponseEntity<UsuarioLogin> Autentication(@RequestBody Optional<UsuarioLogin> user){
		return usuarioService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> PostCadastrar(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(usuarioService.CadastrarUsuario(usuario));
	}
	
	@PostMapping("/redefinir")
	public ResponseEntity<Usuario> PostRedefinir(@RequestBody String usuario){
		return repository.findByEmail(usuario).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping("/redefinir")
	public void PutSenha(@RequestBody Usuario user){
		
		String subject = "Redefinição da Senha";
		String body = "A sua nova senha é: " + user.getSenha();
		sendEmail.send(user.getEmail(), subject, body);
		System.out.println(user);
		Usuario usuario = usuarioService.encriptarSenha(user);
		System.out.println(usuario);
		repository.save(usuario);
	}
	
	@PutMapping
	public ResponseEntity<Usuario> Put(@RequestBody Usuario user){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(user));
	}
	
	@DeleteMapping("/{codigo}")
	public void Delete(@PathVariable long codigo) {
		usuarioService.Excluir(codigo);
	}

}
