import clases.AdivinaNumero;
import java.lang.Math;
import java.util.ArrayList;

public class Application {
    public static void main(String args []) {
        System.out.print("Por favor ingresa un número entre 1 y 100: ");
        int numRandom = (int) Math.floor((Math.random()*100)+1);
        int num;
        ArrayList<Integer> intentos = new ArrayList<>();
        do {
            String linea = System.console().readLine();
            try {
                num = Integer.parseInt(linea);
                System.out.print(AdivinaNumero.compraraNumeros(num, numRandom));
                if (num != numRandom) {
                    intentos.add(num);
                }
                
            } catch (NumberFormatException e) {
                System.out.print("Número inválido, intenta nuevamente: ");
                num = 0;
            }
        } while (num != numRandom);
        System.out.println("Te tomó " + intentos.size() + " intentos adivinar el número");
        System.out.println(intentos.toString());
    }
}