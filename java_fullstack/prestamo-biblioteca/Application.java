import clases.Libro;
import clases.Prestamo;

public class Application {
    public static void main(String args []){
        Prestamo prestamo1 = new Prestamo();
        Prestamo prestamo2 = new Prestamo();
        Prestamo prestamo3 = new Prestamo("juan", true);
        Prestamo prestamo4 = new Prestamo("pedro", true);
        Prestamo prestamo5 = new Prestamo("diego", true);

        Libro libro1 = new Libro("Labubu", "labewbew", 3000);
        Libro libro2 = new Libro("Fortnite", "Epic", 63000);

        prestamo3.agregarLibro(libro1);
        prestamo3.agregarLibro(libro2);
        prestamo4.agregarLibro(libro1);
        prestamo4.agregarLibro(libro2);
        prestamo5.agregarLibro(libro1);
        prestamo5.agregarLibro(libro2);

        System.out.println(prestamo1.mostrarDetallesDelPrestamo());
        System.out.println(prestamo2.mostrarDetallesDelPrestamo());
        System.out.println(prestamo3.mostrarDetallesDelPrestamo());
        System.out.println(prestamo4.mostrarDetallesDelPrestamo());
        System.out.println(prestamo5.mostrarDetallesDelPrestamo());

        prestamo3.setEstatus(false);
        prestamo5.setEstatus(false);

        System.out.println(prestamo1.mostrarEstatus());
        System.out.println(prestamo2.mostrarEstatus());
        System.out.println(prestamo3.mostrarEstatus());
        System.out.println(prestamo4.mostrarEstatus());
        System.out.println(prestamo5.mostrarEstatus());
    }
}
