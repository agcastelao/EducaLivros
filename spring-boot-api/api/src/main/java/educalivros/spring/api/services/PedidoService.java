package educalivros.spring.api.services;

import java.io.Serializable;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;

import educalivros.spring.api.ValueObjects.V1.PedidoVO;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.dozer.DozerMapper;
import educalivros.spring.api.models.Pedido;
import educalivros.spring.api.repositories.PedidoRepository;
import jakarta.persistence.Entity;

@Entity
public class PedidoService implements Serializable{

    private Logger logger = Logger.getLogger(PedidoService.class.getName());


    @Autowired
    PedidoRepository repository;

    // @Autowired
    // PedidoMapper cltmapper;

    public List<PedidoVO> findAllPedidos(){

        logger.info("Finding all people");
        // List<Pedido> listaVO2 = repository.findAll();
        // return cltmapper.PedidoToPedidoVO2List(listaVO2);
        return DozerMapper.parseListObjects(repository.findAll(), PedidoVO.class);
    }

    public PedidoVO findByIdPedido(Long id){

        // var entity = repository.findById(id)
        //         .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        // var VO2 = cltmapper.PedidoToPedidoVO2mapper(entity);   
        var VO = DozerMapper.parseObjects(repository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), PedidoVO.class);
        return VO;      
    }   

    public PedidoVO createPedido(PedidoVO pedido) {

        logger.info("Creating one Pedido");
        //var entity = cltmapper.PedidoVO2ToPedidoMapper(Pedido);
        var entity = DozerMapper.parseObjects(pedido, Pedido.class);
        var VO = DozerMapper.parseObjects(repository.save(entity), PedidoVO.class);
        return VO;
    }

    public PedidoVO updatePedido(PedidoVO pedido) {

        logger.info("Updating one Pedido");
        var entity = repository.findById(pedido.getId_pedido())
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        
        entity.setData_pedido(pedido.getData_pedido());
        entity.setValor_total(pedido.getValor_total());

        var VO = DozerMapper.parseObjects(repository.save(entity), PedidoVO.class);
        return VO;
    }

    public void deletePedido(Long id) {

        logger.info("Deleting one Pedido");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        repository.delete(entity);

    }    

}
