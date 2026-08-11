/* ===================================================================
   CARTA LA HIGUERA - DATOS
   VERSION 2026-08-12-d
   Este es el UNICO fichero que hay que tocar para cambiar precios.
   Cada plato es una linea: cambia el numero de 'precio' y ya esta.
   Los nombres son los de la web, con las erratas de traduccion
   corregidas. Los precios, los del Word nuevo de la familia.
   Word nuevo de la familia.
   Alergenos validos: gluten, crustaceos, huevo, pescado, cacahuete,
   soja, lacteos, frutos_cascara, apio, sulfitos, moluscos
   =================================================================== */

window.CARTA_DATOS_VERSION = '2026-08-12-d';

window.CARTA_DATOS = {

  // Titulo grande que encabeza la bodega
  titulos: {
    vinos: {"es": "Bodega", "ca": "Celler", "en": "Cellar", "fr": "Vins"}
  },

  secciones: {
    entrantes: {"es": "Entrantes", "ca": "Entrants", "en": "Starters", "fr": "Entrées"},
    tostadas: {"es": "Tostadas", "ca": "Torrades", "en": "Toast", "fr": "Tartines"},
    mariscos: {"es": "Mariscos", "ca": "Marisc", "en": "Sea Food", "fr": "Fruits de Mer"},
    pescados: {"es": "Pescados", "ca": "Peixos", "en": "Fish", "fr": "Poissons"},
    carnes: {"es": "Carnes", "ca": "Carns", "en": "Meat", "fr": "Viandes"},
    postres: {"es": "Postres", "ca": "Postres", "en": "Desserts", "fr": "Desserts"},
    bocadillos: {"es": "Bocadillos", "ca": "Entrepans", "en": "Sandwiches", "fr": "Sandwichs"},
    rioja: {"es": "Rioja", "ca": "Rioja", "en": "Rioja", "fr": "Rioja"},
    ribera: {"es": "Ribera del Duero", "ca": "Ribera del Duero", "en": "Ribera del Duero", "fr": "Ribera del Duero"},
    catalanes: {"es": "Cataluña", "ca": "Catalunya", "en": "Catalonia", "fr": "Catalogne"},
    blancos: {"es": "Blancos", "ca": "Blancs", "en": "Whites", "fr": "Blancs"},
    rosados: {"es": "Rosados", "ca": "Rosats", "en": "Rosés", "fr": "Rosés"},
    cavas: {"es": "Cavas", "ca": "Caves", "en": "Cavas", "fr": "Mousseux"},
    copas: {"es": "Copas", "ca": "Copes", "en": "Glasses", "fr": "Verres"}
  },

  platos: [

    // ---------- ENTRANTES ----------
    {"seccion": "entrantes", "precio": "10,00", "alergenos": ["pescado"], "es": "Ensalada", "ca": "Amanida", "en": "Green salad", "fr": "Salade"},
    {"seccion": "entrantes", "precio": "12,00", "alergenos": [], "es": "Espárragos blancos aliñados o espárragos trigueros verdes a la plancha", "ca": "Espàrrecs blancs amanits o espàrrecs verds a la planxa", "en": "Seasoned white asparagus or grilled green asparagus", "fr": "Asperges blanches dressées ou asperges vertes grillées"},
    {"seccion": "entrantes", "precio": "10,00", "alergenos": [], "es": "Gírgolas (setas) a la plancha", "ca": "Gírgoles (bolets) a la planxa", "en": "Grilled oyster mushrooms", "fr": "Pleurotes grillées"},
    {"seccion": "entrantes", "precio": "9,00", "alergenos": [], "es": "Pimientos de Padrón", "ca": "Pebrots de Padrón", "en": "Padrón peppers", "fr": "Poivrons de Padrón"},
    {"seccion": "entrantes", "precio": "16,90", "alergenos": ["pescado"], "es": "Alcachofas con anchoas", "ca": "Carxofes amb anxoves", "en": "Artichokes with anchovies", "fr": "Artichauts aux anchois"},
    {"seccion": "entrantes", "precio": "33,00", "alergenos": [], "es": "Jamón ibérico de bellota", "ca": "Pernil ibèric de gla", "en": "Acorn-fed Iberian ham", "fr": "Jambon ibérique de bellota"},
    {"seccion": "entrantes", "precio": "34,00", "alergenos": ["lacteos"], "es": "Lomo ibérico de bellota", "ca": "Llom ibèric de gla", "en": "Acorn-fed Iberian loin", "fr": "Longe de porc ibérique"},
    {"seccion": "entrantes", "precio": "36,00", "alergenos": ["lacteos"], "es": "Plato de jamón ibérico y queso", "ca": "Plat de pernil ibèric i formatge", "en": "Iberian ham and cheese platter", "fr": "Assiette de jambon et fromage"},
    {"seccion": "entrantes", "precio": "37,50", "alergenos": ["lacteos"], "es": "Plato de lomo ibérico y queso", "ca": "Plat de llom ibèric i formatge", "en": "Iberian loin and cheese platter", "fr": "Plat de longe de porc et fromage"},
    {"seccion": "entrantes", "precio": "26,00", "alergenos": ["lacteos"], "es": "Plato de embutido variado y queso", "ca": "Plat d'embotit variat i formatge", "en": "Assorted cold meats & cheese platter", "fr": "Assiette de charcuterie et de fromage"},
    {"seccion": "entrantes", "precio": "4,00", "alergenos": ["gluten"], "es": "Pan con tomate (Ración)", "ca": "Pa amb tomàquet (Ració)", "en": "Toasted bread, tomato, oil", "fr": "Pain à la tomate (Ration)"},
    {"seccion": "entrantes", "precio": "3,60", "alergenos": ["pescado", "gluten"], "es": "Montadito de anchoas", "ca": "\"Montadito\" d'anxoves", "en": "Cantabrian anchovies", "fr": "Canapé d'anchois"},
    {"seccion": "entrantes", "precio": "2,30", "alergenos": ["gluten"], "es": "Chistorra de Navarra (Pieza)", "ca": "Xistorra de Navarra (Peça)", "en": "Semi-cured sausage (Piece)", "fr": "Saucisse de Navarre (Pièce)"},
    {"seccion": "entrantes", "precio": "2,30", "alergenos": ["gluten", "lacteos", "huevo"], "es": "Croqueta (Pieza)", "ca": "Croqueta (Peça)", "en": "Croquette (Piece)", "fr": "Croquette (Pièce)"},
    {"seccion": "entrantes", "precio": "11,00", "alergenos": ["lacteos"], "es": "Queso manchego de oveja", "ca": "Formatge manxec d'ovella", "en": "Manchego cheese platter", "fr": "Fromage manchego de brebis"},
    {"seccion": "entrantes", "precio": "10,00", "alergenos": ["lacteos"], "es": "Chorizo picante de Zamora", "ca": "Xoriço picant de Zamora", "en": "Spicy chorizo of Zamora", "fr": "Chorizo piquant de Zamora"},
    {"seccion": "entrantes", "precio": "9,00", "alergenos": [], "es": "Fuet de Vic", "ca": "Fuet de Vic", "en": "Catalan Fuet from Vic", "fr": "Saucisse sèche catalane de Vic"},
    {"seccion": "entrantes", "precio": "11,00", "alergenos": ["pescado"], "es": "Mojama de atún con aceite de oliva", "ca": "Moixama de tonyina amb oli d'oliva", "en": "Dried salted tuna with olive oil", "fr": "Thon séché (spécialité andalouse)"},

    // ---------- TOSTADAS ----------
    {"seccion": "tostadas", "precio": "13,00", "alergenos": ["gluten"], "es": "Tostada de jamón ibérico", "ca": "Torrada de pernil ibèric", "en": "Iberian cured ham toast", "fr": "Tartine de jambon ibérique"},
    {"seccion": "tostadas", "precio": "15,00", "alergenos": ["gluten", "lacteos"], "es": "Tostada de lomo ibérico de bellota", "ca": "Torrada de llom ibèric de gla", "en": "Iberian acorn-fed cured loin toast", "fr": "Tartine de longe de porc ibérique"},
    {"seccion": "tostadas", "precio": "10,50", "alergenos": ["gluten", "lacteos"], "es": "Tostada de queso", "ca": "Torrada de formatge", "en": "Spanish cheese toast", "fr": "Tartine de fromage"},
    {"seccion": "tostadas", "precio": "10,00", "alergenos": ["gluten", "lacteos"], "es": "Tostada de chorizo picante", "ca": "Torrada de xoriço picant", "en": "Spanish spicy chorizo toast", "fr": "Tartine de chorizo piquant"},
    {"seccion": "tostadas", "precio": "9,00", "alergenos": ["gluten"], "es": "Tostada de fuet", "ca": "Torrada de fuet", "en": "Catalan Fuet toast", "fr": "Tartine de Fuet"},
    {"seccion": "tostadas", "precio": "11,00", "alergenos": ["gluten", "pescado"], "es": "Tostada de bonito, pimientos y olivas", "ca": "Torrada de bonítol, pebrots i olives", "en": "Bonito Tuna, peppers and olives toast", "fr": "Tartine de bonite, poivrons et olives"},
    {"seccion": "tostadas", "precio": "11,00", "alergenos": ["gluten"], "es": "Tostada de chistorra", "ca": "Torrada de xistorra", "en": "Semi-cured sausage toast", "fr": "Tartine de saucisse de Navarre"},
    {"seccion": "tostadas", "precio": "12,00", "alergenos": ["gluten", "lacteos"], "es": "Tostada de lomo con queso y pimientos", "ca": "Torrada de llom amb formatge i pebrots", "en": "Grilled pork loin, cheese and peppers toast", "fr": "Tartine de longe, fromage et poivrons"},

    // ---------- MARISCOS ----------
    {"seccion": "mariscos", "precio": "36,00", "alergenos": ["crustaceos"], "es": "Gambitas de playa a la plancha", "ca": "Gambetes de platja a la planxa", "en": "Grilled seacoast prawns", "fr": "Crevettes de plage grillées"},
    {"seccion": "mariscos", "precio": "36,00", "alergenos": ["crustaceos"], "es": "Cigalas a la plancha (8 piezas)", "ca": "Escamarlans a la planxa (8 peces)", "en": "Grilled langoustines (8 pieces)", "fr": "Langoustines grillées (8 pièces)"},
    {"seccion": "mariscos", "precio": "32,00", "alergenos": ["crustaceos"], "es": "Langostinos a la plancha (8 piezas)", "ca": "Llagostins a la planxa (8 peces)", "en": "Grilled king prawns (8 pieces)", "fr": "Grosses crevettes grillées (8 pièces)"},
    {"seccion": "mariscos", "precio": "12,00", "alergenos": ["moluscos"], "es": "Navajas a la plancha", "ca": "Navalles a la planxa", "en": "Grilled razor clams", "fr": "Couteaux de mer grillés"},
    {"seccion": "mariscos", "precio": "23,00", "alergenos": ["moluscos"], "es": "Almejas al vino blanco", "ca": "Cloïsses al vi blanc", "en": "Clams in white wine", "fr": "Palourdes au vin blanc"},
    {"seccion": "mariscos", "precio": "10,00", "alergenos": ["moluscos"], "es": "Vieiras a la plancha con gírgolas y Katsuobushi (2 piezas)", "ca": "Vieires a la planxa amb gírgoles i Katsuobushi (2 peces)", "en": "Grilled scallops with oyster mushrooms & Katsuobushi (2 pieces)", "fr": "Saint-Jacques grillées avec pleurotes et Katsuobushi (2 pièces)"},
    {"seccion": "mariscos", "precio": "20,00", "alergenos": ["crustaceos"], "es": "Gambas al ajillo", "ca": "Gambes amb allada", "en": "Garlic prawns", "fr": "Crevettes à l'ail"},

    // ---------- PESCADOS ----------
    {"seccion": "pescados", "precio": "8,00", "alergenos": ["pescado", "gluten"], "es": "Taco de bacalao con pimientos (Pieza)", "ca": "Tall de bacallà amb pebrots (Peça)", "en": "Codfish loin with peppers (Piece)", "fr": "Cube de morue aux poivrons (Pièce)"},
    {"seccion": "pescados", "precio": "8,00", "alergenos": ["pescado", "gluten"], "es": "Boquerones a la andaluza", "ca": "Seitons a l'andalusa", "en": "Andalusian style anchovies", "fr": "Anchois à l'andalouse"},
    {"seccion": "pescados", "precio": "19,90", "alergenos": ["moluscos", "gluten"], "es": "Calamares a la andaluza", "ca": "Calamars a l'andalusa", "en": "Andalusian style squid", "fr": "Calamars à l'andalouse"},
    {"seccion": "pescados", "precio": "22,50", "alergenos": ["pescado"], "es": "Lomo de bonito en aceite con pimientos, tomates y olivas", "ca": "Llom de bonítol en oli amb pebrots, tomàquets i olives", "en": "Bonito loin in oil with peppers, tomatoes and olives", "fr": "Filet de bonite à l'huile avec poivrons, tomates et olives"},
    {"seccion": "pescados", "precio": "18,00", "alergenos": ["pescado"], "es": "Lomo de bonito pequeño en aceite con pimientos, tomates y olivas", "ca": "Llom de bonítol petit en oli amb pebrots, tomàquets i olives", "en": "Small bonito loin in oil with peppers, tomatoes and olives", "fr": "Petit filet de bonite à l'huile avec poivrons, tomates et olives"},

    // ---------- CARNES ----------
    {"seccion": "carnes", "precio": "46,00", "alergenos": [], "es": "Solomillo troceado con patatas y pimientos de Padrón (Para compartir)", "ca": "Filet de vedella trossejat amb patates i pebrots de Padrón (Per a compartir)", "en": "Diced tenderloin steak with french fries & Padrón peppers (To share)", "fr": "Steak d'aloyau avec frites et poivrons de Padrón (À partager)"},
    {"seccion": "carnes", "precio": "42,00", "alergenos": [], "es": "Presa ibérica con patatas y pimientos de Padrón (Para compartir)", "ca": "Presa ibèrica amb patates i pebrots de Padrón (Per a compartir)", "en": "Iberian pork with french fries and Padrón peppers (To share)", "fr": "Presa ibérique avec frites et poivrons de Padrón (À partager)"},
    {"seccion": "carnes", "precio": "23,90", "alergenos": [], "es": "Entrecot con patatas", "ca": "Entrecot amb patates", "en": "Entrecote with french fries", "fr": "Entrecôte avec frites"},
    {"seccion": "carnes", "precio": "10,00", "alergenos": ["gluten"], "es": "Montaditos de foie con confitura de cebolla (2 piezas)", "ca": "\"Montaditos\" de foie amb confitura de ceba (2 peces)", "en": "Foie \"Montaditos\" with onion jam (2 pieces)", "fr": "Foie \"montaditos\" au confit d'oignons (2 pièces)"},

    // ---------- POSTRES ----------
    {"seccion": "postres", "precio": "7,50", "alergenos": ["frutos_cascara", "huevo", "lacteos", "gluten"], "es": "Tarta al whisky", "ca": "Pastís al whisky", "en": "Whisky cake", "fr": "Tarte au whisky"},
    {"seccion": "postres", "precio": "6,00", "alergenos": ["frutos_cascara", "huevo", "lacteos"], "es": "Crocanti", "ca": "Crocanti", "en": "Crocanti (vanilla & choco)", "fr": "Croquant"},
    {"seccion": "postres", "precio": "7,00", "alergenos": ["frutos_cascara", "lacteos", "cacahuete"], "es": "Sorbete de limón", "ca": "Sorbet de llimona", "en": "Lemon sorbet", "fr": "Sorbet au citron"},
    {"seccion": "postres", "precio": "6,00", "alergenos": ["frutos_cascara", "huevo", "lacteos", "gluten"], "es": "Tarta de Santiago", "ca": "Pastís de Santiago", "en": "St. James cake", "fr": "Tarte St. Jacques"},
    {"seccion": "postres", "precio": "7,50", "alergenos": ["frutos_cascara", "lacteos", "soja"], "es": "Trufas heladas", "ca": "Trufes gelades", "en": "Iced truffles (choco)", "fr": "Truffes glacées"},
    {"seccion": "postres", "precio": "6,00", "alergenos": [], "es": "Helado de la casa", "ca": "Gelats de la casa", "en": "Ice cream", "fr": "Glaces"},

    // ---------- BOCADILLOS ----------
    {"seccion": "bocadillos", "precio": "9,80", "alergenos": ["gluten"], "es": "Jamón ibérico", "ca": "Pernil ibèric", "en": "Iberian ham", "fr": "Jambon ibérique"},
    {"seccion": "bocadillos", "precio": "10,50", "alergenos": ["gluten", "lacteos"], "es": "Jamón ibérico con queso", "ca": "Pernil ibèric amb formatge", "en": "Iberian ham and cheese", "fr": "Jambon ibérique et fromage"},
    {"seccion": "bocadillos", "precio": "10,90", "alergenos": ["lacteos"], "es": "Lomo ibérico de bellota", "ca": "Llom ibèric de gla", "en": "Iberian acorn-fed loin", "fr": "Longe de porc ibérique"},
    {"seccion": "bocadillos", "precio": "8,80", "alergenos": ["gluten", "lacteos"], "es": "Queso manchego (Semi o seco)", "ca": "Formatge manxec (Semi o sec)", "en": "Manchego cheese (Semi or dry)", "fr": "Fromage manchego (Semi ou sec)"},
    {"seccion": "bocadillos", "precio": "7,80", "alergenos": ["lacteos"], "es": "Chorizo picante de Zamora", "ca": "Xoriço picant de Zamora", "en": "Spicy chorizo from Zamora", "fr": "Chorizo piquant de Zamora"},
    {"seccion": "bocadillos", "precio": "6,90", "alergenos": [], "es": "Fuet de Vic", "ca": "Fuet de Vic", "en": "Fuet from Vic", "fr": "Fuet de Vic"},
    {"seccion": "bocadillos", "precio": "8,00", "alergenos": ["gluten", "pescado"], "es": "Bonito en aceite o en escabeche", "ca": "Bonítol en oli o en escabetx", "en": "Bonito tuna in olive oil or pickled", "fr": "Bonite à l'huile ou marinée"},
    {"seccion": "bocadillos", "precio": "9,00", "alergenos": ["gluten", "pescado"], "es": "Bonito en aceite con pimientos y olivas", "ca": "Bonítol en oli amb pebrots i amb olives", "en": "Bonito tuna in olive oil, peppers & olives", "fr": "Bonite à l'huile avec poivrons et olives"},
    {"seccion": "bocadillos", "precio": "12,00", "alergenos": ["gluten", "pescado"], "es": "Bonito en aceite con anchoas", "ca": "Bonítol en oli amb anxoves", "en": "Bonito tuna and anchovies", "fr": "Bonite à l'huile avec anchois"},
    {"seccion": "bocadillos", "precio": "6,50", "alergenos": ["gluten"], "es": "Lomo a la plancha", "ca": "Llom a la planxa", "en": "Grilled pork loin", "fr": "Longe de porc grillée"},
    {"seccion": "bocadillos", "precio": "7,30", "alergenos": ["gluten", "lacteos"], "es": "Lomo a la plancha con queso", "ca": "Llom a la planxa amb formatge", "en": "Grilled pork loin with cheese", "fr": "Longe de porc grillée au fromage"},
    {"seccion": "bocadillos", "precio": "8,00", "alergenos": ["gluten", "lacteos"], "es": "Lomo a la plancha con queso y pimientos", "ca": "Llom a la planxa amb formatge i pebrots", "en": "Grilled pork loin, cheese and peppers", "fr": "Longe de porc grillée, fromage et poivrons"},
    {"seccion": "bocadillos", "precio": "7,30", "alergenos": ["gluten"], "es": "Chistorra de Navarra", "ca": "Xistorra de Navarra", "en": "Semi-cured sausage", "fr": "Saucisse de Navarre"},
    {"seccion": "bocadillos", "precio": "7,80", "alergenos": ["gluten", "lacteos"], "es": "Chistorra y queso", "ca": "Xistorra i formatge", "en": "Semi-cured sausage & cheese", "fr": "Saucisse et fromage"},

    // ---------- RIOJA ----------
    {"seccion": "rioja", "precio": "36,00", "alergenos": ["sulfitos"], "es": "Viña Pomal (Reserva)", "ca": "Viña Pomal (Reserva)", "en": "Viña Pomal (Reserva)", "fr": "Viña Pomal (Reserva)"},
    {"seccion": "rioja", "precio": "28,00", "alergenos": ["sulfitos"], "es": "Cerro Añón (Reserva)", "ca": "Cerro Añón (Reserva)", "en": "Cerro Añón (Reserva)", "fr": "Cerro Añón (Reserva)"},
    {"seccion": "rioja", "precio": "26,00", "alergenos": ["sulfitos"], "es": "Señorío de Ondarre (Reserva)", "ca": "Señorío de Ondarre (Reserva)", "en": "Señorío de Ondarre (Reserva)", "fr": "Señorío de Ondarre (Reserva)"},
    {"seccion": "rioja", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Gómez de Segura (Crianza)", "ca": "Gómez de Segura (Criança)", "en": "Gómez de Segura (Crianza)", "fr": "Gómez de Segura (Crianza)"},
    {"seccion": "rioja", "precio": "23,00", "alergenos": ["sulfitos"], "es": "Marqués de Riscal (37,5 cl., Reserva)", "ca": "Marqués de Riscal (37,5 cl.)(Reserva)", "en": "Marqués de Riscal (37,5 cl., Reserva)", "fr": "Marqués de Riscal (37,5 cl., Reserva)"},

    // ---------- RIBERA ----------
    {"seccion": "ribera", "precio": "28,00", "alergenos": ["sulfitos"], "es": "Vaquos (Crianza)", "ca": "Vaquos (Criança)", "en": "Vaquos (Crianza)", "fr": "Vaquos (Crianza)"},
    {"seccion": "ribera", "precio": "25,00", "alergenos": ["sulfitos"], "es": "Legaris (Crianza, 50 cl)", "ca": "Legaris (Criança, 50 cl)", "en": "Legaris (Crianza, 50 cl)", "fr": "Legaris (Crianza, 50 cl)"},

    // ---------- CATALANES ----------
    {"seccion": "catalanes", "precio": "36,00", "alergenos": ["sulfitos"], "es": "+ 7 (Priorat)", "ca": "+ 7 (Priorat)", "en": "+ 7 (Priorat)", "fr": "+ 7 (Priorat)"},
    {"seccion": "catalanes", "precio": "33,00", "alergenos": ["sulfitos"], "es": "Raimat Cabernet Sauvignon", "ca": "Raimat Cabernet Sauvignon", "en": "Raimat Cabernet Sauvignon", "fr": "Raimat Cabernet Sauvignon"},
    {"seccion": "catalanes", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Càtar (Montsant)", "ca": "Càtar (Montsant)", "en": "Càtar (Montsant)", "fr": "Càtar (Montsant)"},

    // ---------- BLANCOS ----------
    {"seccion": "blancos", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Castell de Montblanc (Chardonnay + Macabeu)", "ca": "Castell de Montblanc (Chardonnay + Macabeu)", "en": "Castell de Montblanc (Chardonnay + Macabeu)", "fr": "Castell de Montblanc (Chardonnay + Macabeu)"},
    {"seccion": "blancos", "precio": "26,00", "alergenos": ["sulfitos"], "es": "Martín Códax (Albariño)", "ca": "Martín Códax (Albariño)", "en": "Martín Códax (Albariño)", "fr": "Martín Códax (Albariño)"},
    {"seccion": "blancos", "precio": "18,00", "alergenos": ["sulfitos"], "es": "Monopole (Rioja)", "ca": "Monopole (Rioja)", "en": "Monopole (Rioja)", "fr": "Monopole (Rioja)"},
    {"seccion": "blancos", "precio": "16,50", "alergenos": ["sulfitos"], "es": "Blanc Pescador (Perelada)", "ca": "Blanc Pescador (Perelada)", "en": "Blanc Pescador (Perelada)", "fr": "Blanc Pescador (Perelada)"},
    {"seccion": "blancos", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Verdejo de la Casa", "ca": "Verdejo de la Casa", "en": "House Verdejo", "fr": "Verdejo de la Maison"},
    {"seccion": "blancos", "precio": "22,00", "alergenos": ["sulfitos"], "es": "Mireia (Gewürztraminer y Muscat)", "ca": "Mireia (Gewürztraminer i Muscat)", "en": "Mireia (Gewürztraminer & Muscat)", "fr": "Mireia (Gewürztraminer et Muscat)"},

    // ---------- ROSADOS ----------
    {"seccion": "rosados", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Las Campanas (Navarra)", "ca": "Las Campanas (Navarra)", "en": "Las Campanas (Navarra)", "fr": "Las Campanas (Navarra)"},
    {"seccion": "rosados", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Señorío de Sarría (Navarra)", "ca": "Señorío de Sarría (Navarra)", "en": "Señorío de Sarría (Navarra)", "fr": "Señorío de Sarría (Navarra)"},

    // ---------- CAVAS ----------
    {"seccion": "cavas", "precio": "36,00", "alergenos": ["sulfitos"], "es": "Juvé & Camps (Reserva de la Familia)", "ca": "Juvé & Camps (Reserva de la Família)", "en": "Juvé & Camps (Reserva de la Familia)", "fr": "Juvé & Camps (Reserva de la Familia)"},
    {"seccion": "cavas", "precio": "36,00", "alergenos": ["sulfitos"], "es": "Gramona Imperial", "ca": "Gramona Imperial", "en": "Gramona Imperial", "fr": "Gramona Imperial"},
    {"seccion": "cavas", "precio": "20,00", "alergenos": ["sulfitos"], "es": "Cavas Hill Brut", "ca": "Cavas Hill Brut", "en": "Cavas Hill Brut", "fr": "Cavas Hill Brut"},
    {"seccion": "cavas", "precio": "22,00", "alergenos": ["sulfitos"], "es": "Anna de Codorníu", "ca": "Anna de Codorníu", "en": "Anna de Codorníu", "fr": "Anna de Codorníu"},
    {"seccion": "cavas", "precio": "68,00", "alergenos": ["sulfitos"], "es": "Champagne Francés", "ca": "Champagne Francès", "en": "French Champagne", "fr": "Champagne Français"},
    {"seccion": "cavas", "precio": "95,00", "alergenos": ["sulfitos"], "es": "Champagne Francés Rosado", "ca": "Champagne Francès Rosat", "en": "French Rosé Champagne", "fr": "Champagne Rosé Français"},

    // ---------- COPAS ----------
    {"seccion": "copas", "precio": "4,20", "alergenos": ["sulfitos"], "es": "Copa de Cava (Brut)", "ca": "Copa de Cava (Brut)", "en": "Cava glass (Brut)", "fr": "Verre de Cava (Brut)"},
    {"seccion": "copas", "precio": "4,20", "alergenos": ["sulfitos"], "es": "Copa de Vino (Blanco, Rosado, Tinto)", "ca": "Copa de Vi (Blanc, Rosat, Negre)", "en": "Wine glass (White, Rosé, Red)", "fr": "Verre de Vin (Blanc, Rosé, Rouge)"},
    {"seccion": "copas", "precio": "4,20", "alergenos": ["sulfitos"], "es": "Copa de Sangría", "ca": "Copa de Sangria", "en": "Sangria glass", "fr": "Verre de Sangria"},
    {"seccion": "copas", "precio": "4,20", "alergenos": ["sulfitos"], "es": "Copa de Generoso (Manzanilla, Fino, Oloroso)", "ca": "Copa de Generoso (Manzanilla, Fino, Oloroso)", "en": "Generoso glass (Manzanilla, Fino, Oloroso)", "fr": "Verre de Generoso (Manzanilla, Fino, Oloroso)"},
    {"seccion": "copas", "precio": "6,50", "alergenos": ["sulfitos"], "es": "Copa de Vino (Amontillado, Palo Cortado)", "ca": "Copa de Vi (Amontillado, Palo Cortado)", "en": "Wine glass (Amontillado, Palo Cortado)", "fr": "Verre de Vin (Amontillado, Palo Cortado)"}
  ]
};
