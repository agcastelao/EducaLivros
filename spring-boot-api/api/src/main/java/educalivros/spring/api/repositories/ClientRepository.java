package educalivros.spring.api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import educalivros.spring.api.models.Client;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

    Optional<Client> findByCpf(String cpf);
}
