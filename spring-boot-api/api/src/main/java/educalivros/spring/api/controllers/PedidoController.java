package educalivros.spring.api.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import educalivros.spring.api.ValueObjects.V1.PedidoVO;
import educalivros.spring.api.services.PedidoService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/pedido")
public class PedidoController {

    @Autowired
    PedidoService pedidoService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public PedidoVO createPedido(@RequestBody PedidoVO pedido) {
        
        return pedidoService.createPedido(pedido);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<PedidoVO> getPedido() {
        
        return pedidoService.findAllPedidos();
    }

}
