package educalivros.spring.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

import educalivros.spring.api.ValueObjects.V1.AutorVO;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.dozer.DozerMapper;
import educalivros.spring.api.models.Autor;
import educalivros.spring.api.repositories.AutorRepository;


@Service
public class AutorService {


    private Logger logger = Logger.getLogger(AutorRepository.class.getName());


    @Autowired
    AutorRepository repository;

    // @Autowired
    // AutorMapper cltmapper;

    public List<AutorVO> findAllAutors(){

        logger.info("Finding all people");
        // List<Autor> listaVO2 = repository.findAll();
        // return cltmapper.AutorToAutorVO2List(listaVO2);
        return DozerMapper.parseListObjects(repository.findAll(), AutorVO.class);
    }

    public AutorVO findByIdAutor(Long id){

        // var entity = repository.findById(id)
        //         .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        // var VO2 = cltmapper.AutorToAutorVO2mapper(entity);   
        var VO = DozerMapper.parseObjects(repository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), AutorVO.class);
        return VO;      
    }   

    public AutorVO createAutor(AutorVO autor) {

        logger.info("Creating one Autor");
        //var entity = cltmapper.AutorVO2ToAutorMapper(Autor);
        var entity = DozerMapper.parseObjects(autor, Autor.class);
        var VO = DozerMapper.parseObjects(repository.save(entity), AutorVO.class);
        return VO;
    }

    public AutorVO updateAutor(AutorVO autor) {

        logger.info("Updating one Autor");
        var entity = repository.findById(autor.getId_autor())
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));

        entity.setNome_autor(autor.getNome_autor());
        entity.setSobrenome_autor(autor.getSobrenome_autor());

        var VO = DozerMapper.parseObjects(repository.save(entity), AutorVO.class);
        return VO;
    }

    public void deleteAutor(Long id) {

        logger.info("Deleting one Autor");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        repository.delete(entity);

    }
    
}
