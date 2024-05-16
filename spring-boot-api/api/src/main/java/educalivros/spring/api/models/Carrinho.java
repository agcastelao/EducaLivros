package educalivros.spring.api.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "carrinho")
public class Carrinho implements Serializable{

    //private static final Long serialVersionUID = 1L;
    @Id
    @GeneratedValue
    private Long id_carrinho;

    @Column(nullable = false)
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
        Carrinho other = (Carrinho) obj;
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
