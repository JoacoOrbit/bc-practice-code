import clases.Cajero;

public class App {
    public static void main (String args []){
        System.out.println(Cajero.retirarDinero(5000));
        System.out.println(Cajero.retirarDinero(9000));
        System.out.println(Cajero.pagarFactura(2000, 2000));
        System.out.println(Cajero.pagarFactura(2000, 2500));
        System.out.println(Cajero.pagarFactura(3000, 2500));
        System.out.println(Cajero.cambiarBilletes(5000));
        System.out.println(Cajero.cambiarBilletes(5010));
        System.out.println(Cajero.totalDeBilletesYMonedas(16243));
    }
}