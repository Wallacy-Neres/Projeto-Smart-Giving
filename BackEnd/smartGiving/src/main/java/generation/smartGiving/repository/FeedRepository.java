package generation.smartGiving.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import generation.smartGiving.model.Feed;

@Repository
public interface FeedRepository extends JpaRepository<Feed, Long>{
	
	@Modifying
	@Transactional
	@Query(value = "delete from tb_feed where cd_usuario = ?1", nativeQuery = true)
	void deleteFeedsWithUserCodigo(long codigo);
}
