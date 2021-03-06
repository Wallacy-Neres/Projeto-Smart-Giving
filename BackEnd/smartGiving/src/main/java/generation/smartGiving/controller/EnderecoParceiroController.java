package generation.smartGiving.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import generation.smartGiving.model.EnderecoParceiro;
import generation.smartGiving.repository.EnderecoParceiroRepository;

@RestController
@RequestMapping("/endereco")
@CrossOrigin("*")
public class EnderecoParceiroController {

	@Autowired
	private EnderecoParceiroRepository repository;
	
	@GetMapping
	public ResponseEntity<List<EnderecoParceiro>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@PostMapping
	public ResponseEntity<EnderecoParceiro> Post(@RequestBody EnderecoParceiro endereco){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(endereco));
	}
	
	@PutMapping
	public ResponseEntity<EnderecoParceiro> Put(@RequestBody EnderecoParceiro endereco){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(endereco));
	}
	
	@DeleteMapping("/{codigo}")
	public void Delete(@PathVariable long codigo) {
		repository.deleteById(codigo);
	}
	
}
