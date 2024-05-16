package educalivros.spring.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import educalivros.spring.api.models.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long>{

}
