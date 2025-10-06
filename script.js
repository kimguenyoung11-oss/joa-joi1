
const PRODUCTS = [{"id": "jj-aurora", "name": "Aurora Tote", "price": 139.0, "color": "Caramello", "material": "Pelle vegana", "desc": "Tote minimal con manici morbidi e interno capiente.", "bg": [[245, 232, 220], [214, 193, 173]], "bag": [45, 38, 33]}, {"id": "jj-luna", "name": "Luna Crossbody", "price": 119.0, "color": "Avorio", "material": "Pelle martellata", "desc": "Tracolla compatta con patta magnetica e tasca interna.", "bg": [[245, 245, 240], [218, 221, 213]], "bag": [55, 55, 55]}, {"id": "jj-aria", "name": "Aria Shoulder", "price": 129.0, "color": "Nero", "material": "Pelle liscia", "desc": "Borsa a spalla con silhouette morbida e profilo pulito.", "bg": [[240, 240, 245], [208, 210, 225]], "bag": [25, 25, 30]}, {"id": "jj-sole", "name": "Sole Mini", "price": 99.0, "color": "Miele", "material": "Pelle saffiano", "desc": "Mini bag con tracolla removibile, perfetta per la sera.", "bg": [[248, 236, 214], [230, 202, 157]], "bag": [60, 48, 40]}, {"id": "jj-eden", "name": "Eden Hobo", "price": 149.0, "color": "Oliva", "material": "Pelle martellata", "desc": "Hobo morbida con zip superiore e tasche organizzate.", "bg": [[235, 240, 233], [201, 214, 198]], "bag": [42, 50, 42]}, {"id": "jj-muse", "name": "Muse Satchel", "price": 159.0, "color": "Bordeaux", "material": "Pelle pieno fiore", "desc": "Satchel strutturata con manico e tracolla regolabile.", "bg": [[242, 232, 236], [211, 186, 198]], "bag": [70, 30, 40]}, {"id": "jj-nuvola", "name": "Nuvola Bucket", "price": 129.0, "color": "Crema", "material": "Pelle scamosciata", "desc": "Bucket bag con chiusura a coulisse e base rigida.", "bg": [[246, 246, 244], [223, 221, 214]], "bag": [80, 75, 70]}, {"id": "jj-via", "name": "Via Backpack", "price": 169.0, "color": "Cuoio", "material": "Pelle pieno fiore", "desc": "Zaino slim con tasca frontale e scomparto laptop 13”.", "bg": [[241, 233, 222], [214, 196, 174]], "bag": [58, 45, 35]}];

function formatPrice(p){ return "€ " + p.toFixed(2).replace('.', ','); }

function cardTemplate(p){ 
  return `
  <div class="card">
    <img src="assets/images/${p.id}.jpg" alt="${p.name}">
    <div class="meta">
      <div>
        <div><strong>${p.name}</strong></div>
        <div class="small">${p.material} · ${p.color}</div>
      </div>
      <div class="price">${formatPrice(p.price)}</div>
    </div>
    <div class="actions" style="margin-top:8px">
      <a class="btn" href="product.html?id=${p.id}">Dettagli</a>
      <a class="btn btn-outline" href="https://wa.me/390000000000?text=Ciao%20Joa%20%26%20Joi%2C%20vorrei%20ordinare%20la%20borsa%20${encodeURIComponent(p.name)}">Ordina su WhatsApp</a>
    </div>
  </div>`;
}

function renderGrid(elId, list){ 
  const el = document.getElementById(elId);
  el.innerHTML = list.map(cardTemplate).join('');
}

function getParam(name){ 
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function renderProduct(){
  const id = getParam('id') || '';
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  const el = document.getElementById('product');
  el.innerHTML = `
    <div><img src="assets/images/${p.id}.jpg" alt="${p.name}"></div>
    <div>
      <h1>${p.name}</h1>
      <div class="small">${p.material} · ${p.color}</div>
      <h3 style="margin-top:6px">${formatPrice(p.price)}</h3>
      <p style="margin-top:10px">${p.desc}</p>
      <div class="actions">
        <a class="btn" href="https://wa.me/390000000000?text=Ciao%20Joa%20%26%20Joi%2C%20vorrei%20ordinare%20la%20borsa%20${encodeURIComponent(p.name)}">Ordina su WhatsApp</a>
        <a class="btn btn-outline" href="shop.html">Torna allo shop</a>
      </div>
      <div class="small" style="margin-top:18px">* Pagamenti online disponibili nella versione WordPress con WooCommerce.</div>
    </div>`;
}
