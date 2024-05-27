package educalivros.spring.api.ValueObjects.V1;

import java.io.Serializable;
import java.util.List;

import educalivros.spring.api.models.Livro;

public class AutorVO implements Serializable{
    
    private Long id_autor;
    private String nome_autor;
    private String sobrenome_autor;
    private List<Livro> livros;

    public Long getId_autor() {
        return id_autor;
    }
    public void setId_autor(Long id_autor) {
        this.id_autor = id_autor;
    }
    public String getNome_autor() {
        return nome_autor;
    }
    public void setNome_autor(String nome_autor) {
        this.nome_autor = nome_autor;
    }
    public String getSobrenome_autor() {
        return sobrenome_autor;
    }
    public void setSobrenome_autor(String sobrenome_autor) {
        this.sobrenome_autor = sobrenome_autor;
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
        result = prime * result + ((id_autor == null) ? 0 : id_autor.hashCode());
        result = prime * result + ((nome_autor == null) ? 0 : nome_autor.hashCode());
        result = prime * result + ((sobrenome_autor == null) ? 0 : sobrenome_autor.hashCode());
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
        AutorVO other = (AutorVO) obj;
        if (id_autor == null) {
            if (other.id_autor != null)
                return false;
        } else if (!id_autor.equals(other.id_autor))
            return false;
        if (nome_autor == null) {
            if (other.nome_autor != null)
                return false;
        } else if (!nome_autor.equals(other.nome_autor))
            return false;
        if (sobrenome_autor == null) {
            if (other.sobrenome_autor != null)
                return false;
        } else if (!sobrenome_autor.equals(other.sobrenome_autor))
            return false;
        if (livros == null) {
            if (other.livros != null)
                return false;
        } else if (!livros.equals(other.livros))
            return false;
        return true;
    }
    

}
