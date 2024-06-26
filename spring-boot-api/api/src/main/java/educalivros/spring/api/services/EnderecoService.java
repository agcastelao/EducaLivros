package educalivros.spring.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import educalivros.spring.api.repositories.ClientRepository;
import educalivros.spring.api.repositories.EnderecoRepository;
import educalivros.spring.api.ValueObjects.V1.EnderecoVO;
import educalivros.spring.api.exceptions.ResourceNotFoundException;
import educalivros.spring.api.mappers.dozer.DozerMapper;
import educalivros.spring.api.models.Client;
import educalivros.spring.api.models.Endereco;

@Service
public class EnderecoService{

    private Logger logger = Logger.getLogger(EnderecoRepository.class.getName());


    @Autowired
    EnderecoRepository repository;

    @Autowired
    ClientRepository clientRepository;

    // @Autowired
    // EnderecoMapper cltmapper;

    public List<EnderecoVO> findAllEnderecos(){

        logger.info("Finding all people");
        // List<Endereco> listaVO2 = repository.findAll();
        // return cltmapper.EnderecoToEnderecoVO2List(listaVO2);
        return DozerMapper.parseListObjects(repository.findAll(), EnderecoVO.class);
    }

    public EnderecoVO findByIdEndereco(Long id){

        // var entity = repository.findById(id)
        //         .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        // var VO2 = cltmapper.EnderecoToEnderecoVO2mapper(entity);   
        var VO = DozerMapper.parseObjects(repository.findById(id) 
             .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID")), EnderecoVO.class);
        return VO;      
    }   

    public EnderecoVO createEndereco(EnderecoVO endereco) {

        logger.info("Creating one Endereco");
        
        List<Client> clientes = new ArrayList<>();

        if (!endereco.getClientes().isEmpty()) {

            for (Client client : endereco.getClientes()) {
                if (client.getCpf() != null) {
                    
                    var foundedCliente = clientRepository.findByCpf(client.getCpf())
                                .orElseThrow(() -> new ResourceNotFoundException("O CPF informado não está salvo"));
                    clientes.add(foundedCliente);

                }else throw new ResourceNotFoundException("O CPF do cliente não pode ser nulo.");
            }
        }
        else throw new ResourceNotFoundException("Erro ao achar os clientes.");

        var entity = DozerMapper.parseObjects(endereco, Endereco.class);

        entity.setClientes(clientes);
        // entity.setCodigo_postal(endereco.getCodigo_postal());
        // entity.setEstado(endereco.getEstado());
        // entity.setRua_nome(endereco.getRua_nome());
        // entity.setRua_complemento(endereco.getRua_complemento());
        var VO = DozerMapper.parseObjects(repository.save(entity), EnderecoVO.class);
        return VO;
    }

    public EnderecoVO updateEndereco(EnderecoVO endereco) {

        logger.info("Updating one Endereco");
        List<Client> clientes = new ArrayList<>();

        if (!endereco.getClientes().isEmpty()) {

            for (Client client : endereco.getClientes()) {
                if (client.getCpf() != null) {
                    
                    var foundedCliente = clientRepository.findByCpf(client.getCpf())
                                .orElseThrow(() -> new ResourceNotFoundException("O CPF informado não está salvo"));
                    clientes.add(foundedCliente);

                }else throw new ResourceNotFoundException("O CPF do cliente não pode ser nulo.");
            }
        }
        else throw new ResourceNotFoundException("Erro ao achar os clientes.");

        var entity = DozerMapper.parseObjects(endereco, Endereco.class);

        entity.setClientes(clientes);
        entity.setCodigo_postal(endereco.getCodigo_postal());
        entity.setEstado(endereco.getEstado());
        entity.setRua_nome(endereco.getRua_nome());
        entity.setRua_complemento(endereco.getRua_complemento());
        var VO = DozerMapper.parseObjects(repository.save(entity), EnderecoVO.class);
        return VO;
    }

    public void deleteEndereco(Long id) {

        logger.info("Deleting one Endereco");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Erro ao achar o ID"));
        
        entity.getClientes().forEach(cliente -> {
            cliente.getEnderecos().remove(entity);
            clientRepository.save(cliente);
        });
        
        repository.delete(entity);

    }

}
