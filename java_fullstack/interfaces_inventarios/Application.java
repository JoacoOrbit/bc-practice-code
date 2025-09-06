import com.clases.*;

public class Application {

    public static void main (String args[]){

    Producto producto1 = new Producto("abc1", "Televisor", 200000);
    Producto producto2 = new Producto("abc2", "Refrigerador", 150000);
    Producto producto3 = new Producto("abc3", "Microondas", 50000);
    Inventario inventario = new Inventario();

    inventario.agregarProducto(producto1);
    inventario.agregarProducto(producto2);
    inventario.agregarProducto(producto3);

    inventario.eliminarProducto(producto1);

    inventario.buscarProducto("abc3");
    }
}
