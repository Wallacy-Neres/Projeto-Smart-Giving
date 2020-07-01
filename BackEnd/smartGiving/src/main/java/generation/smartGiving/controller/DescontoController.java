package generation.smartGiving.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import generation.smartGiving.model.Desconto;

import generation.smartGiving.repository.DescontoRepository;


@RestController
@RequestMapping("/desconto")
@CrossOrigin("*")
public class DescontoController {

	@Autowired
	private DescontoRepository repository;

	@GetMapping
	public ResponseEntity<List<Desconto>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/Usuario/{codigo}")
	public ResponseEntity<List<Desconto>> GetByUsuarioId(@PathVariable long codigo){
		return ResponseEntity.ok(repository.findByUsuarioCodigo(codigo));
	}
	
	@PostMapping
	public ResponseEntity<Desconto> Post(@RequestBody Desconto desconto){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(desconto));
	}
	
	@PutMapping
	public ResponseEntity<Desconto> Put(@RequestBody Desconto desconto){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(desconto));
	}
}
