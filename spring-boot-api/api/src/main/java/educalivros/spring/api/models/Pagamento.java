package educalivros.spring.api.models;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pagamento")
public class Pagamento implements Serializable{

    //public static final Long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_pagamento;

    @Column(nullable = false)
    private String forma_pagamento;

    @Column(nullable = false)
    private LocalDate data_pagamento;

    @Column(nullable = false)
    private boolean pagamento_valido;
    

    public String getForma_pagamento() {
        return forma_pagamento;
    }
    public void setForma_pagamento(String forma_pagamento) {
        this.forma_pagamento = forma_pagamento;
    }

    public boolean isPagamento_valido() {
        return pagamento_valido;
    }
    public void setPagamento_valido(boolean pagamento_valido) {
        this.pagamento_valido = pagamento_valido;
    }

    public LocalDate getData_pagamento() {
        return data_pagamento;
    }
    public void setData_pagamento(LocalDate data_pagamento) {
        this.data_pagamento = data_pagamento;
    }
    public Long getId_pagamento() {
        return id_pagamento;
    }
    public void setId_pagamento(Long id_pagamento) {
        this.id_pagamento = id_pagamento;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id_pagamento == null) ? 0 : id_pagamento.hashCode());
        result = prime * result + ((forma_pagamento == null) ? 0 : forma_pagamento.hashCode());
        result = prime * result + ((data_pagamento == null) ? 0 : data_pagamento.hashCode());
        result = prime * result + (pagamento_valido ? 1231 : 1237);
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
        Pagamento other = (Pagamento) obj;
        if (id_pagamento == null) {
            if (other.id_pagamento != null)
                return false;
        } else if (!id_pagamento.equals(other.id_pagamento))
            return false;
        if (forma_pagamento == null) {
            if (other.forma_pagamento != null)
                return false;
        } else if (!forma_pagamento.equals(other.forma_pagamento))
            return false;
        if (data_pagamento == null) {
            if (other.data_pagamento != null)
                return false;
        } else if (!data_pagamento.equals(other.data_pagamento))
            return false;
        if (pagamento_valido != other.pagamento_valido)
            return false;
        return true;
    }
    

    
}
