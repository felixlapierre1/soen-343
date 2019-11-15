package app.db;

import org.springframework.data.repository.CrudRepository;

import app.db.SoftBoi;
import java.util.List;
import org.springframework.stereotype.Repository;

/**
 * This class will be auto-implemented by Spring into a bean.
 * @author Felix
 */
@Repository
public interface SoftBoiRepository extends CrudRepository<SoftBoi, Long> {
    List<SoftBoi> findByName(String name);
    List<SoftBoi> findAll();
}
