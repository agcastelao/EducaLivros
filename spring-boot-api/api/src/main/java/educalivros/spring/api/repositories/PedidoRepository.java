package educalivros.spring.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import educalivros.spring.api.models.Pedido;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long>{

}
