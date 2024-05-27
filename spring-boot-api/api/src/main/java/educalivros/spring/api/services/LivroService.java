package educalivros.spring.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import educalivros.spring.api.ValueObjects.V1.LivroVO;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.dozer.DozerMapper;
import educalivros.spring.api.models.Autor;
import educalivros.spring.api.models.Livro;
import educalivros.spring.api.repositories.AutorRepository;
import educalivros.spring.api.repositories.LivroRepository;



@Service
public class LivroService {

   private Logger logger = Logger.getLogger(LivroRepository.class.getName());


    @Autowired
    LivroRepository livroRepository;

    @Autowired
    AutorRepository autorRepository;

    // @Autowired
    // LivroMapper cltmapper;

    public List<LivroVO> findAllLivros(){

        logger.info("Finding all people");
        // List<Livro> listaVO2 = repository.findAll();
        // return cltmapper.LivroToLivroVO2List(listaVO2);
        return DozerMapper.parseListObjects(livroRepository.findAll(), LivroVO.class);
    }

    public LivroVO findByIdLivro(Long id){

        var VO = DozerMapper.parseObjects(livroRepository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), LivroVO.class);
        return VO;      
    }   

    public LivroVO createLivro(LivroVO livro) {
        
        logger.info("Creating one Livro");
        if (livro.getAutors() != null && !livro.getAutors().isEmpty()) {

            List<Autor> autors = new ArrayList<>();
            for (Autor autor : livro.getAutors()) {
                
                if (autor.getId_autor() == null) {
                    autorRepository.save(autor);
                }
                autors.add(autor);
            }

            var entity = DozerMapper.parseObjects(livro, Livro.class);
            entity.setAutors(autors);
            var VO = DozerMapper.parseObjects(livroRepository.save(entity), LivroVO.class);
            return VO;
        }else{
            throw new ResourceNotFoundException("Erro ao achar os autores");
        }
    }

    public LivroVO updateLivro(LivroVO livro) {

        logger.info("Updating one Livro");
        var entity = livroRepository.findById(livro.getId_livro())
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));

        entity.setAvaliacao(livro.getAvaliacao());
        entity.setData_publicacao(livro.getData_publicacao());
        entity.setDescricao_livro(livro.getDescricao_livro());
        entity.setEstoque_produto(livro.getEstoque_produto());
        entity.setNome_livro(livro.getNome_livro());

        var VO = DozerMapper.parseObjects(livroRepository.save(entity), LivroVO.class);
        return VO;
    }

    public void deleteLivro(Long id) {

        logger.info("Deleting one Livro");
        var entity = livroRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        livroRepository.delete(entity);

    }
}
