package educalivros.spring.api.ValueObjects.V1;

import java.time.LocalDate;

public class PedidoVO {

    private Long id_pedido;
    private float valor_total;
    private LocalDate data_pedido;
    public Long getId_pedido() {
        return id_pedido;
    }
    public void setId_pedido(Long id_pedido) {
        this.id_pedido = id_pedido;
    }
    public float getValor_total() {
        return valor_total;
    }
    public void setValor_total(float valor_total) {
        this.valor_total = valor_total;
    }
    public LocalDate getData_pedido() {
        return data_pedido;
    }
    public void setData_pedido(LocalDate data_pedido) {
        this.data_pedido = data_pedido;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id_pedido == null) ? 0 : id_pedido.hashCode());
        result = prime * result + Float.floatToIntBits(valor_total);
        result = prime * result + ((data_pedido == null) ? 0 : data_pedido.hashCode());
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
        PedidoVO other = (PedidoVO) obj;
        if (id_pedido == null) {
            if (other.id_pedido != null)
                return false;
        } else if (!id_pedido.equals(other.id_pedido))
            return false;
        if (Float.floatToIntBits(valor_total) != Float.floatToIntBits(other.valor_total))
            return false;
        if (data_pedido == null) {
            if (other.data_pedido != null)
                return false;
        } else if (!data_pedido.equals(other.data_pedido))
            return false;
        return true;
    }

    
}
