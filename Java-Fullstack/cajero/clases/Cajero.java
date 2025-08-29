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

    public static boolean cambiarBilletes(int ingresa, int resultado){
        if (ingresa % 50 == 0){
            return true;
        } else {
            return false;
        }
    }

    public static String totalDeBilletesYMonedas (int monto) {
        return "";
    }
}