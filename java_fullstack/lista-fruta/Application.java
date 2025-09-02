import java.util.HashMap;

public class Application {  
    public static void main (String args []){
        HashMap<String, Integer> frutas = new HashMap<>();
        System.out.println("¿Cuantas frutas comprará?");
        try {
            int cantidad = Integer.parseInt(System.console().readLine());
            String fruta;
            int cantidadFruta;
            for(int i = 1; i <= cantidad; i++)  {
                System.out.println(i + ". Que fruta quieres?");
                fruta = System.console().readLine();
                System.out.println(i + ". Cuanta " + fruta + " quieres?");
                try {
                    cantidadFruta = Integer.parseInt(System.console().readLine());
                    frutas.put(fruta, cantidadFruta);
                } catch (NumberFormatException e) {
                    System.out.println("valor invalido, no ingresó un número");
                }
            }

            System.out.println(frutas.toString());
            
        } catch (NumberFormatException e) {
            System.out.println("Valor invalido, intenta nuevamente.");
        }

    }
}
