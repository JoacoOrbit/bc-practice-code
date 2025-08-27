public class Application {
    public static void main(String[] args) {
        Usuario user1 = new Usuario();
        Usuario user2 = new Usuario("Joaquín", "2000-10-11", 18);
        Usuario user3 = new Usuario("Alejandro", "2002-12-03");

        Usuario user4 = new Usuario();
        user4.setNombre("Raul");
        user4.setFechaNacimiento("2000-04-12");
        user4.setEdad(12);

        System.out.println(user1.toString());
        System.out.println(user2.toString());
        System.out.println(user3.toString());
        System.out.println(user4.toString());
    }
}
