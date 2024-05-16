package educalivros.spring.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import educalivros.spring.api.models.Endereco;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long>{

}
