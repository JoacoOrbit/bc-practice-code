import com.clases.*;

public class Main {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Agustin", 250);
        Gerente gerente1 = new Gerente("Ernesto", 400, 200);
        Director director1 = new Director("Julieta", 600, 300, 200);

        empleado1.despliegaInformacion();

        gerente1.despliegaInformacionGerente();

        director1.despliegaInformacionDirector();
    }
}