package educalivros.spring.api.models;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "papelaria")
public class Papelaria implements Serializable{

    //private static final Long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_papelaria;

    @Column(nullable = false)
    private String tipo;

    @Column(nullable = false)
    private String marca;

    @Column(nullable = false)
    private String nome_produto;

    @Column(nullable = false)
    private int estoque_papelaria;

    @ManyToMany(mappedBy = "papelarias")
    private List<Carrinho> carrinhos;

    public Long getId_papelaria() {
        return id_papelaria;
    }
    public void setId_papelaria(Long id_papelaria) {
        this.id_papelaria = id_papelaria;
    }
    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getNome_produto() {
        return nome_produto;
    }
    public void setNome_produto(String nome_produto) {
        this.nome_produto = nome_produto;
    }
    public int getEstoque_papelaria() {
        return estoque_papelaria;
    }
    public void setEstoque_papelaria(int estoque_papelaria) {
        this.estoque_papelaria = estoque_papelaria;
    }
    public List<Carrinho> getCarrinho() {
        return carrinhos;
    }
    public void setCarrinho(List<Carrinho> carrinhos) {
        this.carrinhos = carrinhos;
    }

}
