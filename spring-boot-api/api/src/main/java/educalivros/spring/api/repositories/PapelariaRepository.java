package educalivros.spring.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import educalivros.spring.api.models.Papelaria;

@Repository
public interface PapelariaRepository extends JpaRepository<Papelaria, Long>{

}
