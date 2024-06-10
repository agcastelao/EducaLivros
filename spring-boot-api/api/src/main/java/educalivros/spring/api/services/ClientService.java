package educalivros.spring.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import educalivros.spring.api.ValueObjects.V1.ClientVO;
//import educalivros.spring.api.ValueObjects.V2.ClientVO2;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.Custom.ClientMapper;
import educalivros.spring.api.mappers.dozer.DozerMapper;
import educalivros.spring.api.models.Client;
import educalivros.spring.api.models.Endereco;
import educalivros.spring.api.repositories.ClientRepository;
import educalivros.spring.api.repositories.EnderecoRepository;

@Service
public class ClientService {

    private Logger logger = Logger.getLogger(ClientRepository.class.getName());

    @Autowired
    ClientRepository repository;

    @Autowired
    ClientMapper cltmapper;

    @Autowired
    EnderecoRepository enderecoRepository;

    public List<ClientVO> findAllClients(){

        logger.info("Finding all people");
        // List<Client> listaVO = repository.findAll();
        // return cltmapper.clientToClientVO2List(listaVO);
        return DozerMapper.parseListObjects(repository.findAll(), ClientVO.class);
    }

    public ClientVO findByIdClient(Long id){

        // var entity = repository.findById(id)
        //         .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        // var VO2 = cltmapper.clientToClientVO2mapper(entity);   
        var VO = DozerMapper.parseObjects(repository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), ClientVO.class);
        return VO;      
    }   

    public ClientVO createClient(ClientVO client) {

        logger.info("Creating one client");
        //var entity = cltmapper.clientVO2ToClientMapper(client);
        var entity = DozerMapper.parseObjects(client, Client.class);
        var VO = DozerMapper.parseObjects(repository.save(entity), ClientVO.class);
        return VO;
    }

    public ClientVO updateCLient(ClientVO client) {
        
        logger.info("Updating one client");
        var entity = repository.findById(client.getId_cliente())
                    .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        
        List<Endereco> listaEnderecos = new ArrayList<>();
        
        
        if (!client.getEnderecos().isEmpty()) {
            for (Endereco endereco : client.getEnderecos()) {
                if (endereco.getId_endereco() == null) {          
                    enderecoRepository.save(endereco);
                }else{
                    enderecoRepository.findById(endereco.getId_endereco()) 
                                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o id do endereço"));
                }
                listaEnderecos.add(endereco);
            }
        }
        // var entity2 = DozerMapper.parseObjects(client, Client.class);
        entity.setEnderecos(listaEnderecos);
        entity.setNome(client.getNome());
        entity.setSobrenome(client.getSobrenome());
        entity.setTelefone(client.getTelefone());
        entity.setEmail(client.getEmail());
        entity.setCpf(client.getCpf());

        var VO = DozerMapper.parseObjects(repository.save(entity), ClientVO.class);
        return VO;
    }

    public void deleteClient(Long id) {

        logger.info("Deleting one client");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));

        entity.getEnderecos().forEach(endereco ->{
            endereco.getClientes().remove(entity);
            enderecoRepository.save(endereco);
        });
                
        repository.delete(entity);

    }
    
}
