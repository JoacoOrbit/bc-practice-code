package com.clases;

public class Gerente extends Empleado {
    private int bono;

    public Gerente(String nombre, int salarioBase, int bono){
        super(nombre, salarioBase);
        this.bono = bono;
    }

    @Override
    public int salarioTotal(){
        return this.getSalarioBase() + this.bono;
    }

    public void despliegaInformacionGerente(){
        this.despliegaInformacion();
        System.out.println("Bono: " + this.bono);
    }

    public int getBono() {
        return bono;
    }

    public void setBono(int bono) {
        this.bono = bono;
    }
}
