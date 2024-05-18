package educalivros.spring.api.services;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import educalivros.spring.api.ValueObjects.V1.LivroVO;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.dozer.DozerMapper;
import educalivros.spring.api.models.Livro;
import educalivros.spring.api.repositories.LivroRepository;



@Service
public class LivroService {

   private Logger logger = Logger.getLogger(LivroRepository.class.getName());


    @Autowired
    LivroRepository repository;

    // @Autowired
    // LivroMapper cltmapper;

    public List<LivroVO> findAllLivros(){

        logger.info("Finding all people");
        // List<Livro> listaVO2 = repository.findAll();
        // return cltmapper.LivroToLivroVO2List(listaVO2);
        return DozerMapper.parseListObjects(repository.findAll(), LivroVO.class);
    }

    public LivroVO findByIdLivro(Long id){

        // var entity = repository.findById(id)
        //         .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        // var VO2 = cltmapper.LivroToLivroVO2mapper(entity);   
        var VO = DozerMapper.parseObjects(repository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), LivroVO.class);
        return VO;      
    }   

    public LivroVO createLivro(LivroVO livro) {

        logger.info("Creating one Livro");
        //var entity = cltmapper.LivroVO2ToLivroMapper(Livro);
        var entity = DozerMapper.parseObjects(livro, Livro.class);
        var VO = DozerMapper.parseObjects(repository.save(entity), LivroVO.class);
        return VO;
    }

    public LivroVO updateLivro(LivroVO livro) {

        logger.info("Updating one Livro");
        var entity = repository.findById(livro.getId_livro())
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));

        entity.setAvaliacao(livro.getAvaliacao());
        entity.setData_publicacao(livro.getData_publicacao());
        entity.setDescricao_livro(livro.getDescricao_livro());
        entity.setEstoque_produto(livro.getEstoque_produto());
        entity.setNome_livro(livro.getNome_livro());

        var VO = DozerMapper.parseObjects(repository.save(entity), LivroVO.class);
        return VO;
    }

    public void deleteLivro(Long id) {

        logger.info("Deleting one Livro");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        repository.delete(entity);

    }
}
