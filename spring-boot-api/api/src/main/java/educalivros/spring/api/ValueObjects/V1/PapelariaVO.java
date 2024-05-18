package educalivros.spring.api.ValueObjects.V1;

import java.io.Serializable;

public class PapelariaVO implements Serializable{

    private Long id_papelaria;
    private String tipo;
    private String marca;
    private String nome_produto;
    private int estoque_papelaria;

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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id_papelaria == null) ? 0 : id_papelaria.hashCode());
        result = prime * result + ((tipo == null) ? 0 : tipo.hashCode());
        result = prime * result + ((marca == null) ? 0 : marca.hashCode());
        result = prime * result + ((nome_produto == null) ? 0 : nome_produto.hashCode());
        result = prime * result + estoque_papelaria;
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
        PapelariaVO other = (PapelariaVO) obj;
        if (id_papelaria == null) {
            if (other.id_papelaria != null)
                return false;
        } else if (!id_papelaria.equals(other.id_papelaria))
            return false;
        if (tipo == null) {
            if (other.tipo != null)
                return false;
        } else if (!tipo.equals(other.tipo))
            return false;
        if (marca == null) {
            if (other.marca != null)
                return false;
        } else if (!marca.equals(other.marca))
            return false;
        if (nome_produto == null) {
            if (other.nome_produto != null)
                return false;
        } else if (!nome_produto.equals(other.nome_produto))
            return false;
        if (estoque_papelaria != other.estoque_papelaria)
            return false;
        return true;
    }

    

}
