package educalivros.spring.api.services;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import educalivros.spring.api.ValueObjects.V1.PapelariaVO;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.dozer.DozerMapper;
import educalivros.spring.api.models.Papelaria;
import educalivros.spring.api.repositories.PapelariaRepository;

@Service
public class PapelariaService {

        private Logger logger = Logger.getLogger(PapelariaRepository.class.getName());


    @Autowired
    PapelariaRepository repository;

    // @Autowired
    // PapelariaMapper cltmapper;

    public List<PapelariaVO> findAllPapelarias(){

        logger.info("Finding all people");
        // List<Papelaria> listaVO2 = repository.findAll();
        // return cltmapper.PapelariaToPapelariaVO2List(listaVO2);
        return DozerMapper.parseListObjects(repository.findAll(), PapelariaVO.class);
    }

    public PapelariaVO findByIdPapelaria(Long id){

        // var entity = repository.findById(id)
        //         .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        // var VO2 = cltmapper.PapelariaToPapelariaVO2mapper(entity);   
        var VO = DozerMapper.parseObjects(repository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), PapelariaVO.class);
        return VO;      
    }   

    public PapelariaVO createPapelaria(PapelariaVO papelaria) {

        logger.info("Creating one Papelaria");
        //var entity = cltmapper.PapelariaVO2ToPapelariaMapper(Papelaria);
        var entity = DozerMapper.parseObjects(papelaria, Papelaria.class);
        var VO = DozerMapper.parseObjects(repository.save(entity), PapelariaVO.class);
        return VO;
    }

    public PapelariaVO updatePapelaria(PapelariaVO papelaria) {

        logger.info("Updating one Papelaria");
        var entity = repository.findById(papelaria.getId_papelaria())
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));

        entity.setTipo(papelaria.getTipo());
        entity.setNome_produto(papelaria.getNome_produto());
        entity.setMarca(papelaria.getMarca());
        entity.setEstoque_papelaria(papelaria.getEstoque_papelaria());

        var VO = DozerMapper.parseObjects(repository.save(entity), PapelariaVO.class);
        return VO;
    }

    public void deletePapelaria(Long id) {

        logger.info("Deleting one Papelaria");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        repository.delete(entity);

    }


}
