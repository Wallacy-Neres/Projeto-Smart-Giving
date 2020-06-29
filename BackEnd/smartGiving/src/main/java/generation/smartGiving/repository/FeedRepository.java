package generation.smartGiving.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import generation.smartGiving.model.Feed;

@Repository
public interface FeedRepository extends JpaRepository<Feed, Long>{

}
