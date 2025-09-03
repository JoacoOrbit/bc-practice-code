package clases;
import java.util.ArrayList;

public class Garaje {
    private ArrayList<Vehiculo> vehiculos;
    private int capacidad;

    public Garaje(int capacidad){
        vehiculos = new ArrayList<>();
        this.capacidad = capacidad;
    }

    public void agregarVehiculo(Vehiculo vehiculo){
        if (this.vehiculos.size() < capacidad){
            this.vehiculos.add(vehiculo);
        } else {
            System.out.println("no hay espacio");
        }
    }

    public void mostrarVehiculos(){
        for (Vehiculo vehiculoActual: this.vehiculos){
            System.out.println(vehiculoActual.despliegaInformacion());
        }
    }
}
