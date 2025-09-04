package com.clases;

public class Empleado {
    private String nombre;
    private int identificador;
    private int salarioBase;

    private static int idActual;
    private static final int horasPorMes = 160;

    public Empleado (String nombre, int salarioBase){
        this.nombre = nombre;
        this.identificador = generaIdentificador();
        this.salarioBase = salarioBase;
    }




    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getSalarioBase() {
        return salarioBase;
    }

    public void setSalarioBase(int salarioBase) {
        this.salarioBase = salarioBase;
    }




    public int salarioTotal(){
        return this.salarioBase * horasPorMes;
    }

    public void despliegaInformacion(){
        System.out.println("Nombre: " + this.nombre);
        System.out.println("Identificador: " + this.identificador);
        System.out.println("Salario base: " + this.salarioBase);
        System.out.println("Salario total: " + salarioTotal());
    }

    private int generaIdentificador(){
        idActual++;
        return idActual;
    }

}
