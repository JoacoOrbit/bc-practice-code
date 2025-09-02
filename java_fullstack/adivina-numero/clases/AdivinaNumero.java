package clases;

public class AdivinaNumero {
    public static String compraraNumeros(int numero, int numeroRandom){
        if (numero == numeroRandom) {
            return "Has conseguido adivinar el numero: ";
        } else if (numero > numeroRandom) {
            return "Intenta con un numero más pequeño: ";
        } else {
            return "Intenta con un numero mas grande: ";
        }
    }
}