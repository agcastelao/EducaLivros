package educalivros.spring.api.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/test")
public class TestController {


    

    @GetMapping(value = "/{client}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getClients(@PathVariable(value = "client") Long id) {

        return new String();
    }
    

}
