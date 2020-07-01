package generation.smartGiving.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import generation.smartGiving.model.EnderecoParceiro;

@Repository
public interface EnderecoParceiroRepository extends JpaRepository<EnderecoParceiro, Long>{

	@Modifying
	@Transactional
	@Query(value = "delete from tb_endereco_parceiro where cd_usuario = ?1", nativeQuery = true)
	void deleteEnderecosWithUserCodigo(long codigo);
}
