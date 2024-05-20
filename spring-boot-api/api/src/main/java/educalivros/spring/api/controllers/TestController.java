package educalivros.spring.api.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import educalivros.spring.api.ValueObjects.V1.ClientVO;
import educalivros.spring.api.ValueObjects.V2.ClientVO2;
import educalivros.spring.api.services.ClientService;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/cliente")
public class TestController {

    @Autowired
    private ClientService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ClientVO2> findAll() {

        return service.findAllClients();
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ClientVO2 findById(@PathVariable(value = "id") Long id) {

        return service.findByIdClient(id);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ClientVO createClient(@RequestBody ClientVO client) {
        
        return service.createClient(client);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ClientVO updateClient(@RequestBody ClientVO client) {

        return service.updateCLient(client);
    }
    
    @DeleteMapping(value = "/{id}")
    public void deleteClient(@PathVariable(value = "id") Long id){
        
        service.deleteClient(id);
    }   

    
}
