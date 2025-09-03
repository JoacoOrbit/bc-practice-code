import clases.Vehiculo;
import clases.Garaje;

public class Application {
    public static void main (String args []) {
        Vehiculo amogus = new Vehiculo("xd","amogus",2020);
        Vehiculo terreneitor = new Vehiculo("hasbro","terreneitor",2009);
        Vehiculo eldelfortnite = new Vehiculo("fort","nite",2018);
        System.out.println(amogus.despliegaInformacion());
        Garaje miGaraje = new Garaje(2);
        miGaraje.agregarVehiculo(eldelfortnite);
        miGaraje.agregarVehiculo(terreneitor);
        miGaraje.agregarVehiculo(amogus);
        miGaraje.mostrarVehiculos();
    }
}