package generation.smartGiving.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import generation.smartGiving.model.Desconto;

@Repository
public interface DescontoRepository extends JpaRepository<Desconto, Long>{
		
	List<Desconto> findByUsuarioCodigo(long codigo);
	
	@Modifying
	@Transactional
	@Query(value = "delete from tb_desconto where cd_usuario = ?1", nativeQuery = true)
	void deleteCuponsWithUserCodigo(long codigo);
}