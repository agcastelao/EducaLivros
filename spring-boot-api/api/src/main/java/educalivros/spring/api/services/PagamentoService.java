package educalivros.spring.api.services;

import java.io.Serializable;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;

import educalivros.spring.api.ValueObjects.V1.PagamentoVO;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.dozer.DozerMapper;
import educalivros.spring.api.models.Pagamento;
import educalivros.spring.api.repositories.PagamentoRepository;


public class PagamentoService implements Serializable{

    private Logger logger = Logger.getLogger(PagamentoRepository.class.getName());


    @Autowired
    PagamentoRepository repository;

    // @Autowired
    // PagamentoMapper cltmapper;

    public List<PagamentoVO> findAllPagamentos(){

        logger.info("Finding all people");
        // List<Pagamento> listaVO2 = repository.findAll();
        // return cltmapper.PagamentoToPagamentoVO2List(listaVO2);
        return DozerMapper.parseListObjects(repository.findAll(), PagamentoVO.class);
    }

    public PagamentoVO findByIdPagamento(Long id){

        // var entity = repository.findById(id)
        //         .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        // var VO2 = cltmapper.PagamentoToPagamentoVO2mapper(entity);   
        var VO = DozerMapper.parseObjects(repository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), PagamentoVO.class);
        return VO;      
    }   

    public PagamentoVO createPagamento(PagamentoVO pagamento) {

        logger.info("Creating one Pagamento");
        //var entity = cltmapper.PagamentoVO2ToPagamentoMapper(Pagamento);
        var entity = DozerMapper.parseObjects(pagamento, Pagamento.class);
        var VO = DozerMapper.parseObjects(repository.save(entity), PagamentoVO.class);
        return VO;
    }

    public PagamentoVO updatePagamento(PagamentoVO pagamento) {

        logger.info("Updating one Pagamento");
        var entity = repository.findById(pagamento.getId_pedido())
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));

        entity.setData_pagamento(pagamento.getData_pagamento());
        entity.setPagamento_valido(true);
        entity.setForma_pagamento(pagamento.getForma_pagamento());

        var VO = DozerMapper.parseObjects(repository.save(entity), PagamentoVO.class);
        return VO;
    }

    public void deletePagamento(Long id) {

        logger.info("Deleting one Pagamento");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        repository.delete(entity);

    }    

}
