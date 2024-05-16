package educalivros.spring.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import educalivros.spring.api.models.Autor;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long>{

}
