/* ===================================================================
   CARTA LA HIGUERA - DATOS
   Este es el UNICO fichero que hay que tocar para cambiar precios.
   Cada plato es una linea: cambia el numero de 'precio' y ya esta.
   Alergenos validos: gluten, crustaceos, huevo, pescado, cacahuete,
   soja, lacteos, frutos_cascara, apio, sulfitos, moluscos
   =================================================================== */

window.CARTA_DATOS = {

  secciones: {
    entrantes: {"es": "Entrantes", "ca": "Entrants", "en": "Starters", "fr": "Entrées"},
    tostadas: {"es": "Tostadas", "ca": "Torrades", "en": "Toast", "fr": "Tartines"},
    mariscos: {"es": "Mariscos", "ca": "Marisc", "en": "Sea food", "fr": "Fruits de mer"},
    pescados: {"es": "Pescados", "ca": "Peix", "en": "Fish", "fr": "Poissons"},
    carnes: {"es": "Carnes", "ca": "Carn", "en": "Meat", "fr": "Viandes"},
    postres: {"es": "Postres", "ca": "Postres", "en": "Desserts", "fr": "Desserts"},
    bocadillos: {"es": "Bocadillos", "ca": "Entrepans", "en": "Sandwiches", "fr": "Sandwichs"},
    rioja: {"es": "Rioja", "ca": "Rioja", "en": "Rioja", "fr": "Rioja"},
    ribera: {"es": "Ribera del Duero", "ca": "Ribera del Duero", "en": "Ribera del Duero", "fr": "Ribera del Duero"},
    catalanes: {"es": "Vinos catalanes", "ca": "Vins catalans", "en": "Catalan wines", "fr": "Vins catalans"},
    blancos: {"es": "Blancos", "ca": "Blancs", "en": "Whites", "fr": "Blancs"},
    rosados: {"es": "Rosados", "ca": "Rosats", "en": "Rosés", "fr": "Rosés"},
    cavas: {"es": "Cavas", "ca": "Caves", "en": "Cavas", "fr": "Mousseux"},
    copas: {"es": "Copas", "ca": "Copes", "en": "By the glass", "fr": "Au verre"}
  },

  platos: [

    // ---------- ENTRANTES ----------
    {"seccion": "entrantes", "precio": "10,00", "alergenos": ["pescado"], "es": "Ensalada", "ca": "Amanida", "en": "Green salad", "fr": "Salade"},
    {"seccion": "entrantes", "precio": "12,00", "alergenos": [], "es": "Espárragos blancos aliñados o espárragos trigueros verdes a la plancha", "ca": "Espàrrecs blancs o verds a la planxa", "en": "Navarra white asparagus with vinegar or grilled green asparagus", "fr": "Asperges blanches ou asperges vertes grillées"},
    {"seccion": "entrantes", "precio": "10,00", "alergenos": [], "es": "Gírgolas (setas) a la plancha", "ca": "Gírgoles a la planxa", "en": "Grilled oyster mushroom", "fr": "Pleurote en huître grillées"},
    {"seccion": "entrantes", "precio": "9,00", "alergenos": [], "es": "Pimientos de Padrón", "ca": "Pebrots de Padrón", "en": "Padrón peppers", "fr": "Poivrons de Padrón"},
    {"seccion": "entrantes", "precio": "16,90", "alergenos": ["pescado"], "es": "Alcachofas con anchoas", "ca": "Carxofes amb anxoves", "en": "Artichokes with anchovies", "fr": "Artichauts avec anchois"},
    {"seccion": "entrantes", "precio": "33,00", "alergenos": [], "es": "Jamón ibérico de bellota", "ca": "Pernil ibèric de gla", "en": "Acorn-fed Iberian cured ham", "fr": "Jambon ibérique de \"bellota\""},
    {"seccion": "entrantes", "precio": "34,00", "alergenos": ["lacteos"], "es": "Lomo ibérico de bellota", "ca": "Llom ibèric de gla", "en": "Acorn-fed Iberian cured loin", "fr": "Echine de porc ibérique de \"bellota\""},
    {"seccion": "entrantes", "precio": "36,00", "alergenos": ["lacteos"], "es": "Plato de jamón ibérico y queso", "ca": "Plat de pernil ibèric i formatge", "en": "Plate with Iberian cured ham and cheese", "fr": "Assiette de jambon ibérique de \"bellota\" et de fromage"},
    {"seccion": "entrantes", "precio": "37,50", "alergenos": ["lacteos"], "es": "Plato de lomo ibérico y queso", "ca": "Plat de llom ibèric i formatge", "en": "Plate with Iberian cured loin and cheese", "fr": "Assiette d’échine de porc ibérique et de fromage"},
    {"seccion": "entrantes", "precio": "26,00", "alergenos": ["lacteos"], "es": "Plato de embutido variado y queso", "ca": "Plat d’ embotit variat i formatge", "en": "Assorted of Iberian cold sausages & Manchego cheese", "fr": "Assiette de charcuterie et de fromage"},
    {"seccion": "entrantes", "precio": "4,00", "alergenos": ["gluten"], "es": "Pan con tomate", "ca": "Pa amb tomàquet", "en": "Toasted bread with tomato &virgin olive oil", "fr": "Pain à la tomate"},
    {"seccion": "entrantes", "precio": "3,60", "alergenos": ["pescado", "gluten"], "es": "Montadito de anchoas", "ca": "\"Montadito\" d’ anxoves", "en": "Cantábrico anchovy", "fr": "Tapas (CANAPÉ) d’anchois"},
    {"seccion": "entrantes", "precio": "2,30", "alergenos": ["gluten"], "es": "Chistorra de Navarra (Pieza)", "ca": "Xistorra de Navarra (Peça)", "en": "Grilled pork sausage (Piece)", "fr": "Saucisse de navarre (Pièce)"},
    {"seccion": "entrantes", "precio": "2,30", "alergenos": ["gluten", "lacteos", "huevo"], "es": "Croqueta (Pieza)", "ca": "Croqueta (Peça)", "en": "Croquette (Piece)", "fr": "Croquette (Pièce)"},
    {"seccion": "entrantes", "precio": "11,00", "alergenos": ["lacteos"], "es": "Queso Manchego de oveja", "ca": "Formatge Manxec d‘ovella", "en": "\"Manchego\" cheese", "fr": "Fromage \"Manchego\""},
    {"seccion": "entrantes", "precio": "10,00", "alergenos": ["lacteos"], "es": "Chorizo picante de Zamora", "ca": "Xoriço picant de Zamora", "en": "Spicy chorizo", "fr": "Chorizo piquant de Zamora"},
    {"seccion": "entrantes", "precio": "9,00", "alergenos": [], "es": "Fuet de Vic", "ca": "Fuet de Vic", "en": "Hard cured pork sausage", "fr": "Saucisse sèche de Vic"},
    {"seccion": "entrantes", "precio": "11,00", "alergenos": ["pescado"], "es": "Mojama de atún con aceite de oliva", "ca": "Moixama amb oli d‘oliva", "en": "Dried salted tuna with olive oil", "fr": "\"Mojama\" thon séché (SPÉCIALITÉ ANDALOUSE)"},

    // ---------- TOSTADAS ----------
    {"seccion": "tostadas", "precio": "13,00", "alergenos": ["gluten"], "es": "Tostada de jamón ibérico", "ca": "Torrada de pernil ibèric", "en": "Toast with Iberian cured ham", "fr": "Tartine de jambon ibérique"},
    {"seccion": "tostadas", "precio": "15,00", "alergenos": ["gluten", "lacteos"], "es": "Tostada de lomo ibérico (Bellota)", "ca": "Torrada de llom ibèric (Gla)", "en": "Toast with acorn-fed Iberian loin", "fr": "Tartine d’échine de porc ibérique (\"Bellota\")"},
    {"seccion": "tostadas", "precio": "10,50", "alergenos": ["gluten", "lacteos"], "es": "Tostada de queso", "ca": "Torrada de formatge", "en": "Toast with Manchego cheese", "fr": "Tartine de fromage"},
    {"seccion": "tostadas", "precio": "10,00", "alergenos": ["gluten", "lacteos"], "es": "Tostada de chorizo picante", "ca": "Torrada de xoriço picant", "en": "Toast with Iberian spicy chorizo", "fr": "Tartine de chorizo piquant"},
    {"seccion": "tostadas", "precio": "9,00", "alergenos": ["gluten"], "es": "Tostada de fuet", "ca": "Torrada de fuet", "en": "Toast with fuet (Catalan dry cured pork sausage)", "fr": "Tartine de saucisse sèche"},
    {"seccion": "tostadas", "precio": "11,00", "alergenos": ["gluten", "pescado"], "es": "Tostada de bonito, pimientos y olivas", "ca": "Torrada de bonítol, pebrots i olives", "en": "Toast with tuna, roast peppers and olives", "fr": "Tartine de bonite (Thon) et olives"},
    {"seccion": "tostadas", "precio": "11,00", "alergenos": ["gluten"], "es": "Tostada de chistorra", "ca": "Torrada de xistorra", "en": "Toast with grilled pork sausage", "fr": "Tartine de saucisse de navarre"},
    {"seccion": "tostadas", "precio": "12,00", "alergenos": ["gluten", "lacteos"], "es": "Tostada de lomo con queso y pimientos", "ca": "Torrada de llom amb formatge i pebrots", "en": "Toast with grilled pork loin, cheese and red peppers", "fr": "Tartine d’échine de porc, fromage et poivrons confits"},

    // ---------- MARISCOS ----------
    {"seccion": "mariscos", "precio": "36,00", "alergenos": ["crustaceos"], "es": "Gambitas de playa a la plancha", "ca": "Gambetes de platja a la planxa", "en": "Seacoast grilled prawns", "fr": "Crevettes de plage grillées"},
    {"seccion": "mariscos", "precio": "36,00", "alergenos": ["crustaceos"], "es": "Cigalas a la plancha (8 piezas)", "ca": "Escamarlans a la planxa (8 peces)", "en": "Grilled langoustines (8 pieces)", "fr": "Langoustines à la plancha (8 pièces)"},
    {"seccion": "mariscos", "precio": "32,00", "alergenos": ["crustaceos"], "es": "Langostinos a la plancha (8 piezas)", "ca": "Llagostins a la planxa (8 peces)", "en": "Grilled tiger prawns (8 pieces)", "fr": "Grosses crevettes à la plancha (8 pièces)"},
    {"seccion": "mariscos", "precio": "12,00", "alergenos": ["moluscos"], "es": "Navajas a la plancha", "ca": "Navalles a la planxa", "en": "Grilled razor-shell", "fr": "Couteaux à la plancha"},
    {"seccion": "mariscos", "precio": "23,00", "alergenos": ["moluscos"], "es": "Almejas al vino blanco", "ca": "Cloïsses al vi blanc", "en": "Clams in white wine sauce", "fr": "Palourdes dans une sauce au vin blanc"},
    {"seccion": "mariscos", "precio": "10,00", "alergenos": ["moluscos"], "es": "2 Vieiras a la plancha (con gírgolas y Katsuobushi)", "ca": "2 Vieires a la planxa (amb gírgoles i Katsuobushi)", "en": "2 Grilled scallops (with oyster mushrooms & Katsuobushi)", "fr": "2 Saint-jacques grillées (Aux pleurotes et Katsuobushi)"},
    {"seccion": "mariscos", "precio": "20,00", "alergenos": ["crustaceos"], "es": "Gambas al ajillo", "ca": "Gambes a l’all", "en": "Garlic shrimps", "fr": "Gambas à l’ail"},

    // ---------- PESCADOS ----------
    {"seccion": "pescados", "precio": "8,00", "alergenos": ["pescado", "gluten"], "es": "Taco de bacalao con pimientos (Pieza)", "ca": "Tall de bacallà amb pebrots (Peça)", "en": "Pickled loin of cod with peppers & garlic mousseline", "fr": "Cube de morue au poivron (Pièce)"},
    {"seccion": "pescados", "precio": "8,00", "alergenos": ["pescado", "gluten"], "es": "Boquerones a la andaluza", "ca": "Seitons a l’ andalusa", "en": "Anchovies Andalusian style", "fr": "Anchois à l’ andalouse"},
    {"seccion": "pescados", "precio": "19,90", "alergenos": ["moluscos", "gluten"], "es": "Calamares a la andaluza", "ca": "Calamarcets a l’ andalusa", "en": "Squids Andalusian style", "fr": "Calamars à l’andalouse"},
    {"seccion": "pescados", "precio": "22,50", "alergenos": ["pescado"], "es": "Lomo de bonito en aceite con pimientos, tomates y olivas", "ca": "Llom de bonítol amb oli, pebrots tomàquets i olives", "en": "\"\"Bonito\"\" loin in olive oil with red peppers, olives and tomatoes", "fr": "Filet de bonite à l’huile aux poivrons confits et à la tomate et olives"},
    {"seccion": "pescados", "precio": "18,00", "alergenos": ["pescado"], "es": "Lomo de bonito pequeño en aceite con pimientos, tomates y olivas", "ca": "Llom de bonítol petit amb oli pebrots, tomàquets i olives", "en": "\"\"Bonito\"\" loin in olive oil with red peppers, olives and tomatoes", "fr": "Petit filet de bonite à l‘huile et aux poivrons confits et à la tomate et olives"},

    // ---------- CARNES ----------
    {"seccion": "carnes", "precio": "46,00", "alergenos": [], "es": "Solomillo troceado con patatas fritas y pimientos del Padrón (Para compartir)", "ca": "Filet de vedella trossejat amb patates i pebrots de Padrón (Per compartir)", "en": "Grilled veal tenderloin with French fries and Padrón peppers (For sharing 2p)", "fr": "Filet de boeuf coupés en morceaux avec pommes de terres et poivrons de Padrón"},
    {"seccion": "carnes", "precio": "42,00", "alergenos": [], "es": "Presa ibérica con patatas y pimientos de Padrón (Para compartir)", "ca": "Presa ibèrica amb patates i pebrots", "en": "Grilled Iberian pork shoulder with Padrón peppers & French fries (For sharing 2p)", "fr": "Longe de porc ibérique avec pommes de terre et poivrons de Padrón"},
    {"seccion": "carnes", "precio": "23,90", "alergenos": [], "es": "Entrecot con patatas", "ca": "Entrecot amb patates", "en": "Grilled entrecote with French fries", "fr": "Entrecôte et pommes de terres"},
    {"seccion": "carnes", "precio": "10,00", "alergenos": ["gluten"], "es": "Montaditos de foie con confitura de cebolla (2 piezas)", "ca": "\"Montaditos \" de foie amb confitura de ceba (2 peces)", "en": "Foie \"montaditos\" with onion jam (2 pieces)", "fr": "Foie \"montaditos\" à la confiture d’oignons (2 pièces)"},

    // ---------- POSTRES ----------
    {"seccion": "postres", "precio": "7,50", "alergenos": ["frutos_cascara", "huevo", "lacteos", "gluten"], "es": "Tarta al whisky", "ca": "Tarta al whisky", "en": "Ice cream tart in whisky", "fr": "Tarte au whisky"},
    {"seccion": "postres", "precio": "6,00", "alergenos": ["frutos_cascara", "huevo", "lacteos"], "es": "Crocanti", "ca": "Crocanti", "en": "Vanilla & chocolate ice cream with almond brittle", "fr": "Croquant"},
    {"seccion": "postres", "precio": "7,00", "alergenos": ["frutos_cascara", "lacteos", "cacahuete"], "es": "Sorbete de limón", "ca": "Xarrup de llimona", "en": "Lemon sorbet", "fr": "Sorbet au citron"},
    {"seccion": "postres", "precio": "6,00", "alergenos": ["frutos_cascara", "huevo", "lacteos", "gluten"], "es": "Tarta de Santiago", "ca": "Tarta de Santiago", "en": "Cake of St. James (Almond cake)", "fr": "Tarte de saint jacques (aux amandes)"},
    {"seccion": "postres", "precio": "7,50", "alergenos": ["frutos_cascara", "lacteos", "apio"], "es": "Trufas heladas", "ca": "Trufes gelades", "en": "Iced chocolate truffles", "fr": "Truffes glacées"},
    {"seccion": "postres", "precio": "6,00", "alergenos": [], "es": "Helado de la casa", "ca": "Gelats de la casa", "en": "Ice cream", "fr": "Glaces"},

    // ---------- BOCADILLOS ----------
    {"seccion": "bocadillos", "precio": "9,80", "alergenos": ["gluten"], "es": "Jamón ibérico", "ca": "Pernil ibèric", "en": "Iberian cured ham", "fr": "Jambon ibérique"},
    {"seccion": "bocadillos", "precio": "10,50", "alergenos": ["gluten", "lacteos"], "es": "Jamón ibérico con queso", "ca": "Pernil ibèric amb formatge", "en": "Iberian cured ham & Manchego cheese", "fr": "Jambon ibérique et fromage"},
    {"seccion": "bocadillos", "precio": "10,90", "alergenos": ["lacteos"], "es": "Lomo ibérico de bellota", "ca": "Llom ibèric de gla", "en": "Iberian cured loin", "fr": "Echine de porc ibérique de \"bellota\""},
    {"seccion": "bocadillos", "precio": "8,80", "alergenos": ["gluten", "lacteos"], "es": "Queso Manchego (SEMI O SECO)", "ca": "Formatge Manxec (SEMI O SEC)", "en": "Manchego cheese", "fr": "Fromage \"Manchego\" (SEC OU DEMI SEC)"},
    {"seccion": "bocadillos", "precio": "7,80", "alergenos": ["lacteos"], "es": "Chorizo picante de Zamora", "ca": "Xoriço picant de Zamora", "en": "Spicy chorizo", "fr": "Chorizo piquant de Zamora"},
    {"seccion": "bocadillos", "precio": "6,90", "alergenos": [], "es": "Fuet de Vic", "ca": "Fuet de Vic", "en": "Hard cured pork sausage", "fr": "Saucisse sèche de Vic"},
    {"seccion": "bocadillos", "precio": "8,00", "alergenos": ["gluten", "pescado"], "es": "Bonito en aceite o en escabeche", "ca": "Bonítol amb oli o amb escabetx", "en": "\"\"Bonito\"\" in olive oil or pickle", "fr": "Bonite à l’huile ou en escabèche"},
    {"seccion": "bocadillos", "precio": "9,00", "alergenos": ["gluten", "pescado"], "es": "Bonito en aceite (con pimientos y olivas)", "ca": "Bonítol amb oli (amb pebrots i olives)", "en": "\"\"Bonito\"\" in olive oil (peppers and olives)", "fr": "Bonite à l’huile (avec poivrons et olives)"},
    {"seccion": "bocadillos", "precio": "12,00", "alergenos": ["gluten", "pescado"], "es": "Bonito en aceite con anchoas", "ca": "Bonítol amb oli amb anxoves", "en": "\"\"Bonito\"\" in olive oil and anchovies", "fr": "Bonite à l’huile avec anchois"},
    {"seccion": "bocadillos", "precio": "6,50", "alergenos": ["gluten"], "es": "Lomo a la plancha", "ca": "Llom a la planxa", "en": "Grilled pork loin", "fr": "Echine de porc à la plancha"},
    {"seccion": "bocadillos", "precio": "7,30", "alergenos": ["gluten", "lacteos"], "es": "Lomo a la plancha con queso", "ca": "Llom a la planxa amb formatge", "en": "Grilled pork loin with cheese", "fr": "Echine de porc à la plancha et fromage"},
    {"seccion": "bocadillos", "precio": "8,00", "alergenos": ["gluten", "lacteos"], "es": "Lomo a la plancha con queso y pimientos", "ca": "Llom a la planxa amb formatge i pebrots", "en": "Grilled pork loin with cheese and peppers", "fr": "Echine de porc à la plancha au fromage et poivrons confits"},
    {"seccion": "bocadillos", "precio": "7,30", "alergenos": ["gluten"], "es": "Chistorra de Navarra", "ca": "Xistorra de Navarra", "en": "Grilled pork sausage", "fr": "Saucisse de navarre"},
    {"seccion": "bocadillos", "precio": "7,80", "alergenos": ["gluten", "lacteos"], "es": "Chistorra y queso", "ca": "Xistorra i formatge", "en": "Grilled pork sausage with cheese", "fr": "Saucisse de navarre et fromage"},

    // ---------- RIOJA ----------
    {"seccion": "rioja", "precio": "36,00", "alergenos": ["sulfitos"], "es": "Viña Pomal (Reserva)", "ca": "Viña Pomal (Reserva)", "en": "Viña Pomal (Reserva)", "fr": "Viña Pomal (Reserva)"},
    {"seccion": "rioja", "precio": "28,00", "alergenos": ["sulfitos"], "es": "Cerro Añón (Reserva)", "ca": "Cerro Añón (Reserva)", "en": "Cerro Añón (Reserva)", "fr": "Cerro Añón (Reserva)"},
    {"seccion": "rioja", "precio": "26,00", "alergenos": ["sulfitos"], "es": "Señorío de Ondarre (Reserva)", "ca": "Señorío de Ondarre (Reserva)", "en": "Señorío de Ondarre (Reserva)", "fr": "Señorío de Ondarre (Reserva)"},
    {"seccion": "rioja", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Gómez de Segura (Crianza)", "ca": "Gómez de Segura (Criança)", "en": "Gómez de Segura (Crianza)", "fr": "Gómez de Segura (Criança)"},
    {"seccion": "rioja", "precio": "23,00", "alergenos": ["sulfitos"], "es": "Marqués de Riscal (37,5 cl., Reserva)", "ca": "Marqués de Riscal (37,5 cl.)(Reserva)", "en": "Marqués de Riscal (37,5 cl., Reserva)", "fr": "Marqués de Riscal (37,5 cl.)(Reserva)"},

    // ---------- RIBERA ----------
    {"seccion": "ribera", "precio": "28,00", "alergenos": ["sulfitos"], "es": "Ribera del Duero, \"Vaquos\"", "ca": "Ribera del Duero, \"Vaquos\"", "en": "Ribera del Duero, \"Vaquos\"", "fr": "Ribera del Duero, \"Vaquos\""},
    {"seccion": "ribera", "precio": "25,00", "alergenos": ["sulfitos"], "es": "Ribera del Duero, \"Legaris\", 50 cl", "ca": "Ribera del Duero, \"Legaris\",50cl", "en": "Ribera del Duero, \"Legaris\", 50 cl", "fr": "Ribera del Duero, \"Legaris\",50cl"},

    // ---------- CATALANES ----------
    {"seccion": "catalanes", "precio": "36,00", "alergenos": ["sulfitos"], "es": "Priorat \"+ 7\"", "ca": "Priorat \"+ 7\"", "en": "Priorat \"+ 7\"", "fr": "Priorat \"+ 7\""},
    {"seccion": "catalanes", "precio": "33,00", "alergenos": ["sulfitos"], "es": "Raimat Cabernet-Sauvignon", "ca": "Raimat Cabernet-Sauvignon", "en": "Raimat Cabernet-Sauvignon", "fr": "Raimat Cabernet-Sauvignon"},
    {"seccion": "catalanes", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Montsant \"Càtar\"", "ca": "Montsant \"Càtar\"", "en": "Montsant \"Càtar\"", "fr": "Montsant \"Càtar\""},

    // ---------- BLANCOS ----------
    {"seccion": "blancos", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Castell de Montblanc (Chardonnay + Macabeu)", "ca": "Castell de Montblanc (Chardonnay + Macabeu)", "en": "Castell de Montblanc (Chardonnay + Macabeu)", "fr": "Castell de Montblanc (Chardonnay + Macabeu)"},
    {"seccion": "blancos", "precio": "26,00", "alergenos": ["sulfitos"], "es": "Albariño Martín Códax", "ca": "Albariño Martín Códax", "en": "Albariño Martín Códax", "fr": "Albariño Martín Códax"},
    {"seccion": "blancos", "precio": "18,00", "alergenos": ["sulfitos"], "es": "Monopole (Rioja)", "ca": "Monopole (Rioja)", "en": "Monopole (Rioja)", "fr": "Monopole (Rioja)"},
    {"seccion": "blancos", "precio": "16,50", "alergenos": ["sulfitos"], "es": "Blanc Pescador (Perelada)", "ca": "Blanc Pescador (Perelada)", "en": "Blanc Pescador (Perelada)", "fr": "Blanc Pescador (Perelada)"},
    {"seccion": "blancos", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Verdejo de la Casa", "ca": "Verdejo de la Casa", "en": "Verdejo de la Casa", "fr": "Verdejo de la Casa"},
    {"seccion": "blancos", "precio": "22,00", "alergenos": ["sulfitos"], "es": "Mireia (Gewürztraminer y Muscat)", "ca": "Mireia (Gewürztraminer i Muscat)", "en": "Mireia (Gewürztraminer y Muscat)", "fr": "Mireia (Gewürztraminer i Muscat)"},

    // ---------- ROSADOS ----------
    {"seccion": "rosados", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Las Campanas (Navarra)", "ca": "Las Campanas (Navarra)", "en": "Las Campanas (Navarra)", "fr": "Las Campanas (Navarra)"},
    {"seccion": "rosados", "precio": "17,50", "alergenos": ["sulfitos"], "es": "Señorío de Sarría (Navarra)", "ca": "Señorío de Sarría (Navarra)", "en": "Señorío de Sarría (Navarra)", "fr": "Señorío de Sarría (Navarra)"},

    // ---------- CAVAS ----------
    {"seccion": "cavas", "precio": "36,00", "alergenos": ["sulfitos"], "es": "Juvé & Camps, Reserva de la Familia", "ca": "Juvé & Camps, Reserva de la Familia", "en": "Juvé & Camps, Reserva de la Familia", "fr": "Juvé & Camps, Reserva de la Familia"},
    {"seccion": "cavas", "precio": "36,00", "alergenos": ["sulfitos"], "es": "Gramona Imperial", "ca": "Gramona Imperial", "en": "Gramona Imperial", "fr": "Gramona Imperial"},
    {"seccion": "cavas", "precio": "20,00", "alergenos": ["sulfitos"], "es": "Cava Hill Brut", "ca": "Cava Hill Brut", "en": "Cava Hill Brut", "fr": "Cava Hill Brut"},
    {"seccion": "cavas", "precio": "22,00", "alergenos": ["sulfitos"], "es": "Anna Codorníu", "ca": "Anna Codorníu", "en": "Anna Codorníu", "fr": "Anna Codorníu"},
    {"seccion": "cavas", "precio": "68,00", "alergenos": ["sulfitos"], "es": "Champán francés", "ca": "Xampany francès", "en": "Champán francés", "fr": "Xampany francès"},
    {"seccion": "cavas", "precio": "95,00", "alergenos": ["sulfitos"], "es": "Champán francés rosado", "ca": "Xampany francès rosat", "en": "Champán francés rosado", "fr": "Xampany francès rosat"},

    // ---------- COPAS ----------
    {"seccion": "copas", "precio": "4,20", "alergenos": ["sulfitos"], "es": "Copa de Cava (Brut)", "ca": "Copa de Cava (Brut)", "en": "Copa de Cava (Brut)", "fr": "Copa de Cava (Brut)"},
    {"seccion": "copas", "precio": "4,20", "alergenos": ["sulfitos"], "es": "Copa de Vino (Blanco, rosado, tinto)", "ca": "Copa de Vi (Blanc, rosat, negre)", "en": "Copa de Vino (Blanco, rosado, tinto)", "fr": "Copa de Vi (Blanc, rosat, negre)"},
    {"seccion": "copas", "precio": "4,20", "alergenos": ["sulfitos"], "es": "Copa de Sangría", "ca": "Copa de Sangría", "en": "Copa de Sangría", "fr": "Copa de Sangría"},
    {"seccion": "copas", "precio": "4,20", "alergenos": ["sulfitos"], "es": "Copa de Generoso (Manzanilla, Fino, Oloroso, PX)", "ca": "Copa de Vi Generoso (Manzanilla, Fino, Oloroso, PX)", "en": "Copa de Generoso (Manzanilla, Fino, Oloroso, PX)", "fr": "Copa de Vi Generoso (Manzanilla, Fino, Oloroso, PX)"},
    {"seccion": "copas", "precio": "6,50", "alergenos": ["sulfitos"], "es": "Copa de Vino (Amontillado, Palo cortado)", "ca": "Copa de Vi (Amontillado, Palo cortado)", "en": "Copa de Vino (Amontillado, Palo cortado)", "fr": "Copa de Vi (Amontillado, Palo cortado)"}
  ]
};
