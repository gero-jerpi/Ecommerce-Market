CREATE DATABASE IF NOT EXISTS ecommercemarket;
USE ecommercemarket;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(300),
    user VARCHAR(50) UNIQUE,
    password VARCHAR(50)
);

INSERT INTO users (user, password) 
VALUES
("admin", 123);

SELECT * FROM users;
	
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	offer TINYINT NOT NULL,
    category VARCHAR(40) NOT NULL,
    img VARCHAR(1500) NOT NULL,
    price INT NOT NULL,
    amount VARCHAR(40) NOT NULL,
    name VARCHAR(150) NOT NULL,
    brand VARCHAR(150) NOT NULL
);

INSERT INTO products (offer, category, img, price, amount, name, brand)
VALUES 
(1, "almacen", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F5359_thumbnail_1654529383_ID-5359-1.jpg&w=256&q=75)", 600, "1 Kg", "Azúcar común", "Ledesma"),
(0, "almacen", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-6763-1.jpg&w=256&q=75", 3380, "300 Gr", "Azúcar Impalpable", "Dos Anclas"),
(1, "almacen", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-10713-1.jpg&w=256&q=75", 380, "500 Gr", "Fideos", "Lucchetti"),
(1, "almacen", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F3960_thumbnail_1666204639_ID-3960-1.jpg&w=128&q=75", 299, "1 Kg", "Harina 0000", "Pureza"),
(0, "almacen", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F5262_thumbnail_1660929598_ID-5262-1.jpg&w=256&q=75", 579, "100 Sobres", "Edulcorante", "Cabrales"),
(0, "almacen", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F9933_thumbnail_1658762919_ID-9933-1.jpg&w=128&q=75", 340, "500 Ml", "Jugo de Limón", "Dos Anclas"),
(0, "almacen", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-1-1.jpg&w=128&q=75", 1200, "1.5 Lt", "Aceite de Girasol", "Cañuelas"),
(0, "almacen", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F437_thumbnail_1660915673_ID-437-1.jpg&w=128&q=75", 500, "500 Gr", "Yerba", "Amanda"),
(0,"limpieza", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F4052_thumbnail_1651599132_ID-4052-1.jpg&w=128&q=75", 520, "250 Ml", "Aromatizante", "Poett"),
(1,"limpieza", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F5686_thumbnail_1666193791_ID-5686-1.jpg&w=128&q=75", 230, "45 x 60 CM 10 Un", "Bolsas de Residuos", "Make"),
(1,"limpieza", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-1734-1.jpg&w=256&q=75", 720, "450 Ml", "Autobrillo Blem", "Blem"),
(0,"limpieza", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F8955_thumbnail_1651687495_ID-4072-1.jpg&w=128&q=75", 470, "332 Ml", "Desinfectante", "Ayudín"),
(1,"limpieza", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F7561_thumbnail_1658342464_ID-7561-1.jpg&w=128&q=75", 380, "1 Un", "Encendedor", "Bic"),
(0,"limpieza", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FBroches%20de%20Plastico%20Task.jpg&w=128&q=75", 510, "360 Ml", "Desodorante", "Glade"),
(0,"limpieza", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F5700_thumbnail_1666193650_ID-5700-1.jpg&w=128&q=75", 1750, "1 Un", "Balde Plástico", "Make"),
(0,"limpieza", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F5853_thumbnail_1652384176_ID-5853-1.jpg&w=128&q=75", 610, "14 Un", "Bolsas Ziploc", "Ziploc"),
(0, "congelados", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-10205-1.jpg&w=128&q=75", 565, "500 Gr", "Acelga", "Green Life"),
(0, "congelados", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-7239-1.jpg&w=128&q=75", 2600, "1 Kg", "Aros de cebolla", "McCain"),
(0, "congelados", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FChicken%20Fingers%20Sadia%20720%20gr.jpg&w=128&q=75", 2400, "720 Gr", "Chicken Fingers", "Sadia"),
(1, "congelados", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F5735_thumbnail_1655137914_ID-5735-1.jpg&w=128&q=75", 1100, "800 Gr", "Brócoli", "Grupolar"),
(1, "congelados", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-8969-1.jpg&w=128&q=75", 1620, "400 Gr", "Filet", "Solimeno"),
(0, "congelados", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F9528_thumbnail_1655816349_id-9528-1.jpg&w=128&q=75", 2570, "1 Kg", "Pechugas", "Tres Arroyos"),
(0, "congelados", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F9525_thumbnail_1660067496_ID-9525-1.jpg&w=128&q=75", 673, "1 Kg", "Pollo Entero", "Tres Arroyos"),
(1, "congelados", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FHamburguesa%20Swift%20Cl%C3%A1sica%202%20Un.jpg&w=128&q=75", 560, "160 Gr", "Hamburguesas", "Swift"),
(1, "fiambreria", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F6081_thumbnail_1600095637_adler.jpg&w=128&q=75", 500, "100 Gr", "Queso Adler", "Salame"),
(1, "fiambreria", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-9788-1.jpg&w=128&q=75", 940, "250 Gr", "Queso la Paulina", "Gauda"),
(0, "fiambreria", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F6027_thumbnail_1623157098_10818386055ea0ba07244ca3.08581861_CremosoOctavoCremac011.jpg&w=128&q=75", 1300, "500 Gr", "Queso Cremoso", "Cremac"),
(0, "fiambreria", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-7900-1.jpg&w=128&q=75", 1250, "250 Gr", "Queso Reggianito", "Romanito Chamen"),
(0, "fiambreria", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F5508_thumbnail_1660935629_ID-5508-1.jpg&w=128&q=75", 450, "6 Un", "Salchicas", "Vienissima"),
(0, "fiambreria", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F9847_thumbnail_1668790471_ID-9847-1.jpg&w=128&q=75", 400, "200 Gr", "Fiambre de Cerdo", "Cagnoli Feteado"),
(0, "fiambreria", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-7278-1.jpg&w=128&q=75", 1150, "100 Gr", "Jamón Crudo", "Paladini"),
(1, "fiambreria", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-9832-1.jpg&w=128&q=75", 310, "150 Gr", "Leberwurst", "Cagnoli"),
(0, "kiosko", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-10161-1.jpg&w=128&q=75", 320, "70 Gr", "Alfajor", "Cachafaz"),
(0, "kiosko", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F9095_thumbnail_1658344733_ID-9095-1.jpg&w=128&q=75", 1100, "50 Gr", "Tabajo las Hojas", "Sabor Vainilla"),
(0, "kiosko", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FAlfajor%20Guaymall%C3%A9n%20Simple%20Negro.jpg&w=128&q=75", 120, "70 Gr", "Alfajor Guaymallén", "Triple blanco"),
(1, "kiosko", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F7367_thumbnail_1651842623_ID-7367-1.jpg&w=128&q=75", 280, "57 Gr", "Alfajor Triple", "Pepitos"),
(1, "kiosko", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F5840_thumbnail_1652978224_Chocolate_Cadbury_Frutilla_27_Gr.jpg&w=128&q=75", 245, "29 Gr", "Chocolate Cadbury", "Frutilla"),
(0, "kiosko", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F8917_thumbnail_1657217568_ID-8917-1.jpg&w=128&q=75", 424, "45 Gr", "Chocolate Milka", "Leger con Leche"),
(0, "kiosko", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2F4654_thumbnail_1595471301_Alfajor_Cofler_Block_21X60Grs.jpg&w=128&q=75", 254, "60 Gr", "Alfajor Cofler", "Block"),
(0, "kiosko", "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-5416-1.jpg&w=128&q=75", 300, "100 Gr", "Snack Saladix", "Jamón")
;

SELECT * FROM products;

CREATE TABLE consultas (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(500) NOT NULL,
    consulta VARCHAR(2500) NOT NULL
);

SELECT * FROM consultas;


