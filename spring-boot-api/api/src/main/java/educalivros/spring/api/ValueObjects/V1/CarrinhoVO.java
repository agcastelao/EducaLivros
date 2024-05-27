package educalivros.spring.api.ValueObjects.V1;

import java.io.Serializable;
import java.util.List;

import educalivros.spring.api.models.Livro;
import educalivros.spring.api.models.Papelaria;
import educalivros.spring.api.models.Pedido;

public class CarrinhoVO implements Serializable{

    private Long id_carrinho;
    private int quantidade_produto;
    private List<Pedido> pedidos;
    private List<Papelaria> papelarias;
    private List<Livro> livros;


    public Long getId_carrinho() {
        return id_carrinho;
    }
    public void setId_carrinho(Long id_carrinho) {
        this.id_carrinho = id_carrinho;
    }
    public int getQuantidade_produto() {
        return quantidade_produto;
    }
    public void setQuantidade_produto(int quantidade_produto) {
        this.quantidade_produto = quantidade_produto;
    }
    public List<Pedido> getPedidos() {
        return pedidos;
    }
    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }
    public List<Papelaria> getPapelarias() {
        return papelarias;
    }
    public void setPapelarias(List<Papelaria> papelarias) {
        this.papelarias = papelarias;
    }
    public List<Livro> getLivros() {
        return livros;
    }
    public void setLivros(List<Livro> livros) {
        this.livros = livros;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id_carrinho == null) ? 0 : id_carrinho.hashCode());
        result = prime * result + quantidade_produto;
        result = prime * result + ((pedidos == null) ? 0 : pedidos.hashCode());
        result = prime * result + ((papelarias == null) ? 0 : papelarias.hashCode());
        result = prime * result + ((livros == null) ? 0 : livros.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        CarrinhoVO other = (CarrinhoVO) obj;
        if (id_carrinho == null) {
            if (other.id_carrinho != null)
                return false;
        } else if (!id_carrinho.equals(other.id_carrinho))
            return false;
        if (quantidade_produto != other.quantidade_produto)
            return false;
        if (pedidos == null) {
            if (other.pedidos != null)
                return false;
        } else if (!pedidos.equals(other.pedidos))
            return false;
        if (papelarias == null) {
            if (other.papelarias != null)
                return false;
        } else if (!papelarias.equals(other.papelarias))
            return false;
        if (livros == null) {
            if (other.livros != null)
                return false;
        } else if (!livros.equals(other.livros))
            return false;
        return true;
    }

    

}
