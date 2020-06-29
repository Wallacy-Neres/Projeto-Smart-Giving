package generation.smartGiving.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import generation.smartGiving.model.EnderecoParceiro;

@Repository
public interface EnderecoParceiroRepository extends JpaRepository<EnderecoParceiro, Long>{

}
