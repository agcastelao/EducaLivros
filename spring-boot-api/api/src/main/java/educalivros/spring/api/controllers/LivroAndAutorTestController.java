package educalivros.spring.api.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import educalivros.spring.api.ValueObjects.V1.AutorVO;
import educalivros.spring.api.ValueObjects.V1.LivroVO;
import educalivros.spring.api.services.AutorService;
import educalivros.spring.api.services.LivroService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/test")
public class LivroAndAutorTestController {

    @Autowired
    AutorService autorService;

    @Autowired
    LivroService livroService;


    @GetMapping(value = "/autor", consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<AutorVO> getAllAutor() {
        
        return autorService.findAllAutors();
    }
    @GetMapping(value = "/autor/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public AutorVO getAutorById(@PathVariable(value = "id")Long id) {
        
        return autorService.findByIdAutor(id);
    }

    @PostMapping(value = "/autor", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public AutorVO createAutor(@RequestBody AutorVO autor) {
        
        return autorService.createAutor(autor);
    }
    @PutMapping(value = "/autor", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public AutorVO updateAutor(@RequestBody AutorVO autor) {
        
        return autorService.updateAutor(autor);
    }
    @DeleteMapping(value = "/autor/{id}")
    public void deleteAutor(@PathVariable(value = "id") Long id){
        autorService.deleteAutor(id);
    }



    @GetMapping(value = "/livro", consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<LivroVO> getAllLivros() {
        
        return livroService.findAllLivros();
    }
    @GetMapping(value = "/livro/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public LivroVO getAllLivros(@PathVariable(value = "id")Long id) {
        
        return livroService.findByIdLivro(id);
    }
    @PostMapping(value = "/livro", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public LivroVO createLivro(@RequestBody LivroVO livro) {
        
        return livroService.createLivro(livro);
    }
    @PutMapping(value = "/livro", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public LivroVO updateLivro(@RequestBody LivroVO livro) {
        
        return livroService.updateLivro(livro);
    }
    @DeleteMapping(value = "/livro/{id}")
    public void deleteLivro(@PathVariable(value = "id") Long id) {
        
       livroService.deleteLivro(id);
    }

}
