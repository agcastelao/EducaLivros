package educalivros.spring.api.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "endereco")
public class Endereco implements Serializable{
    
    //public static final Long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_endereco;

    @Column(nullable = false)
    private String codigo_postal;

    @Column(nullable = false)
    private String estado;

    @Column(nullable = false)
    private String rua_nome;

    @Column(nullable = false)
    private String rua_complemento;

    public String getCodigo_postal() {
        return codigo_postal;
    }
    public void setCodigo_postal(String codigo_postal) {
        this.codigo_postal = codigo_postal;
    }
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public String getRua_nome() {
        return rua_nome;
    }
    public void setRua_nome(String rua_nome) {
        this.rua_nome = rua_nome;
    }
    public String getRua_complemento() {
        return rua_complemento;
    }
    public void setRua_complemento(String rua_complemento) {
        this.rua_complemento = rua_complemento;
    }
    public Long getId_endereco() {
        return id_endereco;
    }
    public void setId_endereco(Long id_endereco) {
        this.id_endereco = id_endereco;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id_endereco == null) ? 0 : id_endereco.hashCode());
        result = prime * result + ((codigo_postal == null) ? 0 : codigo_postal.hashCode());
        result = prime * result + ((estado == null) ? 0 : estado.hashCode());
        result = prime * result + ((rua_nome == null) ? 0 : rua_nome.hashCode());
        result = prime * result + ((rua_complemento == null) ? 0 : rua_complemento.hashCode());
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
        Endereco other = (Endereco) obj;
        if (id_endereco == null) {
            if (other.id_endereco != null)
                return false;
        } else if (!id_endereco.equals(other.id_endereco))
            return false;
        if (codigo_postal == null) {
            if (other.codigo_postal != null)
                return false;
        } else if (!codigo_postal.equals(other.codigo_postal))
            return false;
        if (estado == null) {
            if (other.estado != null)
                return false;
        } else if (!estado.equals(other.estado))
            return false;
        if (rua_nome == null) {
            if (other.rua_nome != null)
                return false;
        } else if (!rua_nome.equals(other.rua_nome))
            return false;
        if (rua_complemento == null) {
            if (other.rua_complemento != null)
                return false;
        } else if (!rua_complemento.equals(other.rua_complemento))
            return false;
        return true;
    }

    

}
