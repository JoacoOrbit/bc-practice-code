package clases;
import java.util.ArrayList;

public class Prestamo {
    private String nombre;
    private ArrayList<Libro> libros;
    private boolean estatus;

    public Prestamo(){
         this.nombre = "invitado";
         this.libros = new ArrayList<>();
         this.estatus = true;
    }

    public Prestamo(String nombre, boolean estatus){
         this.nombre = nombre;
         this.libros = new ArrayList<>();
         this.estatus = estatus;
    }

    public void agregarLibro(Libro libro){
        this.libros.add(libro);
    }

    public String mostrarEstatus(){
        if (estatus) {
            return "El prestamo está activo";
        } else {
            return "El prestamo no está activo";
        }
    }

    public String mostrarDetallesDelPrestamo(){
        StringBuilder mensaje = new StringBuilder();
        mensaje.append("nombre: " + this.nombre + "\n estado del prestamo: " + this.estatus +"\n\n");
        for (Libro libroActual : this.libros) {
            mensaje.append("Titulo: " + libroActual.getTitulo() + "\n");
            mensaje.append("Autor: " + libroActual.getAutor() + "\n");
            mensaje.append("Precio de reemplazo: " + libroActual.getPrecioDeReemplazo() + "\n");
        }

        return mensaje.toString();
    }

    public double calcularTotalDeReemplazo(){
        double total = 0;
        for (Libro libroActual : this.libros){
            total += libroActual.getPrecioDeReemplazo();
        }
        return total;
    }

    //getters
    public String getNombre(){
        return this.nombre;
    }
    //todo: revisar
    public ArrayList<Libro> getLibros(){
        return this.libros;
    }

    public boolean getEstatus(){
        return this.estatus;
    }

    //setters
    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public void setEstatus(boolean estatus){
        this.estatus = estatus;
    }
    //todo revisar
    public void setLibros(ArrayList<Libro> libros){
        this.libros = libros;
    }
}
