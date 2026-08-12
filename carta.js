/* ===================================================================
   CARTA LA HIGUERA - MOTOR DE PINTADO
   VERSION 2026-08-12-g
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
  window.CARTA_MOTOR_VERSION = '2026-08-12-g';
  var s = document.currentScript;
  var cfg = {
    idioma:  (s && s.dataset.idioma)  || 'es',
    vista:   (s && s.dataset.vista)   || 'carta',
    bloque:  (s && s.dataset.bloque)  || 'todo',
    maqueta: (s && s.dataset.maqueta) || 'auto',
    leyenda: (s && s.dataset.leyenda) === 'si',
    medir:   (s && s.dataset.medir)   === 'si',
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
    soja:           'https://static.wixstatic.com/shapes/efb83a_af96849a9b1b4417bcbb93bd65c78a83.svg',
    lacteos:        'https://static.wixstatic.com/shapes/efb83a_8f977c22da2b46df816749cd27f450dd.svg',
    frutos_cascara: 'https://static.wixstatic.com/shapes/efb83a_5c0da905121c494c96a907d53aa15d24.svg',
    sulfitos:       'https://static.wixstatic.com/shapes/efb83a_f9d94ceac8104c94ae12eb353c1a146d.svg',
    moluscos:       'https://static.wixstatic.com/shapes/efb83a_9243d3c7dd59458bb0b289acf2661f8e.svg'
  };

  var NOMBRES = {
    gluten:         { es: 'Gluten', ca: 'Gluten', en: 'Gluten', fr: 'Gluten' },
    crustaceos:     { es: 'Crustáceos', ca: 'Crustacis', en: 'Crustaceans', fr: 'Crustacés' },
    huevo:          { es: 'Huevo', ca: 'Ous', en: 'Eggs', fr: 'Œufs' },
    pescado:        { es: 'Pescado', ca: 'Peix', en: 'Fish', fr: 'Poisson' },
    cacahuete:      { es: 'Cacahuetes', ca: 'Cacauets', en: 'Peanuts', fr: 'Cacahuètes' },
    soja:           { es: 'Soja', ca: 'Soja', en: 'Soy', fr: 'Soja' },
    lacteos:        { es: 'Lactosa', ca: 'Lactosa', en: 'Dairy', fr: 'Produits laitiers' },
    frutos_cascara: { es: 'Frutos de cáscara', ca: 'Fruita de closca', en: 'Nuts', fr: 'Fruits à coque' },
    sulfitos:       { es: 'Dióxido de azufre y sulfitos', ca: 'Diòxid de sofre i sulfits',
                      en: 'Sulfur dioxide and sulfites', fr: 'Dioxyde de soufre et sulfites' },
    moluscos:       { es: 'Moluscos', ca: 'Mol·luscs', en: 'Molluscs', fr: 'Mollusques' }
  };

  var TAM = { lacteos: 25, pescado: 35, frutos_cascara: 35 };   // el resto, 30px

  /* Reparto de la leyenda tal y como estaba en la web: dos grupos de
     dos columnas. En escritorio van uno al lado del otro; en movil,
     uno debajo del otro. */
  var LEYENDA = [
    [['gluten', 'huevo'], ['pescado', 'frutos_cascara'], ['soja']],
    [['lacteos', 'cacahuete'], ['crustaceos', 'sulfitos'], ['moluscos']]
  ];

  var NOMBRES_CORTOS = {
    sulfitos: { es: 'Sulfitos', ca: 'Sulfits', en: 'Sulfites', fr: 'Sulfites' }
  };

  var TITULOS_POR_DEFECTO = { vinos: { es: 'Bodega', ca: 'Celler', en: 'Cellar', fr: 'Vins' } };

  function tituloBloque(datos, bloque) {
    var t = (datos.titulos || TITULOS_POR_DEFECTO)[bloque] || TITULOS_POR_DEFECTO[bloque];
    if (!t) return '';
    /* el estilo va tambien en linea para que ningun CSS externo lo pise */
    return '<p class="carta-titulo-grande" style="text-align:center;width:100%;' +
           'font-size:35px;font-weight:400;color:#B98D4B">' + esc(t[cfg.idioma] || t.es) + '</p>';
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
      /* en la vista de alergenos, los iconos van en su propia columna al lado
         del nombre, centrados, para que no caigan sueltos a la linea de abajo */
      '.carta-alergenos .carta-nombre{display:flex;align-items:center;gap:8px}',
      '.carta-alerg{display:flex;gap:5px;flex:0 0 auto;align-items:center}',
      '.carta-alerg img{height:25px;width:25px}',
      '.carta-movil .carta-alerg img{height:22px;width:22px}',
      '@media (max-width:820px){.carta-alerg img{height:22px;width:22px}}',
      '.carta-leyenda{margin-top:34px}',
      '.carta-leyenda-grupos{display:flex}',
      '.carta-leyenda-grupo{width:50%}',
      '.carta-leyenda-fila{width:100%;display:flex;justify-content:center}',
      '.carta-leyenda-item{width:100%;display:flex;flex-wrap:wrap;align-items:center;gap:7px}',
      '.carta-leyenda-texto{font-size:16px;font-weight:400}',
      '.carta-movil .carta-leyenda-grupos{display:block}',
      '.carta-movil .carta-leyenda-grupo{width:100%}',
      '.carta-movil .carta-leyenda-item{width:50%}',
      '.carta-movil .carta-leyenda-texto{font-size:14px}',
      '@media (max-width:820px){',
      '  .carta-leyenda-grupos{display:block}',
      '  .carta-leyenda-grupo{width:100%}',
      '  .carta-leyenda-item{width:50%}',
      '  .carta-leyenda-texto{font-size:14px}',
      '}',
      /* maqueta movil forzada desde el embed */
      '.carta-movil .carta-cols{display:block}',
      '.carta-movil .carta-col{width:100%}',
      '.carta-movil .carta-nombre p,.carta-movil .carta-puntos p,.carta-movil .carta-precio p{font-size:14px}',
      '.carta-movil .carta-nombre{max-width:76%}',
      '.carta-movil .carta-puntos{margin-right:6px;margin-left:6px;min-width:14px}',
      /* pantallas estrechas y tablets: una columna y la letra de movil */
      '@media (max-width:820px){',
      '  .carta-cols{display:block}',
      '  .carta-col{width:100%}',
      '  .carta-nombre p,.carta-puntos p,.carta-precio p{font-size:14px}',
      '  .carta-nombre{max-width:76%}',
      '  .carta-puntos{margin-right:6px;margin-left:6px;min-width:14px}',
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
             '<div class="carta-nombre"><p>' + esc(p[cfg.idioma] || p.es) + '</p>' + iconos(p.alergenos) + '</div>' +
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

  function leyenda(movil) {
    var html = '<div class="carta-leyenda"><div class="carta-leyenda-grupos">';
    LEYENDA.forEach(function (grupo) {
      html += '<div class="carta-leyenda-grupo">';
      grupo.forEach(function (fila) {
        html += '<div class="carta-leyenda-fila">';
        fila.forEach(function (a) {
          var corto = movil && NOMBRES_CORTOS[a];
          var n = esc(((corto || NOMBRES[a]) || {})[cfg.idioma] || a);
          var px = TAM[a] || 30;
          html += '<div class="carta-leyenda-item">' +
                    '<img src="' + ICONOS[a] + '" alt="' + n + '" ' +
                         'height="' + px + '" width="' + px + '">' +
                    '<p class="carta-leyenda-texto">' + n + '</p>' +
                  '</div>';
        });
        if (fila.length === 1) html += '<div class="carta-leyenda-item"></div>';
        html += '</div>';
      });
      html += '</div>';
    });
    return html + '</div></div>';
  }

  function pintar() {
    var datos = window.CARTA_DATOS;
    var caja = document.querySelector(cfg.destino);
    if (!caja) return;
    if (!datos) { caja.innerHTML = '<p>No se ha podido cargar la carta.</p>'; return; }

    var movil = cfg.maqueta === 'movil' ||
                (cfg.maqueta === 'auto' && (window.innerWidth || 1024) <= 820);
    var bloques = cfg.bloque === 'todo' ? ['comida', 'vinos'] : [cfg.bloque];
    var html = '';

    bloques.forEach(function (b) {
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

    if (cfg.leyenda) html += leyenda(movil);
    caja.className = 'carta' + (movil ? ' carta-movil' : '') +
                     (cfg.vista === 'alergenos' ? ' carta-alergenos' : '');
    caja.innerHTML = html;
    setTimeout(medir, 60);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(medir, 60); });
  }

  /* Modo medicion: pinta en pantalla la altura real que ocupa el contenido,
     para poder ajustar la altura del componente en el editor de Wix. */
  function medir() {
    if (!cfg.medir) return;
    var alto = Math.ceil(document.documentElement.scrollHeight);
    var ancho = Math.ceil(window.innerWidth);
    var caja = document.getElementById('carta-medida') || document.createElement('div');
    caja.id = 'carta-medida';
    caja.setAttribute('style', 'position:fixed;left:8px;bottom:8px;z-index:9999;' +
      'background:#B98D4B;color:#fff;font:14px/1.3 Helvetica,Arial,sans-serif;' +
      'padding:8px 12px;border-radius:6px');
    caja.textContent = 'alto ' + alto + ' px · ancho ' + ancho + ' px';
    if (!caja.parentNode) document.body.appendChild(caja);
  }

  estilos();
  try { console.log('carta.js version ' + window.CARTA_MOTOR_VERSION); } catch (e) {}
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pintar);
  else pintar();

  var t;
  window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(pintar, 200); });
})();
