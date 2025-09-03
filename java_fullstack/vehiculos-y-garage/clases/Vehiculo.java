package clases;

public class Vehiculo {
    private String marca;
    private String modelo;
    private int anio;

    public Vehiculo(String marca, String modelo, int anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    public String despliegaInformacion(){
        return "marca: " + this.marca + ", modelo: " + this.modelo + ", año: " + this.anio;
    }
}