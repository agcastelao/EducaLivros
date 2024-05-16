package educalivros.spring.api.services;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import educalivros.spring.api.ValueObjects.V1.ClientVO;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.DozerMapper;
import educalivros.spring.api.models.Client;
import educalivros.spring.api.repositories.ClientRepository;

@Service
public class ClientService {

    private Logger logger = Logger.getLogger(ClientRepository.class.getName());

    @Autowired
    ClientRepository repository;

    public List<ClientVO> findAll(){

        logger.info("Finding all people");
        return DozerMapper.parseListObjects(repository.findAll(), ClientVO.class);
    }

    public ClientVO findById(Long id){

        var VO = DozerMapper.parseObjects(repository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), ClientVO.class);
        return VO;      
    }   

    public ClientVO create(ClientVO client) {

        logger.info("Creating one client");
        var entity = DozerMapper.parseObjects(client, Client.class);
        var VO = DozerMapper.parseObjects(repository.save(entity), ClientVO.class);
        return VO;
    }

    public ClientVO update(ClientVO client) {

        logger.info("Updating one client");
        var entity = repository.findById(client.getId_cliente())
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));

        entity.setNome(client.getNome());
        entity.setSobrenome(client.getSobrenome());
        entity.setTelefone(client.getTelefone());
        entity.setEmail(client.getEmail());
        entity.setCpf(client.getCpf());

        var VO = DozerMapper.parseObjects(repository.save(entity), ClientVO.class);
        return VO;
    }

    public void delete(Long id) {

        logger.info("Deleting one client");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        repository.delete(entity);

    }
    
}
