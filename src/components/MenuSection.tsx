"use client";

import { useState, useMemo } from "react";
import { Search, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, ListFilter } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  isPopular?: boolean;
}

interface CartItem extends MenuItem {
  quantity: number;
}

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutName, setCheckoutName] = useState("");
  const [isOrdered, setIsOrdered] = useState(false);

  const categories = [
    { id: "all", name: "Semua Menu" },
    { id: "main-course", name: "Main Course" },
    { id: "smoothies-bowl", name: "Smoothies Bowl" },
    { id: "snacks-new", name: "Snacks & New Menu" },
  ];

  const menuItems: MenuItem[] = [
    // Main Course
    {
      id: "mc-1",
      name: "Nasi Bebek Goreng Rempah",
      category: "main-course",
      price: 33000,
      description: "Nasi hangat dengan bebek goreng bumbu rempah melimpah khas Sunny Cafe, lalapan segar, dan sambal mantap.",
      isPopular: true,
    },
    {
      id: "mc-2",
      name: "Nasi Ayam Goreng Kampung",
      category: "main-course",
      price: 33000,
      description: "Ayam goreng kampung bumbu kuning tradisional yang gurih, disajikan dengan nasi hangat dan lalapan.",
    },
    {
      id: "mc-3",
      name: "Spicy Beef Slice",
      category: "main-course",
      price: 28000,
      description: "Irisan daging sapi (beef slice) tipis yang ditumis dengan saus pedas manis gurih bumbu spesial.",
      isPopular: true,
    },
    {
      id: "mc-4",
      name: "Teriyaki Beef Slice",
      category: "main-course",
      price: 28000,
      description: "Tumisan beef slice tipis dengan saus teriyaki gurih manis khas Jepang, disajikan hangat.",
    },
    {
      id: "mc-5",
      name: "Rice Beef Sunny",
      category: "main-course",
      price: 28000,
      description: "Rice bowl beef slice manis gurih dengan topping telur mata sapi ala Sunny Cafe.",
    },
    {
      id: "mc-6",
      name: "Spaghetti Aglio Olio Udang",
      category: "main-course",
      price: 28000,
      description: "Pasta spaghetti klasik ditumis minyak zaitun, bawang putih, cabai kering, dan topping udang segar.",
    },
    {
      id: "mc-7",
      name: "Spaghetti Aglio Olio Chicken",
      category: "main-course",
      price: 26000,
      description: "Pasta spaghetti ditumis minyak zaitun, bawang putih, cabai kering, dan topping suwiran ayam panggang.",
    },
    {
      id: "mc-8",
      name: "Spaghetti Bolognaise",
      category: "main-course",
      price: 26000,
      description: "Pasta dengan siraman saus daging bolognaise khas Italia bertabur keju parut.",
    },
    {
      id: "mc-9",
      name: "Nasi Ayam Geprek",
      category: "main-course",
      price: 25000,
      description: "Nasi dengan ayam goreng tepung renyah yang digeprek dengan sambal bawang pedas nendang.",
    },
    {
      id: "mc-10",
      name: "Nasi Chicken Teriyaki",
      category: "main-course",
      price: 25000,
      description: "Nasi putih hangat dengan potongan dada ayam bumbu teriyaki manis gurih.",
    },
    {
      id: "mc-11",
      name: "Nasi Goreng Hongkong",
      category: "main-course",
      price: 25000,
      description: "Nasi goreng oriental khas Hongkong yang wangi, gurih, bertabur sayuran dan telur.",
    },
    {
      id: "mc-12",
      name: "Nasi Goreng Sunny",
      category: "main-course",
      price: 25000,
      description: "Nasi goreng merah ala Sunny Cafe lengkap dengan telur mata sapi dan kerupuk.",
    },
    {
      id: "mc-13",
      name: "Rice Bowl Honey Spicy",
      category: "main-course",
      price: 23000,
      description: "Nasi ayam potongan renyah bersalut saus madu pedas manis yang lezat.",
    },
    {
      id: "mc-14",
      name: "Rice Bowl Honey Lemon",
      category: "main-course",
      price: 23000,
      description: "Nasi ayam potongan renyul disiram saus madu lemon yang segar dan manis.",
    },
    {
      id: "mc-15",
      name: "Sate Taichan",
      category: "main-course",
      price: 20000,
      description: "Sate ayam dada tanpa kulit dibakar polos dengan siraman sambal taichan pedas asam segar.",
    },
    {
      id: "mc-16",
      name: "Indomie Goreng",
      category: "main-course",
      price: 15000,
      description: "Mie instan goreng favorit sejuta umat dengan telur dan irisan cabe rawit segar.",
    },

    // Smoothies Bowl
    {
      id: "sb-1",
      name: "Dragona Smoothies Bowl",
      category: "smoothies-bowl",
      price: 30000,
      description: "Dragon fruit, strawberry, granola, mint leaves & honey. Lezat, segar & bergizi tinggi.",
      isPopular: true,
    },
    {
      id: "sb-2",
      name: "Choco Banana Smoothies Bowl",
      category: "smoothies-bowl",
      price: 30000,
      description: "Chocolate smoothie, banana, strawberry, granola & chia seeds. Kombinasi manis dan sehat.",
    },
    {
      id: "sb-3",
      name: "Mango Pineapple Smoothies Bowl",
      category: "smoothies-bowl",
      price: 30000,
      description: "Mango, pineapple, strawberry, granola, chia seeds & coconut flakes. Rasa tropis menyegarkan.",
      isPopular: true,
    },

    // Snacks & New Menu
    {
      id: "sn-1",
      name: "Sunny French Fries",
      category: "snacks-new",
      price: 23000,
      description: "Kentang goreng renyah bumbu spesial Sunny Cafe disajikan dengan cocolan saus pilihan.",
    },
    {
      id: "sn-2",
      name: "Mix Plater A",
      category: "snacks-new",
      price: 28000,
      description: "Aneka gorengan favorit (kentang, sosis, nugget) dalam satu piring untuk camilan bersama.",
      isPopular: true,
    },
    {
      id: "sn-3",
      name: "Siomay Bandung",
      category: "snacks-new",
      price: 22000,
      description: "Siomay lembut khas Bandung dengan bumbu kacang gurih manis pedas sedang.",
    },
    {
      id: "sn-4",
      name: "Kids Meal A/B/C",
      category: "snacks-new",
      price: 28000,
      description: "Menu lengkap, lezat, sehat dan bergizi ramah untuk anak-anak dengan porsi pas.",
    },
    {
      id: "sn-5",
      name: "Nasi Bebek Goreng (Portion)",
      category: "snacks-new",
      price: 33000,
      description: "Porsi bebek goreng renyah gurih dengan sambal bajak pedas nikmat khas Jombang.",
    },
    {
      id: "sn-6",
      name: "Rice Beef Spicy (Premium)",
      category: "snacks-new",
      price: 28000,
      description: "Nasi dengan beef spicy pedas gurih menggoda selera makan Anda.",
    },
  ];

  // Filtering Menu
  const filteredMenuItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Cart Functions
  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  // Format IDR Price
  const formatPrice = (val: number) => {
    return "Rp " + val.toLocaleString("id-ID");
  };

  // WhatsApp Order Submission
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 || !checkoutName.trim()) return;

    let message = `Halo Sunny Cafe Jombang, saya ingin memesan menu takeaway atas nama *${checkoutName}*:\n\n`;
    cart.forEach((item) => {
      message += `- *${item.name}* x ${item.quantity} = ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `\n*Total Estimasi:* ${formatPrice(cartTotal)}\n`;
    message += `Mohon konfirmasi pesanan dan estimasi waktu penyiapan. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282231144930?text=${encoded}`, "_blank");

    setIsOrdered(true);
    setTimeout(() => {
      setIsOrdered(false);
      setCart([]);
      setCheckoutName("");
    }, 3000);
  };

  return (
    <section 
      id="menu" 
      className="bg-white pt-32 pb-16 md:pt-40 md:pb-24"
      aria-labelledby="menu-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-pink uppercase">
            Sajian Makanan & Minuman
          </span>
          <h2 
            id="menu-title" 
            className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3"
          >
            Katalog Menu Interaktif
          </h2>
          <p className="text-base text-brand-dark/70 mt-4">
            Pilih menu favorit Anda secara langsung. Gunakan filter untuk memilih kategori, atau buat pesanan simulasi Anda untuk langsung dikirim ke WhatsApp admin.
          </p>
        </div>

        {/* Main Grid: Menu Catalog & Interactive Cart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Catalog Columns (Col-8) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              
              {/* Category buttons list */}
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kategori Menu">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    role="tab"
                    aria-selected={selectedCategory === cat.id}
                    className={`rounded px-4 py-2 text-xs font-semibold tracking-wider transition-colors uppercase ${
                      selectedCategory === cat.id
                        ? "bg-brand-pink text-white"
                        : "bg-brand-pink-bg text-brand-pink border border-brand-pink/15 hover:bg-brand-pink/10"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="relative">
                <label htmlFor="menu-search" className="sr-only">Cari Menu</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-brand-dark/40" />
                </div>
                <input
                  id="menu-search"
                  type="text"
                  placeholder="Cari makanan/minuman..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-60 pl-9 pr-4 py-2 text-sm border border-brand-dark/10 rounded focus:border-brand-pink focus:ring-0 focus:outline-none bg-white text-brand-dark"
                />
              </div>
            </div>

            {/* Menu List */}
            {filteredMenuItems.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-brand-pink/20 rounded-xl bg-brand-pink-bg">
                <ListFilter className="h-8 w-8 text-brand-pink mx-auto mb-3" />
                <p className="text-sm font-bold text-brand-dark">Menu tidak ditemukan</p>
                <p className="text-xs text-brand-dark/60 mt-1">Coba kata kunci lain atau pilih kategori yang berbeda.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMenuItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="p-6 rounded-xl border border-brand-dark/5 bg-white hover:border-brand-pink transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-bold text-brand-dark text-lg">{item.name}</h3>
                        <span className="font-mono font-bold text-brand-pink shrink-0">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      
                      {item.isPopular && (
                        <span className="inline-flex max-w-fit rounded bg-brand-pink/10 px-2 py-0.5 text-[10px] font-bold text-brand-pink uppercase">
                          Menu Andalan
                        </span>
                      )}

                      <p className="text-xs text-brand-dark/60 leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      className="mt-4 flex items-center justify-center gap-2 rounded border border-brand-pink px-4 py-2 text-xs font-semibold text-brand-pink hover:bg-brand-pink hover:text-white transition-colors duration-200"
                      aria-label={`Tambah ${item.name} ke pesanan`}
                    >
                      <Plus className="h-3 w-3" />
                      <span>Tambah ke Pesanan</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Sidebar Column (Col-4) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="border border-brand-pink/30 bg-brand-pink-bg rounded-2xl p-6 flex flex-col gap-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-brand-pink/20 pb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-brand-pink" aria-hidden="true" />
                  <h3 className="font-extrabold text-brand-dark text-lg">Simulasi Pesanan</h3>
                </div>
                <span className="font-mono text-xs font-bold bg-brand-pink text-white rounded-full px-2 py-0.5">
                  {cart.reduce((t, i) => t + i.quantity, 0)} Item
                </span>
              </div>

              {/* Cart List */}
              {cart.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-sm text-brand-dark/50">Keranjang simulasi kosong.</p>
                  <p className="text-xs text-brand-dark/40 mt-1">Klik tombol &apos;Tambah ke Pesanan&apos; pada menu di sebelah kiri.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-start justify-between gap-3 text-left">
                      <div className="flex flex-col">
                        <span className="font-bold text-brand-dark text-sm leading-tight">{item.name}</span>
                        <span className="font-mono text-xs text-brand-pink font-semibold mt-1">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 rounded bg-white border border-brand-pink/20 text-brand-dark hover:border-brand-pink"
                          aria-label={`Kurangi jumlah ${item.name}`}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-mono text-xs font-bold text-brand-dark min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded bg-white border border-brand-pink/20 text-brand-dark hover:border-brand-pink"
                          aria-label={`Tambah jumlah ${item.name}`}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-brand-dark/40 hover:text-brand-pink"
                          aria-label={`Hapus ${item.name}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Total Calculation */}
              <div className="border-t border-brand-pink/25 pt-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-brand-dark/70">Total Estimasi:</span>
                  <span className="font-mono text-lg font-black text-brand-pink">
                    {formatPrice(cartTotal)}
                  </span>
                </div>

                {cart.length > 0 && (
                  <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-3">
                    <div>
                      <label htmlFor="name-input" className="sr-only">Nama Anda</label>
                      <input
                        id="name-input"
                        type="text"
                        placeholder="Masukkan nama Anda..."
                        required
                        value={checkoutName}
                        onChange={(e) => setCheckoutName(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-brand-pink/30 rounded focus:border-brand-pink focus:ring-0 focus:outline-none bg-white text-brand-dark"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isOrdered}
                      className="w-full rounded bg-brand-pink py-3 text-center text-xs font-bold tracking-wider text-white uppercase hover:bg-brand-pink-light transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      {isOrdered ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Mengarahkan ke WA...</span>
                        </>
                      ) : (
                        <span>Pesan Takeaway via WA</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
