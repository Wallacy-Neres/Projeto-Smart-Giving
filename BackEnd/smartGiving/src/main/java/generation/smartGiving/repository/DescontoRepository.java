package generation.smartGiving.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import generation.smartGiving.model.Desconto;

@Repository
public interface DescontoRepository extends JpaRepository<Desconto, Long>{
		
}
