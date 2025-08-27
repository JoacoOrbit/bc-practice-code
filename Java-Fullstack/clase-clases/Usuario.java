import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class Usuario {
    private String nombre;
    private LocalDate fechaNacimiento;
    private int edad;

    //Metodos constructores
    public Usuario(){
        this.nombre = "";
        this.fechaNacimiento = LocalDate.now();
        this.edad = 0;
    }

    public Usuario(String nombre, String fechaNacimiento, int edad){
        this.nombre = nombre;
        this.edad = edad;
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate date = LocalDate.parse(fechaNacimiento, formatter);
        this.fechaNacimiento = date;
    }

    public Usuario(String nombre, String fechaNacimiento){
        this.nombre = nombre;
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate date = LocalDate.parse(fechaNacimiento, formatter);
        this.fechaNacimiento = date;
        this.edad = this.calcularEdad();
    }
    
    // Getters y Setters
    public String getNombre(){
        return nombre;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public int getEdad(){
        return edad;
    }

    public void setEdad(int edad){
        this.edad = edad;
    }

    public LocalDate getFechaNacimiento(){
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate date = LocalDate.parse(fechaNacimiento, formatter);
        this.fechaNacimiento = date;
    }

    // metodos de instancia
    private int calcularEdad(){
        Period diferencia = Period.between(this.fechaNacimiento, LocalDate.now());
        int edadCalculada = diferencia.getYears();
        return edadCalculada;
    }

    @Override
    public String toString(){
        return "Nombre: " + this.nombre + ", Fecha de Nacimiento: " + this.fechaNacimiento + ", Edad: " + this.edad;
    }
}