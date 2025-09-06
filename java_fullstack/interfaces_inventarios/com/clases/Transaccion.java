package com.clases;
import com.interfaces.Auditable;

public class Transaccion implements Auditable {
    private String idTransaccion;
    private String tipo;
    private double monto;

    public Transaccion(String idTransaccion, String tipo, double monto){
        this.idTransaccion = idTransaccion;
        this.tipo = tipo;
        this.monto = monto;
    }

    public String getIdTransaccion(){
        return this.idTransaccion;
    }

    public void setIdTransaccion(String idTransaccion){
        this.idTransaccion = idTransaccion;
    }

    public String getTipo(){
        return this.tipo;
    }

    public void setTipo(String tipo){
        this.tipo = tipo;
    }

    public double getMonto(){
        return this.monto;
    }

    public void setMonto(double monto){
        this.monto = monto;
    }

    public void registraAccion(String accion){

    }
}
