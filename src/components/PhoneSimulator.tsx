import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Smartphone,
  Heart,
  Search,
  ShoppingBag,
  User,
  ChevronLeft,
  Plus,
  Minus,
  Trash2,
  MapPin,
  CreditCard,
  CheckCircle,
  TrendingUp,
  RefreshCw,
  Sliders,
  ChevronRight,
  Star,
  Check,
  Bell,
  Lock,
  Mail,
  QrCode,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import { PRODUCTS, Product, CATEGORIES, BRANDS } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  size: string;
}

export default function PhoneSimulator() {
  // Simulator State
  const [currentScreen, setCurrentScreen] = useState<
    "splash" | "login" | "app" | "detail" | "checkout" | "success" | "tracking"
  >("splash");
  const [activeTab, setActiveTab] = useState<"home" | "search" | "wishlist" | "cart" | "profile">("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>(
    PRODUCTS.filter((p) => p.isFavorite).map((p) => p.id)
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [trackingStep, setTrackingStep] = useState<number>(2); // Default to "Shipping Progress"
  const [currentUser, setCurrentUser] = useState<string>("salcedozdesing@gmail.com");

  // Detail screen choices
  const [detailColor, setDetailColor] = useState<string>("");
  const [detailSize, setDetailSize] = useState<string>("");
  const [detailQuantity, setDetailQuantity] = useState<number>(1);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  // Checkout info
  const [address, setAddress] = useState("Av. Diagonal Deco, Block B, Flat 4A, San Francisco");
  const [phone, setPhone] = useState("+1 415 901 0233");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple" | "paypal">("card");
  const [cardNumber, setCardNumber] = useState("••••  ••••  ••••  9018");
  const [cardHolder, setCardHolder] = useState("ISABELLA SALCEDO");
  const [cardExpiry, setCardExpiry] = useState("12 / 29");
  const [cardCvv, setCardCvv] = useState("•••");
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  // Splash countdown
  useEffect(() => {
    if (currentScreen === "splash") {
      const timer = setTimeout(() => {
        setCurrentScreen("login");
      }, 2400);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Sync details when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      setDetailColor(selectedProduct.colors[0]);
      setDetailSize(selectedProduct.sizes[0]);
      setDetailQuantity(1);
      setActiveImageIdx(0);
    }
  }, [selectedProduct]);

  // Shopping Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingFee = subtotal === 0 ? 0 : subtotal > 150 ? 0 : 15.0;
  const estimatedTax = subtotal * 0.08;
  const couponDiscount = couponApplied ? subtotal * 0.20 : 0; // 20% off coupon code
  const grandTotal = Math.max(0, subtotal + shippingFee + estimatedTax - couponDiscount);

  // Promo Carousels in Home
  const promoBanners = [
    {
      title: "The Horizon Collection",
      subtitle: "Acoustic minimalism starting at $149",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
      tag: "NEW RELEASE"
    },
    {
      title: "Lumen Velvet Luxury",
      subtitle: "Up to 30% Off Nordic Accents",
      img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=80",
      tag: "SEASON SALE"
    },
    {
      title: "Anatomical Precision",
      subtitle: "The all-new Carbon Runners",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80",
      tag: "FOOTWEAR"
    },
  ];

  const [activeBannerIdx, setActiveBannerIdx] = useState(0);
  useEffect(() => {
    if (currentScreen === "app" && activeTab === "home") {
      const interval = setInterval(() => {
        setActiveBannerIdx((prev) => (prev + 1) % promoBanners.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentScreen, activeTab]);

  // Favorite handler
  const toggleFavorite = (productId: string) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  // Cart Handlers
  const addToCart = (product: Product, color: string, size: string, qty: number) => {
    const existingIdx = cart.findIndex(
      (item) =>
        item.product.id === product.id && item.color === color && item.size === size
    );

    if (existingIdx >= 0) {
      const nextCart = [...cart];
      nextCart[existingIdx].quantity += qty;
      setCart(nextCart);
    } else {
      setCart([...cart, { product, color, size, quantity: qty }]);
    }
  };

  const updateQty = (idx: number, delta: number) => {
    const nextCart = [...cart];
    nextCart[idx].quantity += delta;
    if (nextCart[idx].quantity <= 0) {
      nextCart.splice(idx, 1);
    }
    setCart(nextCart);
  };

  const removeItem = (idx: number) => {
    const nextCart = [...cart];
    nextCart.splice(idx, 1);
    setCart(nextCart);
  };

  // Filter products
  const getFilteredProducts = () => {
    let list = PRODUCTS;
    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return list;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Dynamic Status / Instructions HUD */}
      <div className="mb-4 flex flex-wrap gap-2 justify-center max-w-sm text-center">
        <span className="bg-slate-800 text-xs text-blue-400 font-mono px-2.5 py-1 rounded-full border border-blue-500/20 flex items-center gap-1.5 shadow-sm">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>SIMULATOR STATUS: ACTIVE</span>
        </span>
        <span className="bg-slate-800 text-xs text-amber-400 font-mono px-2.5 py-1 rounded-full border border-amber-500/20 flex items-center gap-1.5 shadow-sm">
          <span>PORT: 3000 (VITE SERVER)</span>
        </span>
      </div>

      {/* High Fidelity Phone Frame */}
      <div className="relative w-[370px] h-[780px] bg-slate-900 rounded-[50px] shadow-2xl border-[10px] border-slate-800 overflow-hidden flex flex-col">
        {/* Notch / Speaker bar */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-800 rounded-full z-50 flex items-center justify-center gap-1">
          <div className="w-12 h-1 bg-slate-700 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-blue-950 rounded-full border border-blue-400/20 relative overflow-hidden flex items-center justify-center">
            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Outer Phone Glass Overlay Reflection */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/10 z-40 rounded-[40px]"></div>

        {/* Screen Content */}
        <div className="flex-1 bg-[#F8FAFC] overflow-y-auto flex flex-col relative text-slate-800 font-sans text-sm select-none">
          {/* ================= SPLASH SCREEN ================= */}
          {currentScreen === "splash" && (
            <div className="absolute inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center text-white animate-fade-in">
              <div className="p-6 bg-white/5 border border-white/10 rounded-full mb-6 animate-pulse">
                <Sparkles className="w-14 h-14 text-blue-500" />
              </div>
              <h1 className="text-3xl font-extrabold tracking-[0.25em] text-white">
                AETHER
              </h1>
              <p className="text-xs text-white/40 tracking-[0.4em] uppercase mt-2">
                Luxury Studio
              </p>
              <div className="absolute bottom-16 flex flex-col items-center gap-2">
                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <button
                  onClick={() => setCurrentScreen("login")}
                  className="mt-4 text-xs font-mono text-white/30 hover:text-white/60 transition"
                >
                  Skip Splash
                </button>
              </div>
            </div>
          )}

          {/* ================= LOGIN SCREEN ================= */}
          {currentScreen === "login" && (
            <div className="absolute inset-0 bg-slate-950 z-40 flex flex-col justify-between p-7 text-white">
              <div className="flex justify-between items-center mt-6">
                <div className="text-xs font-mono text-white/40">SECURE SHELL</div>
                <div className="flex items-center gap-1 text-xs text-blue-400 font-semibold bg-blue-950/40 border border-blue-500/20 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>v3.0 TLS</span>
                </div>
              </div>

              <div className="flex flex-col text-center">
                <div className="mx-auto p-5 bg-white/5 border border-white/10 rounded-3xl mb-6 shadow-xl">
                  <Lock className="w-10 h-10 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Welcome Back</h2>
                <p className="text-xs text-white/50 mt-1 max-w-xs mx-auto">
                  Verify credential stack to initialize luxury shop experience.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono text-white/40">EMAIL ADDRESS</label>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <Mail className="w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      value={currentUser}
                      onChange={(e) => setCurrentUser(e.target.value)}
                      className="bg-transparent text-white text-xs outline-none flex-1 font-mono"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono text-white/40">ACCESS PASSKEY</label>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <Lock className="w-4 h-4 text-white/40" />
                    <input
                      type="password"
                      value="••••••••••••"
                      readOnly
                      className="bg-transparent text-white text-xs outline-none flex-1 font-mono tracking-widest"
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCurrentScreen("app");
                    setActiveTab("home");
                  }}
                  className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition text-white font-bold text-xs py-4 rounded-xl shadow-lg shadow-blue-600/30 tracking-wider uppercase mt-2 flex items-center justify-center gap-2"
                >
                  <span>Authenticate Terminal</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col items-center gap-1.5 mb-2 text-center text-xs text-white/30">
                <p>Designed with luxury standards & responsive state.</p>
                <span className="text-[10px] font-mono text-blue-500/50">ID: salcedozdesing@gmail.com</span>
              </div>
            </div>
          )}

          {/* ================= MAIN INTERFACE WRAPPER ================= */}
          {currentScreen === "app" && (
            <div className="flex-1 flex flex-col h-full relative">
              {/* Top Navigation Bar */}
              <header className="sticky top-0 bg-[#F8FAFC]/90 backdrop-blur-md px-4 py-3 border-b border-slate-100 flex items-center justify-between z-10">
                <div>
                  <span className="text-[9px] tracking-[0.25em] font-semibold text-slate-400 block uppercase">
                    SALCEDO STUDIO
                  </span>
                  <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                    Aether Luxury
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveTab("cart");
                    }}
                    className="relative p-2 text-slate-700 hover:bg-slate-100 rounded-full transition"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {cart.length > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-[9px] text-white font-bold h-4 w-4 rounded-full flex items-center justify-center">
                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                      </span>
                    )}
                  </button>
                  <div className="w-8 h-8 rounded-full border border-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </header>

              {/* Dynamic View Panel */}
              <main className="flex-1 overflow-y-auto pb-24">
                {/* ---------------- Tab: HOME ---------------- */}
                {activeTab === "home" && (
                  <div className="flex flex-col">
                    {/* Animated Search Bar simulation */}
                    <div className="px-4 py-2">
                      <div
                        onClick={() => setActiveTab("search")}
                        className="flex items-center gap-3 bg-white border border-slate-100 px-4 py-3 rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition duration-300"
                      >
                        <Search className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-400 text-xs font-normal">
                          Search exclusive items...
                        </span>
                      </div>
                    </div>

                    {/* Auto-carousel display banner */}
                    <div className="px-4 py-3">
                      <div className="relative h-44 rounded-3xl overflow-hidden shadow-md group">
                        <img
                          src={promoBanners[activeBannerIdx].img}
                          className="w-full h-full object-cover absolute inset-0 filter brightness-75 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 p-5 flex flex-col justify-end">
                          <span className="bg-blue-600 text-white text-[8px] font-bold tracking-widest px-2 py-0.5 rounded-full w-max mb-2">
                            {promoBanners[activeBannerIdx].tag}
                          </span>
                          <h3 className="text-white font-bold text-lg leading-tight">
                            {promoBanners[activeBannerIdx].title}
                          </h3>
                          <p className="text-white/80 text-xs mt-1">
                            {promoBanners[activeBannerIdx].subtitle}
                          </p>
                        </div>
                        {/* Dots */}
                        <div className="absolute bottom-3 right-5 flex gap-1.5">
                          {promoBanners.map((_, idx) => (
                            <div
                              key={idx}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === activeBannerIdx
                                  ? "w-4 bg-white"
                                  : "w-1.5 bg-white/40"
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Categories Horizontal scrolling */}
                    <div className="py-2">
                      <h4 className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Categories
                      </h4>
                      <div className="flex gap-2 overflow-x-auto px-4 scrollbar-none py-1">
                        {["All", ...CATEGORIES].map((cat) => {
                          const isSelected = selectedCategory === cat;
                          return (
                            <button
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-semibold transition ${
                                isSelected
                                  ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                                  : "bg-white border border-slate-100 text-slate-800 hover:bg-slate-50"
                              }`}
                            >
                              {cat}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Flash Sale Banner */}
                    <div className="px-4 py-2.5">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 text-white flex justify-between items-center shadow-lg shadow-orange-500/10">
                        <div>
                          <span className="text-[9px] font-extrabold tracking-widest bg-black/20 px-2 py-0.5 rounded-full uppercase">
                            Flash Sale Live
                          </span>
                          <h4 className="font-bold text-sm mt-1.5">Limited Stock Drops</h4>
                          <p className="text-[10px] text-white/80">Every piece handpicked & certified.</p>
                        </div>
                        <div className="flex gap-1.5 font-mono text-xs font-bold">
                          <span className="bg-black/20 px-2 py-1 rounded-md">02</span>
                          <span className="text-white/70 self-center">:</span>
                          <span className="bg-black/20 px-2 py-1 rounded-md">44</span>
                          <span className="text-white/70 self-center">:</span>
                          <span className="bg-black/20 px-2 py-1 rounded-md">18</span>
                        </div>
                      </div>
                    </div>

                    {/* Products Grid list */}
                    <div className="px-4 py-3">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {selectedCategory} Collection
                        </h4>
                        <span className="text-xs text-slate-400">
                          {getFilteredProducts().length} items
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3.5">
                        {getFilteredProducts().map((product) => {
                          const isFav = favorites.includes(product.id);
                          return (
                            <div
                              key={product.id}
                              onClick={() => {
                                setSelectedProduct(product);
                                setCurrentScreen("detail");
                              }}
                              className="bg-white rounded-3xl p-2.5 border border-slate-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between cursor-pointer"
                            >
                              {/* Product Thumbnail */}
                              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-50">
                                <img
                                  src={product.images[0]}
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute top-2 left-2">
                                  <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                                    -{product.discount}%
                                  </span>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(product.id);
                                  }}
                                  className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-md rounded-full shadow hover:bg-white transition"
                                >
                                  <Heart
                                    className={`w-3.5 h-3.5 ${
                                      isFav ? "fill-red-500 text-red-500" : "text-slate-800"
                                    }`}
                                  />
                                </button>
                              </div>

                              {/* Information */}
                              <div className="mt-3 flex flex-col gap-1">
                                <span className="text-[8px] tracking-wider text-slate-400 font-extrabold uppercase">
                                  {product.brand}
                                </span>
                                <h5 className="font-bold text-xs text-slate-800 truncate">
                                  {product.title}
                                </h5>
                                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                  <span className="font-bold text-slate-700">
                                    {product.rating}
                                  </span>
                                  <span>({product.reviews})</span>
                                </div>
                                <div className="flex items-center gap-1.5 mt-1">
                                  <span className="font-extrabold text-blue-600 text-sm">
                                    ${product.price}
                                  </span>
                                  <span className="text-[10px] text-slate-400 line-through">
                                    ${product.oldPrice}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ---------------- Tab: SEARCH ---------------- */}
                {activeTab === "search" && (
                  <div className="flex flex-col p-4 animate-fade-in">
                    <div className="flex items-center gap-3 bg-white border border-slate-100 px-4 py-3 rounded-2xl shadow-sm mb-4">
                      <Search className="w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search model, color, tags..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent text-xs outline-none flex-1"
                        autoFocus
                      />
                      {searchQuery && (
                        <button onClick={() => setSearchQuery("")}>
                          <Trash2 className="w-4 h-4 text-slate-400 hover:text-slate-600" />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-3 text-xs text-slate-400 px-1">
                      <span>Search results</span>
                      <span>{getFilteredProducts().length} items found</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      {getFilteredProducts().map((product) => {
                        const isFav = favorites.includes(product.id);
                        return (
                          <div
                            key={product.id}
                            onClick={() => {
                              setSelectedProduct(product);
                              setCurrentScreen("detail");
                            }}
                            className="bg-white rounded-3xl p-2.5 border border-slate-100 shadow-sm flex flex-col justify-between cursor-pointer"
                          >
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-50 relative">
                              <img
                                src={product.images[0]}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFavorite(product.id);
                                }}
                                className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full shadow"
                              >
                                <Heart
                                  className={`w-3.5 h-3.5 ${
                                    isFav ? "fill-red-500 text-red-500" : "text-slate-800"
                                  }`}
                                />
                              </button>
                            </div>
                            <div className="mt-2.5 flex flex-col gap-0.5">
                              <span className="text-[8px] font-bold text-slate-400 uppercase">
                                {product.brand}
                              </span>
                              <h5 className="font-bold text-xs truncate">{product.title}</h5>
                              <p className="font-extrabold text-blue-600">${product.price}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ---------------- Tab: WISHLIST ---------------- */}
                {activeTab === "wishlist" && (
                  <div className="flex flex-col p-4 animate-fade-in">
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4 px-1">
                      My Favorites ({favorites.length})
                    </h3>

                    {favorites.length === 0 ? (
                      <div className="text-center py-20 flex flex-col items-center justify-center">
                        <Heart className="w-16 h-16 text-slate-200 mb-4 stroke-1" />
                        <h4 className="font-bold text-slate-700">Your wishlist is empty</h4>
                        <p className="text-xs text-slate-400 mt-1 max-w-xs px-4">
                          Explore the catalogs and bookmark aesthetic items to view them here.
                        </p>
                        <button
                          onClick={() => setActiveTab("home")}
                          className="mt-6 bg-slate-900 text-white text-xs px-5 py-2.5 rounded-xl font-bold"
                        >
                          Explore Store
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3.5">
                        {PRODUCTS.filter((p) => favorites.includes(p.id)).map((product) => (
                          <div
                            key={product.id}
                            onClick={() => {
                              setSelectedProduct(product);
                              setCurrentScreen("detail");
                            }}
                            className="bg-white rounded-3xl p-2.5 border border-slate-100 shadow-sm flex flex-col justify-between cursor-pointer"
                          >
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                              <img
                                src={product.images[0]}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFavorite(product.id);
                                }}
                                className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full shadow"
                              >
                                <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                              </button>
                            </div>
                            <div className="mt-2.5">
                              <span className="text-[8px] text-slate-400 uppercase tracking-wider block font-bold">
                                {product.brand}
                              </span>
                              <h5 className="font-bold text-xs truncate">{product.title}</h5>
                              <p className="font-extrabold text-blue-600">${product.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* ---------------- Tab: CART ---------------- */}
                {activeTab === "cart" && (
                  <div className="flex flex-col p-4 animate-fade-in">
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4 px-1">
                      Shopping Bag
                    </h3>

                    {cart.length === 0 ? (
                      <div className="text-center py-20 flex flex-col items-center justify-center">
                        <ShoppingBag className="w-16 h-16 text-slate-200 mb-4 stroke-1" />
                        <h4 className="font-bold text-slate-700">Shopping bag is empty</h4>
                        <p className="text-xs text-slate-400 mt-1 max-w-xs px-4">
                          Browse items, choose specifications, and secure them in your virtual bag.
                        </p>
                        <button
                          onClick={() => setActiveTab("home")}
                          className="mt-6 bg-slate-900 text-white text-xs px-5 py-2.5 rounded-xl font-bold"
                        >
                          Discover Items
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {/* Cart items list */}
                        {cart.map((item, idx) => (
                          <div
                            key={`${item.product.id}-${item.color}-${item.size}`}
                            className="bg-white p-3 rounded-2xl border border-slate-100 flex gap-3 shadow-sm relative overflow-hidden"
                          >
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-50 flex-shrink-0">
                              <img
                                src={item.product.images[0]}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex-1 flex flex-col justify-between min-w-0">
                              <div>
                                <h5 className="font-bold text-xs truncate text-slate-800">
                                  {item.product.title}
                                </h5>
                                <span className="text-[9px] text-slate-400 font-medium block">
                                  {item.color} • {item.size}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-extrabold text-blue-600">
                                  ${item.product.price}
                                </span>
                                {/* Incrementor */}
                                <div className="flex items-center bg-slate-100 rounded-lg px-1.5 py-0.5 gap-2.5">
                                  <button
                                    onClick={() => updateQty(idx, -1)}
                                    className="text-slate-500 hover:text-slate-800"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="text-xs font-bold text-slate-700">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQty(idx, 1)}
                                    className="text-slate-500 hover:text-slate-800"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* Remove button */}
                            <button
                              onClick={() => removeItem(idx)}
                              className="absolute top-2 right-2 p-1 text-slate-300 hover:text-red-500 transition"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}

                        {/* Promo Code Coupon Panel */}
                        <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm mt-3 flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            Promo / Voucher Coupon
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Type PREMIUM20..."
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                              className="bg-slate-50 text-xs border border-slate-100 rounded-xl px-3 py-2.5 flex-1 outline-none font-mono uppercase"
                            />
                            <button
                              onClick={() => {
                                if (couponCode.toUpperCase() === "PREMIUM20") {
                                  setCouponApplied(true);
                                } else {
                                  alert("Valid code for simulation is PREMIUM20 (20% off)");
                                }
                              }}
                              className="bg-slate-900 text-white font-bold text-xs px-4 rounded-xl hover:bg-slate-800 transition"
                            >
                              Apply
                            </button>
                          </div>
                          {couponApplied && (
                            <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>20% Voucher Applied successfully!</span>
                            </span>
                          )}
                        </div>

                        {/* Calculation Summary Card */}
                        <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm mt-4 flex flex-col gap-2">
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>Subtotal</span>
                            <span className="font-semibold text-slate-800">
                              ${subtotal.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>Est. Luxury Shipping</span>
                            <span className="font-semibold text-slate-800">
                              {shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}
                            </span>
                          </div>
                          {couponApplied && (
                            <div className="flex justify-between text-xs text-emerald-600">
                              <span>Promo discount (20%)</span>
                              <span className="font-bold">-${couponDiscount.toFixed(2)}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>Taxes & Security (8%)</span>
                            <span className="font-semibold text-slate-800">
                              ${estimatedTax.toFixed(2)}
                            </span>
                          </div>
                          <hr className="border-slate-100 my-1" />
                          <div className="flex justify-between text-sm items-center">
                            <span className="font-bold text-slate-900">Estimated Total</span>
                            <span className="text-lg font-extrabold text-blue-600">
                              ${grandTotal.toFixed(2)}
                            </span>
                          </div>
                          <button
                            onClick={() => setCurrentScreen("checkout")}
                            className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition text-white font-bold text-xs py-3.5 rounded-2xl w-full text-center tracking-wider uppercase mt-3 shadow-md"
                          >
                            Proceed to Checkout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ---------------- Tab: PROFILE ---------------- */}
                {activeTab === "profile" && (
                  <div className="flex flex-col animate-fade-in">
                    {/* User profile banner */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-b-[36px] text-white flex flex-col items-center">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200"
                          className="w-20 h-20 rounded-full object-cover border-4 border-white/10"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-0 right-0 bg-orange-500 text-[8px] font-extrabold tracking-wider text-white px-2 py-0.5 rounded-full border-2 border-slate-900">
                          AETHER
                        </span>
                      </div>
                      <h4 className="font-bold text-lg mt-3 text-white">Isabella Salcedo</h4>
                      <p className="text-xs text-white/50">{currentUser}</p>
                      <div className="mt-4 flex gap-6 bg-white/5 border border-white/10 px-6 py-2.5 rounded-2xl">
                        <div className="text-center">
                          <span className="block text-xs font-bold text-white">12</span>
                          <span className="text-[9px] text-white/40 uppercase">Orders</span>
                        </div>
                        <div className="border-r border-white/10"></div>
                        <div className="text-center">
                          <span className="block text-xs font-bold text-white">
                            {favorites.length}
                          </span>
                          <span className="text-[9px] text-white/40 uppercase">Favorites</span>
                        </div>
                        <div className="border-r border-white/10"></div>
                        <div className="text-center">
                          <span className="block text-xs font-bold text-white">1</span>
                          <span className="text-[9px] text-white/40 uppercase">Voucher</span>
                        </div>
                      </div>
                    </div>

                    {/* Options list */}
                    <div className="p-4 flex flex-col gap-2">
                      <div
                        onClick={() => {
                          setCurrentScreen("tracking");
                        }}
                        className="bg-white p-3.5 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm cursor-pointer hover:bg-slate-50 transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-xl text-blue-600">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-xs text-slate-800">
                              Order Live Carrier Tracker
                            </span>
                            <span className="text-[9px] text-slate-400 block">
                              Active: v3.0 parcel carrier updates
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                      </div>

                      <div className="bg-white p-3.5 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm cursor-pointer hover:bg-slate-50 transition">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-100 rounded-xl text-purple-600">
                            <QrCode className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-xs text-slate-800">My Aether Club QR</span>
                            <span className="text-[9px] text-slate-400 block">
                              Scan at airport lounges or elite shops
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                      </div>

                      <div className="bg-white p-3.5 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm cursor-pointer hover:bg-slate-50 transition">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
                            <Sliders className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-xs text-slate-800">Secure Settings</span>
                            <span className="text-[9px] text-slate-400 block">
                              Authentication & identity logs
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                      </div>

                      <button
                        onClick={() => {
                          setCurrentScreen("login");
                          setCart([]);
                        }}
                        className="mt-4 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200/40 text-xs py-3.5 rounded-2xl font-bold tracking-wider uppercase transition flex items-center justify-center gap-2"
                      >
                        <span>Disconnect From Terminal</span>
                      </button>
                    </div>
                  </div>
                )}
              </main>

              {/* Floating bottom navigation bar */}
              <nav className="absolute bottom-4 left-4 right-4 bg-slate-950/95 backdrop-blur-md rounded-3xl p-2.5 flex justify-around border border-white/10 z-20 shadow-xl">
                {[
                  { id: "home", icon: Sparkles, label: "Home" },
                  { id: "search", icon: Search, label: "Search" },
                  { id: "wishlist", icon: Heart, label: "Favorites" },
                  { id: "cart", icon: ShoppingBag, label: "Bag" },
                  { id: "profile", icon: User, label: "Profile" }
                ].map((tab) => {
                  const isCurrent = activeTab === tab.id;
                  const IconComp = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex flex-col items-center justify-center gap-1.5 px-3 py-2 rounded-xl transition ${
                        isCurrent
                          ? "bg-blue-600/20 text-blue-400"
                          : "text-white/40 hover:text-white"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                      <span className="text-[9px] font-bold tracking-wide uppercase">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}

          {/* ================= PRODUCT DETAIL SCREEN ================= */}
          {currentScreen === "detail" && selectedProduct && (
            <div className="flex-1 flex flex-col h-full bg-white relative animate-fade-in">
              {/* Image Hero block with image gallery */}
              <div className="relative h-[320px] bg-slate-100">
                <img
                  src={selectedProduct.images[activeImageIdx]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay actions */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <button
                    onClick={() => setCurrentScreen("app")}
                    className="p-2 bg-white/80 backdrop-blur-md rounded-full shadow hover:bg-white transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-800" />
                  </button>
                  <button
                    onClick={() => toggleFavorite(selectedProduct.id)}
                    className="p-2 bg-white/80 backdrop-blur-md rounded-full shadow hover:bg-white transition"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(selectedProduct.id)
                          ? "fill-red-500 text-red-500"
                          : "text-slate-800"
                      }`}
                    />
                  </button>
                </div>

                {/* Micro thumbnail slider indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`w-10 h-10 rounded-lg overflow-hidden border-2 bg-white ${
                        idx === activeImageIdx ? "border-blue-500 shadow-md" : "border-transparent"
                      }`}
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info Description */}
              <div className="flex-1 overflow-y-auto px-6 py-4 pb-28">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[9px] font-extrabold text-slate-400 tracking-widest uppercase block mb-1">
                      {selectedProduct.brand}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 leading-tight">
                      {selectedProduct.title}
                    </h2>
                  </div>
                  <span className="bg-emerald-50 border border-emerald-200/50 text-emerald-600 text-[9px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>In Stock</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2 text-xs">
                  <div className="flex items-center text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-700">{selectedProduct.rating}</span>
                  <span className="text-slate-400">({selectedProduct.reviews} reviews)</span>
                </div>

                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-2xl font-extrabold text-blue-600">
                    ${selectedProduct.price}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    ${selectedProduct.oldPrice}
                  </span>
                </div>

                <hr className="border-slate-100 my-4" />

                {/* Colors selections */}
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Select color / option
                  </label>
                  <div className="flex gap-2">
                    {selectedProduct.colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setDetailColor(c)}
                        className={`text-xs px-4 py-2 rounded-xl font-medium border transition ${
                          detailColor === c
                            ? "border-blue-600 bg-blue-50 text-blue-700 font-bold"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes selections */}
                <div className="mt-4">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Select size / version
                  </label>
                  <div className="flex gap-2">
                    {selectedProduct.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setDetailSize(s)}
                        className={`text-xs px-4 py-2 rounded-xl font-medium border transition ${
                          detailSize === s
                            ? "border-blue-600 bg-blue-50 text-blue-700 font-bold"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description details */}
                <div className="mt-5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Description
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Specifications table */}
                <div className="mt-5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Specifications
                  </h4>
                  <div className="border border-slate-100 rounded-2xl overflow-hidden text-xs">
                    {Object.entries(selectedProduct.specifications).map(([k, v]) => (
                      <div
                        key={k}
                        className="flex justify-between p-3 border-b border-slate-50 last:border-b-0"
                      >
                        <span className="text-slate-400">{k}</span>
                        <span className="font-semibold text-slate-800">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom bar Add to Cart triggers */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 flex items-center justify-between shadow-lg z-10">
                {/* Quantity Increments */}
                <div className="flex items-center bg-slate-100 rounded-xl px-2.5 py-1 gap-3.5">
                  <button
                    onClick={() => setDetailQuantity((q) => Math.max(1, q - 1))}
                    className="text-slate-500 hover:text-slate-800"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold text-slate-800">{detailQuantity}</span>
                  <button
                    onClick={() => setDetailQuantity((q) => q + 1)}
                    className="text-slate-500 hover:text-slate-800"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(selectedProduct, detailColor, detailSize, detailQuantity);
                    setCurrentScreen("app");
                    setActiveTab("cart");
                  }}
                  className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition text-white font-bold text-xs py-4 px-8 rounded-2xl shadow-md flex-1 text-center uppercase tracking-wider ml-4"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          )}

          {/* ================= CHECKOUT VIEW ================= */}
          {currentScreen === "checkout" && (
            <div className="flex-1 flex flex-col h-full bg-[#F8FAFC] relative animate-fade-in">
              <header className="px-4 py-3 bg-white border-b border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => {
                    setCurrentScreen("app");
                    setActiveTab("cart");
                  }}
                  className="p-1 hover:bg-slate-100 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-800" />
                </button>
                <h3 className="font-bold text-sm">Checkout Details</h3>
              </header>

              <main className="flex-1 overflow-y-auto p-4 pb-20 flex flex-col gap-4">
                {/* Delivery details form */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-1.5 px-1">
                    Delivery Address
                  </label>
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="text-[10px] text-slate-400 block font-bold">ADDRESS</span>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="bg-transparent text-xs text-slate-800 border-none outline-none w-full font-medium"
                        />
                      </div>
                    </div>
                    <hr className="border-slate-50" />
                    <div className="flex items-start gap-2.5">
                      <Smartphone className="w-4 h-4 text-slate-400 mt-0.5" />
                      <div className="flex-1">
                        <span className="text-[10px] text-slate-400 block font-bold">PHONE NO</span>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="bg-transparent text-xs text-slate-800 border-none outline-none w-full font-mono"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment selectors */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-1.5 px-1">
                    Payment Method
                  </label>
                  <div className="flex gap-2">
                    {[
                      { id: "card", label: "Credit Card", icon: CreditCard },
                      { id: "apple", label: "Apple Pay", icon: CheckCircle },
                      { id: "paypal", label: "PayPal", icon: User }
                    ].map((m) => {
                      const isCurrent = paymentMethod === m.id;
                      return (
                        <button
                          key={m.id}
                          onClick={() => setPaymentMethod(m.id as any)}
                          className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl border transition ${
                            isCurrent
                              ? "bg-blue-600 border-blue-600 text-white shadow"
                              : "bg-white border-slate-100 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <m.icon className="w-4 h-4" />
                          <span className="text-[9px] font-bold uppercase">{m.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Premium Credit Card Graphic simulation */}
                {paymentMethod === "card" && (
                  <div className="bg-gradient-to-br from-blue-600 to-slate-900 rounded-3xl p-5 text-white shadow-lg shadow-blue-600/20 relative overflow-hidden flex flex-col justify-between h-44">
                    {/* Ring decals */}
                    <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/5 rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-white/5 rounded-full pointer-events-none"></div>

                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-extrabold tracking-[0.2em] text-white/50">
                        AETHER CLUB ELITE
                      </span>
                      <Smartphone className="w-4 h-4 text-white/50" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-white/40 tracking-wider">
                        CARD NUMBER
                      </span>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="bg-transparent text-sm font-mono tracking-[0.25em] outline-none text-white border-b border-white/10 pb-0.5"
                      />
                    </div>

                    <div className="flex justify-between gap-4 items-end mt-2">
                      <div className="flex-1 flex flex-col">
                        <span className="text-[8px] font-bold text-white/40 uppercase">
                          Cardholder
                        </span>
                        <input
                          type="text"
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                          className="bg-transparent text-[11px] font-bold outline-none text-white w-full truncate uppercase"
                        />
                      </div>
                      <div className="w-14 flex flex-col">
                        <span className="text-[8px] font-bold text-white/40 uppercase">Expiry</span>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="bg-transparent text-[11px] font-mono outline-none text-white w-full"
                        />
                      </div>
                      <div className="w-10 flex flex-col">
                        <span className="text-[8px] font-bold text-white/40 uppercase">CVV</span>
                        <input
                          type="text"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="bg-transparent text-[11px] font-mono outline-none text-white w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Calculation breakdown */}
                <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Calculation Invoice
                  </h4>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Items cost</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Est. Taxes & Duty</span>
                    <span>${estimatedTax.toFixed(2)}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-xs text-emerald-600">
                      <span>Promo Discount (20%)</span>
                      <span>-${couponDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  <hr className="border-slate-50" />
                  <div className="flex justify-between text-xs font-bold text-slate-900">
                    <span>Grand Total</span>
                    <span className="text-blue-600 text-sm">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </main>

              {/* Bottom action button */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4">
                <button
                  onClick={() => {
                    setCart([]);
                    setCurrentScreen("success");
                  }}
                  className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition text-white font-bold text-xs py-4 rounded-2xl w-full text-center tracking-wider uppercase shadow-md shadow-blue-600/10"
                >
                  Complete Secure Order
                </button>
              </div>
            </div>
          )}

          {/* ================= ORDER SUCCESS ================= */}
          {currentScreen === "success" && (
            <div className="absolute inset-0 bg-white z-50 flex flex-col justify-between p-8 text-center animate-fade-in">
              <div></div>
              <div className="flex flex-col items-center">
                <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-full mb-6 text-emerald-500 animate-bounce">
                  <CheckCircle className="w-16 h-16" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Order Placed Securely</h2>
                <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
                  Thank you for your purchase. Master artisans have begun packaging your luxury drop. We have sent the dynamic bill to {currentUser}.
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setCurrentScreen("tracking");
                  }}
                  className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition text-white font-bold text-xs py-4 rounded-2xl w-full text-center tracking-wider uppercase shadow-lg shadow-blue-600/10"
                >
                  Track Dispatch Delivery
                </button>
                <button
                  onClick={() => {
                    setCurrentScreen("app");
                    setActiveTab("home");
                  }}
                  className="text-slate-400 hover:text-slate-600 font-bold text-xs py-3"
                >
                  Back to Storefront
                </button>
              </div>
            </div>
          )}

          {/* ================= LIVE CARRIER TRACKING TIMELINE ================= */}
          {currentScreen === "tracking" && (
            <div className="flex-1 flex flex-col bg-[#F8FAFC] relative animate-fade-in">
              <header className="px-4 py-3 bg-white border-b border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => {
                    setCurrentScreen("app");
                    setActiveTab("profile");
                  }}
                  className="p-1 hover:bg-slate-100 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-800" />
                </button>
                <h3 className="font-bold text-sm">Carrier Tracking</h3>
              </header>

              <main className="flex-1 overflow-y-auto p-5 pb-24 flex flex-col gap-5">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-xs text-slate-800">Shipment Status: In Transit</h5>
                    <p className="text-[10px] text-slate-400">Estimated delivery: July 2, 2026</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Journey Steps
                  </h4>

                  {/* Vertical Timeline */}
                  <div className="flex flex-col gap-6 relative pl-3">
                    {/* Line decorator */}
                    <div className="absolute top-2 bottom-2 left-6 w-[2px] bg-slate-100"></div>

                    {[
                      { step: 0, title: "Order Verified", desc: "Aether team logged transaction secure" },
                      { step: 1, title: "Packed & Certified", desc: "Craftspersons boxed item safely" },
                      { step: 2, title: "In Transit Hub", desc: "Shipping on local cargo distribution" },
                      { step: 3, title: "Out for Delivery", desc: "Courier is arriving today in neighborhood" },
                      { step: 4, title: "Completed & Signed", desc: "Secure drop-off protocol executed" }
                    ].map((step) => {
                      const isCompleted = trackingStep >= step.step;
                      const isCurrent = trackingStep === step.step;
                      return (
                        <div key={step.step} className="flex gap-4 items-start relative z-10">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center border-2 text-[10px] font-bold ${
                              isCompleted
                                ? "bg-emerald-500 border-emerald-500 text-white"
                                : isCurrent
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-white border-slate-200 text-slate-400"
                            }`}
                          >
                            {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.step + 1}
                          </div>
                          <div>
                            <span
                              className={`text-xs font-bold block ${
                                isCompleted ? "text-slate-900" : "text-slate-400"
                              }`}
                            >
                              {step.title}
                            </span>
                            <span className="text-[10px] text-slate-400">{step.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Simulation trigger buttons */}
                <div className="bg-blue-50 border border-blue-100/50 p-4 rounded-2xl text-center">
                  <h6 className="font-bold text-xs text-blue-900 flex items-center justify-center gap-1.5 mb-1">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>CARRIER DEMO TOOLKIT</span>
                  </h6>
                  <p className="text-[10px] text-blue-700 mb-3 leading-tight">
                    Iterate the tracking stages dynamically to verify state.
                  </p>
                  <button
                    onClick={() => {
                      setTrackingStep((prev) => (prev + 1) % 5);
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl"
                  >
                    Cycle Carrier Step
                  </button>
                </div>
              </main>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
