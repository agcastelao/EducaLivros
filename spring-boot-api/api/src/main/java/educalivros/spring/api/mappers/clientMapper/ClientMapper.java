package educalivros.spring.api.mappers.clientMapper;

import educalivros.spring.api.ValueObjects.V2.ClientVO2;
import educalivros.spring.api.models.Client;

public class ClientMapper {

    public ClientVO2 clientToClientVO2mapper(Client client){
        
        ClientVO2 cvo2 = new ClientVO2();
        cvo2.setEmail(client.getEmail());
        cvo2.setId_cliente(client.getId_cliente());
        cvo2.setNome(client.getNome());
        cvo2.setSobrenome(client.getSobrenome());
        cvo2.setTelefone(client.getTelefone());
        return cvo2;
    }
}
