package clases;

public class Libro {
    private String titulo;
    private String autor;
    private double precioDeReemplazo;

    public Libro(String titulo, String autor, double precioReemplazo){
        this.titulo = titulo;
        this.autor = autor;
        this.precioDeReemplazo = precioReemplazo;
    }

    //getters
    public String getTitulo(){
        return this.titulo;
    }

    public String getAutor(){
        return this.autor;
    }

    public double getPrecioDeReemplazo(){
        return this.precioDeReemplazo;
    }

    //setters
    public void setTitulo(String titulo){
        this.titulo = titulo;
    }
    
    public void setAutor(String autor){
        this.autor = autor;
    }

    public void setPrecioDeReemplazo(double precioReemplazo){
        this.precioDeReemplazo = precioReemplazo;
    }
}