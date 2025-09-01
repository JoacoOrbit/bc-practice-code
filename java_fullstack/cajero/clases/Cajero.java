package clases;
import java.time.LocalDate;

public class Cajero {

    public static String retirarDinero(double monto){
        if (monto <= 8000) {
            return "Retiraste exitosamente la cantidad de " + monto;
        } else {
            return "Estás tratando de retirar mucho dinero, el límite es $8000";
        }
    }
    public static String pagarFactura(double factura, double pago) {
        if (pago < factura) {
            return "El día de " + LocalDate.now() + " pagaste " + pago + " aún te hacen falta " + (factura - pago);
        } else if (pago == factura) {
            return "Gracias por tu pago completo el día de " + LocalDate.now();
        } else if (pago > factura) {
            return "Gracias por tu pago el día de " + LocalDate.now() + ", tu cambio es de " + (pago - factura);
        } else {
            return "error";
        }
    }

    public static boolean cambiarBilletes(int ingresa){
        if (ingresa % 50 == 0){
            return true;
        } else {
            return false;
        }
    }

    public static String totalDeBilletesYMonedas (int monto) {
        int b500;
        int b200;
        int b100;
        int b50;
        int b20;
        int m10;
        int m5;
        int m2;
        int m1;
        int sobra;

        b500 = monto / 500;
        sobra = monto % 500;
        b200 = sobra / 200;
        sobra = sobra % 200;
        b100 = sobra / 100;
        sobra = sobra % 100;
        b50 = sobra / 50;
        sobra = sobra % 50;
        b20 = sobra / 20;
        sobra = sobra % 20;
        m10 = sobra / 10;
        sobra = sobra % 10;
        m5 = sobra / 5;
        sobra = sobra % 5;
        m2 = sobra / 2;
        sobra = sobra % 2;
        m1 = sobra;

        return "billetes de 500: " + b500 + ", billetes de 200: " + b200 + ", billetes de 100: " + b100 + ", billetes de 50: " + b50 + ", billetes de 20: " + b20 + ", monedas de 10: " + m10 + ", monedas de 5: " + m5 + ", monedas de 2: " + m2 + ", monedas de 1: " + m1;
    }
}