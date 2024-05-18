package educalivros.spring.api.ValueObjects.V1;

import java.io.Serializable;

public class CarrinhoVO implements Serializable{

    private Long id_carrinho;
    private int quantidade_produto;

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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id_carrinho == null) ? 0 : id_carrinho.hashCode());
        result = prime * result + quantidade_produto;
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
        return true;
    }
    

    

}
