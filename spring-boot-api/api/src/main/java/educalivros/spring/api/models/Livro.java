package educalivros.spring.api.models;

import java.io.Serializable;
import java.util.Date;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "livro")
public class Livro implements Serializable{

    //private static final Long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_livro;

    @Column(nullable = false)
    private String descricao_livro;

    @Column(nullable = false)
    private String estoque_produto;

    @Column(nullable = false)
    private String nome_livro;

    @Column(nullable = false)
    private String avaliacao;

    @Column(nullable = false)
    private Date data_publicacao;

    @ManyToMany(mappedBy = "livros")
    private List<Carrinho> carrinhos;

    @ManyToMany
    @JoinTable(name = "livro_autor",
                joinColumns = @JoinColumn(name = "id_livro_fk"),
                inverseJoinColumns = @JoinColumn(name = "id_autor_fk"))
    private List<Autor> autors;

    public Long getId_livro() {
        return id_livro;
    }
    public void setId_livro(Long id_livro) {
        this.id_livro = id_livro;
    }
    public String getDescricao_livro() {
        return descricao_livro;
    }
    public void setDescricao_livro(String descricao_livro) {
        this.descricao_livro = descricao_livro;
    }
    public String getEstoque_produto() {
        return estoque_produto;
    }
    public void setEstoque_produto(String estoque_produto) {
        this.estoque_produto = estoque_produto;
    }
    public String getNome_livro() {
        return nome_livro;
    }
    public void setNome_livro(String nome_livro) {
        this.nome_livro = nome_livro;
    }
    public String getAvaliacao() {
        return avaliacao;
    }
    public void setAvaliacao(String avaliacao) {
        this.avaliacao = avaliacao;
    }
    public Date getData_publicacao() {
        return data_publicacao;
    }
    public void setData_publicacao(Date data_publicacao) {
        this.data_publicacao = data_publicacao;
    }
    public List<Carrinho> getCarrinhos() {
        return carrinhos;
    }
    public void setCarrinhos(List<Carrinho> carrinhos) {
        this.carrinhos = carrinhos;
    }
    public List<Autor> getAutors() {
        return autors;
    }
    public void setAutors(List<Autor> autors) {
        this.autors = autors;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id_livro == null) ? 0 : id_livro.hashCode());
        result = prime * result + ((descricao_livro == null) ? 0 : descricao_livro.hashCode());
        result = prime * result + ((estoque_produto == null) ? 0 : estoque_produto.hashCode());
        result = prime * result + ((nome_livro == null) ? 0 : nome_livro.hashCode());
        result = prime * result + ((avaliacao == null) ? 0 : avaliacao.hashCode());
        result = prime * result + ((data_publicacao == null) ? 0 : data_publicacao.hashCode());
        result = prime * result + ((carrinhos == null) ? 0 : carrinhos.hashCode());
        result = prime * result + ((autors == null) ? 0 : autors.hashCode());
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
        Livro other = (Livro) obj;
        if (id_livro == null) {
            if (other.id_livro != null)
                return false;
        } else if (!id_livro.equals(other.id_livro))
            return false;
        if (descricao_livro == null) {
            if (other.descricao_livro != null)
                return false;
        } else if (!descricao_livro.equals(other.descricao_livro))
            return false;
        if (estoque_produto == null) {
            if (other.estoque_produto != null)
                return false;
        } else if (!estoque_produto.equals(other.estoque_produto))
            return false;
        if (nome_livro == null) {
            if (other.nome_livro != null)
                return false;
        } else if (!nome_livro.equals(other.nome_livro))
            return false;
        if (avaliacao == null) {
            if (other.avaliacao != null)
                return false;
        } else if (!avaliacao.equals(other.avaliacao))
            return false;
        if (data_publicacao == null) {
            if (other.data_publicacao != null)
                return false;
        } else if (!data_publicacao.equals(other.data_publicacao))
            return false;
        if (carrinhos == null) {
            if (other.carrinhos != null)
                return false;
        } else if (!carrinhos.equals(other.carrinhos))
            return false;
        if (autors == null) {
            if (other.autors != null)
                return false;
        } else if (!autors.equals(other.autors))
            return false;
        return true;
    }
    
}
