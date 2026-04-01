import React from 'react';

// Product example data
const products = [
  { id: 1, name: "100 Robux", price: "Rp 10,360", description: "Top up Robux cepat via group." },
  { id: 2, name: "500 Robux", price: "Rp 49,500", description: "Paket hemat untuk avatar." },
  { id: 3, name: "Game Pass - Special Power", price: "Rp 50,000", description: "Power-up untuk game Roblox." },
  { id: 4, name: "Item - Sword of Power", price: "Rp 100,000", description: "Pedang terbaik di Roblox." },
];

function HomePage() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Surga Robux Buat Kamu!</h1>
          <p>Top up Robux cepat, harga bersahabat, siap menemani kamu bikin avatar makin keren dan dunia Roblox makin epic.</p>
        </div>
      </header>

      <section className="products-section">
        <h2>Temukan Semua Kebutuhan-Mu di Belirbx.com!</h2>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Harga: {product.price}</p>
              <button onClick={() => alert(`Membeli ${product.name}`)}>Beli Sekarang</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;