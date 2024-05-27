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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
    @PostMapping(value = "/autor", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public AutorVO createAutor(@RequestBody AutorVO autor) {
        
        return autorService.createAutor(autor);
    }

    @GetMapping(value = "/livro", consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<LivroVO> getAllLivros() {
        
        return livroService.findAllLivros();
    }
    @PostMapping(value = "/livro", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public LivroVO createAutor(@RequestBody LivroVO autor) {
        
        return livroService.createLivro(autor);
    }

}
