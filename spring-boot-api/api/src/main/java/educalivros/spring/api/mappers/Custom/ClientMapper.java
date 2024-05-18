package educalivros.spring.api.mappers.custom;

//import org.hibernate.mapping.List;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import educalivros.spring.api.ValueObjects.V2.ClientVO2;
import educalivros.spring.api.models.Client;

@Service
public class ClientMapper {

    public ClientVO2 clientToClientVO2mapper(Client client){
        
        ClientVO2 cvo2 = new ClientVO2();
        cvo2.setId_cliente(client.getId_cliente());
        cvo2.setEmail(client.getEmail());
        cvo2.setId_cliente(client.getId_cliente());
        cvo2.setNome(client.getNome());
        cvo2.setSobrenome(client.getSobrenome());
        cvo2.setTelefone(client.getTelefone());
        return cvo2;
    }
    
    public List<ClientVO2> clientToClientVO2List(List<Client> clients){
        
        List<ClientVO2> listaFinal = new ArrayList<>();
        for (Client client : clients) {
            listaFinal.add(clientToClientVO2mapper(client));
        }
        return listaFinal;
    }

    public Client clientVO2ToClientMapper(ClientVO2 client){
        
        Client clt = new Client();
        clt.setId_cliente(client.getId_cliente());
        clt.setEmail(client.getEmail());
        clt.setId_cliente(client.getId_cliente());
        clt.setNome(client.getNome());
        clt.setSobrenome(client.getSobrenome());
        clt.setTelefone(client.getTelefone());
        clt.setCpf("0000000000");
        return clt;
    }

}
