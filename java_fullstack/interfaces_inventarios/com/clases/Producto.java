package com.clases;

import com.interfaces.Validable;

public class Producto implements Validable {
    private String idProducto;
    private String nombre;
    private double precio;

    public Producto(String id, String nombre, double precio){
        this.idProducto = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    public String getIdProducto(){
        return idProducto;
    }

    public void setIdProducto (String id){
        this.idProducto = id;
    }

    public String getNombre(){
        return this.nombre;
    }

    public void setNombre (String nombre){
        this.nombre = nombre;
    }

    public double getPrecio(){
        return precio;
    }

    public void setNombre (double precio){
        this.precio = precio;
    }

    public void validarInformacion(){
        System.out.println("Información Validada");
    }
}
