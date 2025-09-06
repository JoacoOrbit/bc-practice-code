package com.clases;
import com.interfaces.*;
import java.util.ArrayList;
import java.util.List;

public class Inventario implements Auditable, Validable{ 
    private List<Producto> productos;

    public Inventario (){
        this.productos = new ArrayList<Producto>();
    }
    
    public Inventario (List<Producto> productos){
        this.productos = new ArrayList<>(productos);
    }

    public List<Producto> getProductos(){
        return this.productos;
    }

    public void setProductos(List<Producto> productos){
        this.productos = productos;
    }

    public void agregarProducto(Producto producto){
        this.productos.add(producto);
    }

    public void eliminarProducto(Producto producto){
        this.productos.remove(producto);
    }

    public Producto buscarProducto(String id){
        for (Producto p : productos){
            if (id.equals(p.getIdProducto())){
                return p;
            }
        }
        return null;
    }

    public void registraAccion(String accion){
        System.out.println("Accion registrada: " + accion);
    }

    public void validarInformacion(){
        System.out.println("Información Validada");
    }
}
