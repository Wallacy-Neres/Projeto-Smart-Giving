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

import generation.smartGiving.model.Feed;
import generation.smartGiving.repository.FeedRepository;

@RestController
@RequestMapping("/feed")
@CrossOrigin("*")
public class FeedController {

	@Autowired
	private FeedRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Feed>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Feed> GetById(@PathVariable long codigo){
		return repository.findById(codigo)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Feed> Post(@RequestBody Feed postagem){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(postagem));
	}
	
	@PutMapping
	public ResponseEntity<Feed> Put(@RequestBody Feed postagem){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(postagem));
	}
	
	@DeleteMapping("/{codigo}")
	public void Delete(@PathVariable long codigo) {
		repository.deleteById(codigo);
	}
	
}
