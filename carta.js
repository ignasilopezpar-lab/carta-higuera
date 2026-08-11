/* ===================================================================
   CARTA LA HIGUERA - MOTOR DE PINTADO
   No hace falta tocar este fichero para cambiar precios ni platos.
   Todo el contenido vive en carta-datos.js
   ===================================================================
   Uso dentro de un embed HTML de Wix:

     <div id="carta"></div>
     <script src=".../carta-datos.js"></script>
     <script src=".../carta.js"
             data-idioma="es"          es | ca | en | fr
             data-vista="carta"        carta | alergenos
             data-bloque="comida"      comida | vinos | todo
             data-maqueta="auto"       auto | escritorio | movil
             data-leyenda="no"></script>   si | no
   =================================================================== */

(function () {
  var s = document.currentScript;
  var cfg = {
    idioma:  (s && s.dataset.idioma)  || 'es',
    vista:   (s && s.dataset.vista)   || 'carta',
    bloque:  (s && s.dataset.bloque)  || 'todo',
    maqueta: (s && s.dataset.maqueta) || 'auto',
    leyenda: (s && s.dataset.leyenda) === 'si',
    destino: (s && s.dataset.destino) || '#carta'
  };

  /* --- Reparto de secciones en pantalla -------------------------------
     Esto es lo unico que hay que tocar si algun dia quieres mover una
     seccion de columna o cambiar el orden en movil.                    */
  var MAQUETA = {
    escritorio: {
      comida: { A: ['entrantes', 'tostadas', 'postres'],
                B: ['mariscos', 'pescados', 'carnes', 'bocadillos'] },
      vinos:  { A: ['rioja', 'blancos', 'rosados'],
                B: ['ribera', 'catalanes', 'cavas', 'copas'] }
    },
    movil: {
      comida: ['entrantes', 'tostadas', 'mariscos', 'pescados', 'carnes', 'postres', 'bocadillos'],
      vinos:  ['rioja', 'ribera', 'catalanes', 'blancos', 'rosados', 'cavas', 'copas']
    }
  };

  var ICONOS = {
    gluten:         'https://static.wixstatic.com/shapes/efb83a_6797f561c5624fb9b661748a818d054e.svg',
    crustaceos:     'https://static.wixstatic.com/shapes/efb83a_9a61114c84c04f6d8e8cf205dbef5ff3.svg',
    huevo:          'https://static.wixstatic.com/shapes/efb83a_a8f36bccae42408b8f7e53658a11196a.svg',
    pescado:        'https://static.wixstatic.com/shapes/efb83a_eee37a3890584bc593fce20e5e9657b8.svg',
    cacahuete:      'https://static.wixstatic.com/shapes/efb83a_581247635cb04085899415b1bc54cae4.svg',
    soja:           'https://static.wixstatic.com/media/efb83a_c5a7a986bb9745b8a63abb41da7610ee~mv2.jpg/v1/fill/w_30,h_23,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/efb83a_c5a7a986bb9745b8a63abb41da7610ee~mv2.jpg',
    lacteos:        'https://static.wixstatic.com/shapes/efb83a_8f977c22da2b46df816749cd27f450dd.svg',
    frutos_cascara: 'https://static.wixstatic.com/shapes/efb83a_5c0da905121c494c96a907d53aa15d24.svg',
    apio:           'https://static.wixstatic.com/shapes/efb83a_af96849a9b1b4417bcbb93bd65c78a83.svg',
    sulfitos:       'https://static.wixstatic.com/shapes/efb83a_f9d94ceac8104c94ae12eb353c1a146d.svg',
    moluscos:       'https://static.wixstatic.com/shapes/efb83a_9243d3c7dd59458bb0b289acf2661f8e.svg'
  };

  var NOMBRES = {
    gluten:         { es: 'Gluten', ca: 'Gluten', en: 'Gluten', fr: 'Gluten' },
    crustaceos:     { es: 'Crustáceos', ca: 'Crustacis', en: 'Crustaceans', fr: 'Crustacés' },
    huevo:          { es: 'Huevos', ca: 'Ous', en: 'Eggs', fr: 'Oeufs' },
    pescado:        { es: 'Pescado', ca: 'Peix', en: 'Fish', fr: 'Poisson' },
    cacahuete:      { es: 'Cacahuete', ca: 'Cacauet', en: 'Peanut', fr: 'Cacahouète' },
    soja:           { es: 'Soja', ca: 'Soia', en: 'Soya', fr: 'Soja' },
    lacteos:        { es: 'Lácteos', ca: 'Làctics', en: 'Milk', fr: 'Produits laitiers' },
    frutos_cascara: { es: 'Frutos de cáscara', ca: 'Fruits de closca', en: 'Nuts', fr: 'Fruits à coque' },
    apio:           { es: 'Apio', ca: 'Api', en: 'Celery', fr: 'Céleri' },
    sulfitos:       { es: 'Dióxido de azufre y sulfitos', ca: 'Diòxid de sofre i sulfits',
                      en: 'Sulfur dioxide & sulphites', fr: 'Dioxyde de soufre et sulfites' },
    moluscos:       { es: 'Moluscos', ca: 'Mol·luscs', en: 'Mollusc', fr: 'Mollusques' }
  };

  var TITULOS_POR_DEFECTO = { vinos: { es: 'Bodega', ca: 'Celler', en: 'Cellar', fr: 'Vins' } };

  function tituloBloque(datos, bloque) {
    var t = (datos.titulos || TITULOS_POR_DEFECTO)[bloque] || TITULOS_POR_DEFECTO[bloque];
    if (!t) return '';
    return '<p class="carta-titulo-grande">' + esc(t[cfg.idioma] || t.es) + '</p>';
  }

  var TITULO_LEYENDA = { es: 'Alérgenos', ca: 'Al·lèrgens', en: 'Allergens', fr: 'Allergènes' };

  /* --- Estilos -------------------------------------------------------- */
  function estilos() {
    if (document.getElementById('carta-css')) return;
    var f = document.createElement('link');
    f.rel = 'stylesheet';
    f.href = 'https://db.onlinewebfonts.com/c/2167e76f00e569cc11b3665679996380?family=Futura-Light';
    document.head.appendChild(f);

    var css = document.createElement('style');
    css.id = 'carta-css';
    css.textContent = [
      /* Reproduccion exacta del CSS original de los embeds, con los nombres
         de clase cambiados. No se resetean los margenes de los <p>: el
         espaciado entre platos depende de ellos. */
      '.carta *{font-family:"Futura-Light","Helvetica Neue",Helvetica,Arial,sans-serif}',
      '.carta-cols{display:flex;justify-content:space-between}',
      '.carta-col{width:48%}',
      '.carta .carta-titulo-grande{font-size:35px;font-weight:400;color:#B98D4B;text-align:center}',
      '.carta .carta-titulo{font-size:30px;color:#B98D4B;font-weight:400;margin-bottom:-10px}',
      '.carta-linea{border-top:1px solid grey;height:2px;padding:0;margin:20px auto 0 auto}',
      '.carta-fila{width:100%;display:flex;flex-wrap:nowrap;justify-content:space-between;',
      '  margin-bottom:-14px;align-items:center}',
      '.carta-nombre{max-width:70%}',
      '.carta-puntos{flex-grow:1;border-bottom:1px dotted;margin-bottom:15px;',
      '  margin-right:10px;margin-left:10px}',
      '.carta-nombre p{font-weight:400;text-align:left;font-size:16px}',
      '.carta-puntos p{text-align:center;font-size:16px}',
      '.carta-precio p{font-weight:400;text-align:right;font-size:16px;color:#B98D4B}',
      '.carta-seccion{margin-bottom:30px}',
      /* Futura-Light no incluye el simbolo del euro: se pinta aparte para que
         no lo tome prestado de una fuente mas gruesa */
      '.carta-euro{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;',
      '  font-size:.92em;letter-spacing:.01em;margin-left:.18em}',
      '.carta-alerg{display:inline-flex;gap:4px;vertical-align:middle;margin-left:6px}',
      '.carta-alerg img{height:26px;width:26px;vertical-align:middle}',
      '.carta-leyenda{margin-top:30px;padding-top:14px;border-top:1px solid grey;',
      '  display:flex;flex-wrap:wrap;gap:10px 22px}',
      '.carta-leyenda div{display:flex;align-items:center;gap:7px;font-size:14px}',
      '.carta-leyenda img{height:26px;width:26px}',
      /* maqueta movil forzada desde el embed */
      '.carta-movil .carta-cols{display:block}',
      '.carta-movil .carta-col{width:100%}',
      '.carta-movil .carta-nombre p,.carta-movil .carta-puntos p,.carta-movil .carta-precio p{font-size:14px}',
      /* pantallas estrechas y tablets: una columna y la letra de movil */
      '@media (max-width:820px){',
      '  .carta-cols{display:block}',
      '  .carta-col{width:100%}',
      '  .carta-nombre p,.carta-puntos p,.carta-precio p{font-size:14px}',
      '}'
    ].join('\n');
    document.head.appendChild(css);
  }

  /* --- Utilidades ------------------------------------------------------ */
  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function iconos(lista) {
    if (cfg.vista !== 'alergenos' || !lista || !lista.length) return '';
    var h = lista.map(function (a) {
      if (!ICONOS[a]) return '';
      var n = esc((NOMBRES[a] || {})[cfg.idioma] || a);
      return '<img src="' + ICONOS[a] + '" alt="' + n + '" title="' + n + '">';
    }).join('');
    return h ? '<span class="carta-alerg">' + h + '</span>' : '';
  }

  function fila(p) {
    return '<div class="carta-fila">' +
             '<div class="carta-nombre"><p>' + esc(p[cfg.idioma] || p.es) + iconos(p.alergenos) + '</p></div>' +
             '<div class="carta-puntos"><p></p></div>' +
             '<div class="carta-precio"><p>' + esc(p.precio) + '<span class="carta-euro">€</span></p></div>' +
           '</div>';
  }

  function seccion(clave, datos) {
    var platos = datos.platos.filter(function (p) { return p.seccion === clave; });
    if (!platos.length) return '';
    var nombre = (datos.secciones[clave] || {})[cfg.idioma] || clave;
    return '<div class="carta-seccion">' +
             '<p class="carta-titulo">' + esc(nombre) + '</p>' +
             '<div class="carta-linea"></div>' +
             platos.map(fila).join('') +
           '</div>';
  }

  function leyenda(datos, secciones) {
    var usados = [];
    datos.platos.forEach(function (p) {
      if (secciones.indexOf(p.seccion) < 0) return;
      (p.alergenos || []).forEach(function (a) { if (usados.indexOf(a) < 0) usados.push(a); });
    });
    var items = usados.filter(function (a) { return ICONOS[a]; }).map(function (a) {
      var n = esc((NOMBRES[a] || {})[cfg.idioma] || a);
      return '<div><img src="' + ICONOS[a] + '" alt="' + n + '"><span>' + n + '</span></div>';
    }).join('');
    return '<div class="carta-leyenda">' + items + '</div>';
  }

  function pintar() {
    var datos = window.CARTA_DATOS;
    var caja = document.querySelector(cfg.destino);
    if (!caja) return;
    if (!datos) { caja.innerHTML = '<p>No se ha podido cargar la carta.</p>'; return; }

    var movil = cfg.maqueta === 'movil' ||
                (cfg.maqueta === 'auto' && (window.innerWidth || 1024) <= 820);
    var bloques = cfg.bloque === 'todo' ? ['comida', 'vinos'] : [cfg.bloque];
    var html = '', pintadas = [];

    bloques.forEach(function (b) {
      pintadas = pintadas.concat(MAQUETA.movil[b]);
      html += tituloBloque(datos, b);
      if (movil) {
        html += MAQUETA.movil[b].map(function (k) { return seccion(k, datos); }).join('');
      } else {
        var m = MAQUETA.escritorio[b];
        html += '<div class="carta-cols">' +
                  '<div class="carta-col">' + m.A.map(function (k) { return seccion(k, datos); }).join('') + '</div>' +
                  '<div class="carta-col">' + m.B.map(function (k) { return seccion(k, datos); }).join('') + '</div>' +
                '</div>';
      }
    });

    if (cfg.leyenda) html += leyenda(datos, pintadas);
    caja.className = 'carta' + (movil ? ' carta-movil' : '');
    caja.innerHTML = html;
  }

  estilos();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pintar);
  else pintar();

  var t;
  window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(pintar, 200); });
})();
