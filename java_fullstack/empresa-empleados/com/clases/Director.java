package com.clases;

public class Director extends Gerente {
    private int acciones;

    public Director(String nombre, int sueldoBase, int bono, int acciones){
        super(nombre, sueldoBase, bono);
        this.acciones = acciones;
    }

    public int getAcciones() {
        return acciones;
    }

    public void setAcciones(int acciones) {
        this.acciones = acciones;
    }

    @Override
    public int salarioTotal(){
        return super.salarioTotal() + this.acciones;
    }

    public void despliegaInformacionDirector(){
        despliegaInformacionGerente();
        System.out.println("Acciones: " + this.acciones);
    }
}
