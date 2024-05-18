package educalivros.spring.api.services;

import java.io.Serializable;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import educalivros.spring.api.ValueObjects.V1.CarrinhoVO;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.dozer.DozerMapper;
import educalivros.spring.api.models.Carrinho;
import educalivros.spring.api.repositories.CarrinhoRepository;

@Service
public class CarrinhoService implements Serializable {

    private Logger logger = Logger.getLogger(CarrinhoRepository.class.getName());


    @Autowired
    CarrinhoRepository repository;

    // @Autowired
    // CarrinhoMapper cltmapper;

    public List<CarrinhoVO> findAllCarrinhos(){

        logger.info("Finding all people");
        // List<Carrinho> listaVO2 = repository.findAll();
        // return cltmapper.CarrinhoToCarrinhoVO2List(listaVO2);
        return DozerMapper.parseListObjects(repository.findAll(), CarrinhoVO.class);
    }

    public CarrinhoVO findByIdCarrinho(Long id){

        // var entity = repository.findById(id)
        //         .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        // var VO2 = cltmapper.CarrinhoToCarrinhoVO2mapper(entity);   
        var VO = DozerMapper.parseObjects(repository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), CarrinhoVO.class);
        return VO;      
    }   

    public CarrinhoVO createCarrinho(CarrinhoVO Carrinho) {

        logger.info("Creating one Carrinho");
        //var entity = cltmapper.CarrinhoVO2ToCarrinhoMapper(Carrinho);
        var entity = DozerMapper.parseObjects(Carrinho, Carrinho.class);
        var VO = DozerMapper.parseObjects(repository.save(entity), CarrinhoVO.class);
        return VO;
    }

    public CarrinhoVO updateCarrinho(CarrinhoVO carrinho) {

        logger.info("Updating one Carrinho");
        var entity = repository.findById(carrinho.getId_carrinho())
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));

        entity.setQuantidade_produto(carrinho.getQuantidade_produto());

        var VO = DozerMapper.parseObjects(repository.save(entity), CarrinhoVO.class);
        return VO;
    }

    public void deleteCarrinho(Long id) {

        logger.info("Deleting one Carrinho");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        repository.delete(entity);

    }

}
