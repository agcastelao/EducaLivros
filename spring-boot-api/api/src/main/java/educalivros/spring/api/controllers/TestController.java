package educalivros.spring.api.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import educalivros.spring.api.ValueObjects.V1.ClientVO;
import educalivros.spring.api.services.ClientService;


@RestController
@RequestMapping("/cliente")
public class TestController {

    @Autowired
    private ClientService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ClientVO> findAll() {

        return service.findAll();
    }

    @GetMapping(value = "/{client}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ClientVO findById(@PathVariable(value = "client") Long id) {

        return service.findById(id);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ClientVO create(@RequestBody ClientVO client) {
        
        return service.create(client);
    }
    
}
