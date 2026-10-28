export const FLUTTER_MAIN_DART_CODE = `import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:math';

void main() {
  runApp(const PremiumECommerceApp());
}

class PremiumECommerceApp extends StatelessWidget {
  const PremiumECommerceApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aether Luxury Studio',
      debugShowCheckedModeBanner = false,
      theme: ThemeData(
        useMaterial3: true,
        scaffoldBackgroundColor: const Color(0xFFF8FAFC),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF2563EB),
          primary: const Color(0xFF2563EB),
          secondary: const Color(0xFFF97316),
          tertiary: const Color(0xFF06B6D4),
          surface: Colors.white,
          background: const Color(0xFFF8FAFC),
        ),
        fontFamily: 'Inter',
        cardTheme: CardTheme(
          color: Colors.white,
          elevation: 0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(24),
          ),
        ),
      ),
      home: const SplashScreen(),
    );
  }
}

// ==========================================
// MODELS
// ==========================================

class Product {
  final String id;
  final String title;
  final String brand;
  final String category;
  final double price;
  final double oldPrice;
  final int discount;
  final double rating;
  final int reviews;
  final int stock;
  final int soldCount;
  bool isFavorite;
  final String description;
  final Map<String, String> specifications;
  final List<String> images;
  final List<String> colors;
  final List<String> sizes;

  Product({
    required this.id,
    required this.title,
    required this.brand,
    required this.category,
    required this.price,
    required this.oldPrice,
    required this.discount,
    required this.rating,
    required this.reviews,
    required this.stock,
    required this.soldCount,
    this.isFavorite = false,
    required this.description,
    required this.specifications,
    required this.images,
    required this.colors,
    required this.sizes,
  });
}

class CartItem {
  final Product product;
  int quantity;
  String selectedColor;
  String selectedSize;

  CartItem({
    required this.product,
    this.quantity = 1,
    required this.selectedColor,
    required this.selectedSize,
  });
}

// ==========================================
// APP STATE (ChangeNotifier for State Management)
// ==========================================

class AppState extends ChangeNotifier {
  static final AppState _instance = AppState._internal();
  factory AppState() => _instance;
  AppState._internal() {
    _initializeProducts();
  }

  final List<Product> _products = [];
  final List<CartItem> _cart = [];
  final List<Product> _wishlist = [];
  int _activeNavIndex = 0;
  String _searchQuery = "";
  String _selectedCategory = "All";
  String? _currentUser;
  bool _isLoggedIn = false;
  
  // Tracking mock info
  int _currentTrackingStep = 2; // Default to Shipping state for demonstration

  List<Product> get products => _products;
  List<CartItem> get cart => _cart;
  List<Product> get wishlist => _products.where((p) => p.isFavorite).toList();
  int get activeNavIndex => _activeNavIndex;
  String get searchQuery => _searchQuery;
  String get selectedCategory => _selectedCategory;
  String? get currentUser => _currentUser;
  bool get isLoggedIn => _isLoggedIn;
  int get currentTrackingStep => _currentTrackingStep;

  set activeNavIndex(int index) {
    _activeNavIndex = index;
    notifyListeners();
  }

  set searchQuery(String query) {
    _searchQuery = query;
    notifyListeners();
  }

  set selectedCategory(String cat) {
    _selectedCategory = cat;
    notifyListeners();
  }

  void login(String username) {
    _currentUser = username;
    _isLoggedIn = true;
    notifyListeners();
  }

  void logout() {
    _currentUser = null;
    _isLoggedIn = false;
    _cart.clear();
    notifyListeners();
  }

  void toggleFavorite(Product product) {
    product.isFavorite = !product.isFavorite;
    notifyListeners();
  }

  void addToCart(Product product, String color, String size) {
    final existingIndex = _cart.indexWhere((item) =>
        item.product.id == product.id &&
        item.selectedColor == color &&
        item.selectedSize == size);

    if (existingIndex >= 0) {
      _cart[existingIndex].quantity++;
    } else {
      _cart.add(CartItem(
        product: product,
        selectedColor: color,
        selectedSize: size,
      ));
    }
    notifyListeners();
  }

  void updateQuantity(CartItem item, int delta) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      _cart.remove(item);
    }
    notifyListeners();
  }

  void removeFromCart(CartItem item) {
    _cart.remove(item);
    notifyListeners();
  }

  void clearCart() {
    _cart.clear();
    notifyListeners();
  }

  void triggerTrackingDemo() {
    _currentTrackingStep = (_currentTrackingStep + 1) % 5;
    notifyListeners();
  }

  double get subtotal {
    return _cart.fold(0.0, (sum, item) => sum + (item.product.price * item.quantity));
  }

  double get shippingFee => subtotal > 150 ? 0.0 : 15.0;
  double get estimatedTax => subtotal * 0.08;
  double get discountAmount => subtotal > 300 ? subtotal * 0.15 : 0.0;
  double get grandTotal => subtotal + shippingFee + estimatedTax - discountAmount;

  // Real Database of 60 Premium Products
  void _initializeProducts() {
    final List<String> categories = ["Electronics", "Apparel", "Living", "Wellness", "Footwear"];
    final List<String> brands = ["Aether", "Lumen", "Komorebi", "Onyx", "Nordic Studio", "Vellum", "Solis"];
    
    final Map<String, List<String>> images = {
      "Electronics": [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90",
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
        "https://images.unsplash.com/photo-1526738549149-8e07eca6c147",
        "https://images.unsplash.com/photo-1504274066654-fa291bb3ec31",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
        "https://images.unsplash.com/photo-1496181130204-7552cc14ac1a",
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      ],
      "Apparel": [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        "https://images.unsplash.com/photo-1618220179428-22790b461013",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
        "https://images.unsplash.com/photo-1603252109303-2751441dd157",
        "https://images.unsplash.com/photo-1578587018452-892bacefd3f2",
        "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5",
        "https://images.unsplash.com/photo-1509319117193-57bab727e09d",
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
      ],
      "Living": [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457",
        "https://images.unsplash.com/photo-1592078615290-033ee584e267",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1617806118233-18e1db207f62",
        "https://images.unsplash.com/photo-1615529182904-14819c35db37",
      ],
      "Wellness": [
        "https://images.unsplash.com/photo-1608248597481-496100c80836",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
        "https://images.unsplash.com/photo-1617897903246-719242758050",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2",
      ],
      "Footwear": [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
        "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
        "https://images.unsplash.com/photo-1613852348851-df1739db8201",
      ]
    };

    final Map<String, List<String>> names = {
      "Electronics": [
        "AeroStream ANC Headphones", "Keystone Mechanical Keyboard", "Onyx Ergonomic Touch Mouse",
        "Vocalist Studio Condenser Mic", "Resonance Portable Retro Speaker", "Syncra Ambient Smart Hub",
        "Pulse Air Wireless Earbuds", "Monolith 5G Clean Phone", "Chronos Ceramic Smartwatch",
        "Horizon UltraBook Carbon 14", "Spectra 4K Designer Display", "Prime-Focus Prime Lens"
      ],
      "Apparel": [
        "Urban Nomad Trench Coat", "Classic Crisp Linen Blouse", "Stealth Black Lambskin Jacket",
        "Svalbard Cashmere Knit Sweater", "Essential Supima Cotton Tee", "Bespoke Raw Selvedge Denim",
        "Ascot Formal Double-Ply Shirt", "Verdant Breeze Linen Shirt", "Arctic Expedition Down Parka",
        "Merino Wool Heavyweight Vest", "Savile Tailored Flat-Trousers", "Executive Wool Blazer Jacket"
      ],
      "Living": [
        "Solis Solid Brass Floor Lamp", "Komorebi Walnut Ergonomic Chair", "Nirvana Floating Oak Bed Frame",
        "Aether Boucle Lounge Armchair", "Earthen Speckled Ceramic Vase", "Chronograph Minimal Desk Clock",
        "Cloud Cushion Organic Linen Set", "Horizon Oak Dining Table", "Lumen Sculpted Velvet Accent Chair",
        "Travertine Minimalist Serving Tray", "Nordic Floating Birch Shelves", "Kyoto Hand-Woven Jute Rug"
      ],
      "Wellness": [
        "Breathe Silent Ultrasonic Diffuser", "Botanical Hyaluronic Moisture Serum", "Kyoto Ceramic Incense Holder",
        "L'Homme Amber Absolu Perfume", "Dead Sea Mineral Bath Salt", "Radiance Cold-Pressed Jojoba Oil",
        "Kelp Infused Bio-Cellulose Face Mask", "Oolong Reserve Organic Tea Pack", "Jade Gua Sha & Facial Roller Set",
        "Vanilla Bourbon Natural Soy Candle", "Sandalwood Soothing Massage Oil", "Zen Organic Cotton Meditation Cushion"
      ],
      "Footwear": [
        "AeroLite Eco Beige Sneakers", "HyperPace Pro Carbon Runners", "Slingback Suede Block Heels",
        "Nomad Breathable Mesh Sandals", "Milano Calfskin Classic Loafers", "Sussex Waterproof Chelsea Boots",
        "Tempo Knitted Slip-On Sneakers", "Stealth-Walk Prime Knit Black Sneakers", "Veloce Volt Neon Speed Shoes",
        "Crimson Streak Performance Runners", "Classic Retro Canvas High-Tops", "Heritage Full-Grain Work Boots"
      ]
    };

    int index = 1;
    for (final cat in categories) {
      final imgList = images[cat]!;
      final nameList = names[cat]!;
      for (int i = 0; i < 12; i++) {
        final double basePrice = 45.0 + (i * 40.0) + ((index % 7) * 12.0);
        final int disc = 10 + (index % 5) * 5;
        final double oldP = basePrice / (1.0 - (disc / 100.0));
        
        final colorList = index % 3 == 0 
          ? ["Charcoal", "Cream", "Moss"] 
          : index % 3 == 1 ? ["Silver", "Onyx", "Sand"] : ["Navy", "Rust", "Alabaster"];
          
        final sizeList = cat == "Footwear" 
          ? ["7", "8", "9", "10", "11"] 
          : cat == "Apparel" ? ["S", "M", "L", "XL"] : ["Standard", "Plus"];

        _products.add(Product(
          id: 'p-$index',
          title: nameList[i],
          brand: brands[index % brands.length],
          category: cat,
          price: double.parse(basePrice.toStringAsFixed(1)),
          oldPrice: double.parse(oldP.toStringAsFixed(1)),
          discount: disc,
          rating: double.parse((4.2 + (index % 9) * 0.1).toStringAsFixed(1)),
          reviews: 15 + (index * 4) + (index % 3) * 11,
          stock: 5 + (index % 25),
          soldCount: 50 + (index * 8) + (index % 12),
          isFavorite: index % 7 == 0,
          description: "An iconic combination of performance and beauty. Designed by Studio Komorebi Copenhagen, this masterpiece is handcrafted using sustainably sourced premium material, making it a luxurious statement piece for any collection.",
          specifications: {
            "Material": cat == "Electronics" ? "Aircraft-Grade Aluminum" : cat == "Apparel" ? "Merino Wool Blend" : "Sustainable Premium Material",
            "Designer": "Studio Komorebi Copenhagen",
            "Origin": "Portugal",
            "Warranty": "3-Year International Warranty"
          },
          images: [
            imgList[i % imgList.length],
            imgList[(i + 1) % imgList.length],
            imgList[(i + 2) % imgList.length],
          ],
          colors: colorList,
          sizes: sizeList,
        ));
        index++;
      }
    }
  }
}

// ==========================================
// SPLASH SCREEN
// ==========================================

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _fadeAnimation;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1800),
    );

    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: const Interval(0.0, 0.6, curve: Curves.easeIn)),
    );

    _scaleAnimation = Tween<double>(begin: 0.85, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: const Interval(0.0, 0.7, curve: Curves.outBack)),
    );

    _controller.forward();

    Timer(const Duration(milliseconds: 2500), () {
      Navigator.pushReplacement(
        context,
        PageRouteBuilder(
          pageBuilder: (_, __, ___) => const AnimatedLoginScreen(),
          transitionsBuilder: (_, anim, __, child) => FadeTransition(opacity: anim, child: child),
          transitionDuration: const Duration(milliseconds: 800),
        ),
      );
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF1E293B), // Dark minimalist splash
      body: Center(
        child: FadeTransition(
          opacity: _fadeAnimation,
          child: ScaleTransition(
            scale: _scaleAnimation,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  padding: const EdgeInsets.all(24),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.08),
                    shape: BoxShape.circle,
                    border: Border.all(color: Colors.white.withOpacity(0.12), width: 1.5),
                  ),
                  child: const Icon(
                    Icons.filter_hdr_outlined,
                    color: Color(0xFF2563EB),
                    size: 64,
                  ),
                ),
                const SizedBox(height: 24),
                const Text(
                  'A E T H E R',
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 8,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'L U X U R Y  S T U D I O',
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.w400,
                    letterSpacing: 4,
                    color: Colors.white.withOpacity(0.5),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ==========================================
// ANIMATED LOGIN SCREEN
// ==========================================

class AnimatedLoginScreen extends StatefulWidget {
  const AnimatedLoginScreen({Key? key}) : super(key: key);

  @override
  State<AnimatedLoginScreen> createState() => _AnimatedLoginScreenState();
}

class _AnimatedLoginScreenState extends State<AnimatedLoginScreen> {
  final _formKey = GlobalKey<FormState>();
  final _usernameController = TextEditingController(text: "salcedozdesing@gmail.com");
  final _passwordController = TextEditingController(text: "••••••••");
  bool _isLoading = false;

  void _handleLogin() {
    if (_formKey.currentState!.validate()) {
      setState(() {
        _isLoading = true;
      });

      Timer(const Duration(milliseconds: 1500), () {
        AppState().login(_usernameController.text);
        Navigator.pushReplacement(
          context,
          PageRouteBuilder(
            pageBuilder: (_, __, ___) => const MainAppContainer(),
            transitionsBuilder: (_, anim, __, child) => FadeTransition(opacity: anim, child: child),
            transitionDuration: const Duration(milliseconds: 600),
          ),
        );
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: const Color(0xFF0F172A),
      body: SingleChildScrollView(
        child: Container(
          height: size.height,
          padding: const EdgeInsets.symmetric(horizontal: 28.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Spacer(flex: 2),
              Center(
                child: Container(
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.04),
                    borderRadius: BorderRadius.circular(32),
                    border: Border.all(color: Colors.white.withOpacity(0.08)),
                  ),
                  child: const Icon(
                    Icons.lock_person_outlined,
                    color: Color(0xFF2563EB),
                    size: 48,
                  ),
                ),
              ),
              const SizedBox(height: 32),
              const Text(
                'Welcome Back',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.w700,
                  color: Colors.white,
                  letterSpacing: -0.5,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                'Enter your credentials to enter the luxury workspace',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.white.withOpacity(0.5),
                ),
              ),
              const SizedBox(height: 48),
              Form(
                key: _formKey,
                child: Column(
                  children: [
                    TextFormField(
                      controller: _usernameController,
                      style: const TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: 'Email Address',
                        labelStyle: TextStyle(color: Colors.white.withOpacity(0.6)),
                        prefixIcon: const Icon(Icons.email_outlined, color: Colors.white54),
                        enabledBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                          borderSide: BorderSide(color: Colors.white.withOpacity(0.1)),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                          borderSide: const BorderSide(color: Color(0xFF2563EB), width: 1.5),
                        ),
                        filled: true,
                        fillColor: Colors.white.withOpacity(0.03),
                      ),
                      validator: (v) => v!.isEmpty ? 'Please enter email' : null,
                    ),
                    const SizedBox(height: 18),
                    TextFormField(
                      controller: _passwordController,
                      obscureText: true,
                      style: const TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        labelText: 'Password',
                        labelStyle: TextStyle(color: Colors.white.withOpacity(0.6)),
                        prefixIcon: const Icon(Icons.lock_outline, color: Colors.white54),
                        enabledBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                          borderSide: BorderSide(color: Colors.white.withOpacity(0.1)),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20),
                          borderSide: const BorderSide(color: Color(0xFF2563EB), width: 1.5),
                        ),
                        filled: true,
                        fillColor: Colors.white.withOpacity(0.03),
                      ),
                      validator: (v) => v!.isEmpty ? 'Please enter password' : null,
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              Align(
                alignment: Alignment.centerRight,
                child: TextButton(
                  onPressed: () {},
                  child: Text(
                    'Forgot Password?',
                    style: TextStyle(color: Colors.white.withOpacity(0.6), fontSize: 13),
                  ),
                ),
              ),
              const SizedBox(height: 36),
              ElevatedButton(
                onPressed: _isLoading ? null : _handleLogin,
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF2563EB),
                  padding: const EdgeInsets.symmetric(vertical: 18),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20),
                  ),
                ),
                child: _isLoading
                    ? const SizedBox(
                        height: 24,
                        width: 24,
                        child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2),
                      )
                    : const Text(
                        'Authenticate',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w600,
                          color: Colors.white,
                        ),
                      ),
              ),
              const Spacer(),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "Don't have an account? ",
                    style: TextStyle(color: Colors.white.withOpacity(0.5)),
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text(
                      'Sign Up',
                      style: TextStyle(color: Color(0xFF2563EB), fontWeight: FontWeight.bold),
                    ),
                  )
                ],
              ),
              const Spacer(),
            ],
          ),
        ),
      ),
    );
  }
}

// ==========================================
// MAIN APP CONTAINER WITH FLOATING NAV
// ==========================================

class MainAppContainer extends StatefulWidget {
  const MainAppContainer({Key? key}) : super(key: key);

  @override
  State<MainAppContainer> createState() => _MainAppContainerState();
}

class _MainAppContainerState extends State<MainAppContainer> {
  final AppState _appState = AppState();

  @override
  void initState() {
    super.initState();
    _appState.addListener(_updateState);
  }

  @override
  void dispose() {
    _appState.removeListener(_updateState);
    super.dispose();
  }

  void _updateState() {
    if (mounted) setState(() {});
  }

  Widget _buildActiveBody() {
    switch (_appState.activeNavIndex) {
      case 0:
        return const HomeScreen();
      case 1:
        return const SearchScreen();
      case 2:
        return const WishlistScreen();
      case 3:
        return const CartScreen();
      case 4:
        return const ProfileScreen();
      default:
        return const HomeScreen();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned.fill(
            child: _buildActiveBody(),
          ),
          // Floating Bottom Navigation Bar
          Positioned(
            left: 20,
            right: 20,
            bottom: 24,
            child: CustomFloatingNavbar(
              currentIndex: _appState.activeNavIndex,
              onTap: (index) {
                _appState.activeNavIndex = index;
              },
            ),
          ),
        ],
      ),
    );
  }
}

// ==========================================
// CUSTOM FLOATING BOTTOM NAVIGATION
// ==========================================

class CustomFloatingNavbar extends StatelessWidget {
  final int currentIndex;
  final ValueChanged<int> onTap;

  const CustomFloatingNavbar({
    Key? key,
    required this.currentIndex,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final items = [
      {'icon': Icons.home_rounded, 'label': 'Home'},
      {'icon': Icons.search_rounded, 'label': 'Search'},
      {'icon': Icons.favorite_rounded, 'label': 'Wishlist'},
      {'icon': Icons.shopping_bag_rounded, 'label': 'Cart'},
      {'icon': Icons.person_rounded, 'label': 'Profile'},
    ];

    return Container(
      height: 76,
      padding: const EdgeInsets.symmetric(horizontal: 14),
      decoration: BoxDecoration(
        color: const Color(0xFF0F172A).withOpacity(0.92), // Cosmic dark frosting
        borderRadius: BorderRadius.circular(28),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF0F172A).withOpacity(0.25),
            blurRadius: 24,
            offset: const Offset(0, 8),
          ),
        ],
        border: Border.all(color: Colors.white.withOpacity(0.08), width: 1.5),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: List.generate(items.length, (index) {
          final isSelected = currentIndex == index;
          final icon = items[index]['icon'] as IconData;

          return GestureDetector(
            onTap: () => onTap(index),
            behavior: HitTestBehavior.opaque,
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              curve: Curves.easeOut,
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
              decoration: BoxDecoration(
                color: isSelected ? const Color(0xFF2563EB).withOpacity(0.18) : Colors.transparent,
                borderRadius: BorderRadius.circular(18),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    icon,
                    color: isSelected ? const Color(0xFF2563EB) : Colors.white60,
                    size: 24,
                  ),
                  const SizedBox(height: 4),
                  AnimatedDefaultTextStyle(
                    duration: const Duration(milliseconds: 250),
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: isSelected ? FontWeight.w600 : FontWeight.w400,
                      color: isSelected ? Colors.white : Colors.white38,
                    ),
                    child: Text(items[index]['label'] as String),
                  )
                ],
              ),
            ),
          );
        }),
      ),
    );
  }
}

// ==========================================
// HOME SCREEN
// ==========================================

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final AppState _appState = AppState();
  final PageController _carouselController = PageController();
  int _carouselIndex = 0;
  late Timer _carouselTimer;

  final List<Map<String, String>> _promoBanners = [
    {
      'title': 'The Horizon Collection',
      'subtitle': 'Acoustic minimalism starting at \\$149',
      'img': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      'tag': 'NEW RELEASE'
    },
    {
      'title': 'Lumen Velvet Luxury',
      'subtitle': 'Up to 30% Off Nordic Accents',
      'img': 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c',
      'tag': 'SEASON SALE'
    },
    {
      'title': 'Anatomical Precision',
      'subtitle': 'The all-new Carbon Runners',
      'img': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      'tag': 'FOOTWEAR'
    },
  ];

  @override
  void initState() {
    super.initState();
    _carouselTimer = Timer.periodic(const Duration(seconds: 4), (timer) {
      if (_carouselController.hasClients) {
        _carouselIndex = (_carouselIndex + 1) % _promoBanners.length;
        _carouselController.animateToPage(
          _carouselIndex,
          duration: const Duration(milliseconds: 600),
          curve: Curves.easeInOut,
        );
      }
    });
  }

  @override
  void dispose() {
    _carouselTimer.cancel();
    _carouselController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final filtered = _appState.selectedCategory == "All"
        ? _appState.products
        : _appState.products.where((p) => p.category == _appState.selectedCategory).toList();

    return Scaffold(
      appBar: AppBar(
        scrolledUnderElevation: 0,
        backgroundColor: const Color(0xFFF8FAFC),
        automaticallyImplyLeading: false,
        title: Row(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'S A L C E D O  S T U D I O',
                  style: TextStyle(
                    fontSize: 9,
                    fontWeight: FontWeight.w600,
                    letterSpacing: 2.5,
                    color: Colors.black.withOpacity(0.5),
                  ),
                ),
                const SizedBox(height: 2),
                const Text(
                  'Aether Luxury',
                  style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w700,
                    color: Color(0xFF0F172A),
                  ),
                ),
              ],
            ),
            const Spacer(),
            // Badge shopping cart icon
            IconButton(
              icon: Stack(
                children: [
                  const Icon(Icons.shopping_bag_outlined, color: Color(0xFF0F172A), size: 26),
                  if (_appState.cart.isNotEmpty)
                    Positioned(
                      right: 0,
                      top: 0,
                      child: Container(
                        padding: const EdgeInsets.all(4),
                        decoration: const BoxDecoration(
                          color: Color(0xFFEF4444),
                          shape: BoxShape.circle,
                        ),
                        child: Text(
                          _appState.cart.fold(0, (sum, i) => sum + i.quantity).toString(),
                          style: const TextStyle(color: Colors.white, fontSize: 8, fontWeight: FontWeight.bold),
                        ),
                      ),
                    )
                ],
              ),
              onPressed: () => _appState.activeNavIndex = 3,
            ),
            const SizedBox(width: 8),
            const CircleAvatar(
              backgroundImage: NetworkImage('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'),
              radius: 18,
            )
          ],
        ),
      ),
      body: RefreshIndicator(
        onRefresh: () async => setState(() {}),
        child: SingleChildScrollView(
          padding: const EdgeInsets.only(bottom: 110),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Search Header
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.02),
                        blurRadius: 10,
                        offset: const Offset(0, 4),
                      )
                    ],
                  ),
                  child: TextField(
                    onTap: () {
                      _appState.activeNavIndex = 1;
                    },
                    readOnly: true,
                    decoration: const InputDecoration(
                      hintText: 'Search exclusive items...',
                      hintStyle: TextStyle(color: Colors.black38),
                      icon: Icon(Icons.search, color: Colors.black54),
                      border: InputBorder.none,
                    ),
                  ),
                ),
              ),

              // Carousel
              SizedBox(
                height: 180,
                child: PageView.builder(
                  controller: _carouselController,
                  onPageChanged: (idx) => setState(() => _carouselIndex = idx),
                  itemCount: _promoBanners.length,
                  itemBuilder: (ctx, idx) {
                    final b = _promoBanners[idx];
                    return Container(
                      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(24),
                        image: DecorationImage(
                          image: NetworkImage(b['img']!),
                          fit: BoxFit.cover,
                          colorFilter: ColorFilter.mode(Colors.black.withOpacity(0.4), BlendMode.srcOver),
                        ),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(20),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                              decoration: BoxDecoration(
                                color: const Color(0xFF2563EB),
                                borderRadius: BorderRadius.circular(10),
                              ),
                              child: Text(
                                b['tag']!,
                                style: const TextStyle(color: Colors.white, fontSize: 8, fontWeight: FontWeight.bold),
                              ),
                            ),
                            const SizedBox(height: 8),
                            Text(
                              b['title']!,
                              style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
                            ),
                            const SizedBox(height: 2),
                            Text(
                              b['subtitle']!,
                              style: TextStyle(color: Colors.white.withOpacity(0.8), fontSize: 12),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
              ),

              // Indicators
              const SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: List.generate(_promoBanners.length, (idx) {
                  return AnimatedContainer(
                    duration: const Duration(milliseconds: 300),
                    margin: const EdgeInsets.symmetric(horizontal: 4),
                    width: _carouselIndex == idx ? 16 : 6,
                    height: 6,
                    decoration: BoxDecoration(
                      color: _carouselIndex == idx ? const Color(0xFF2563EB) : Colors.black12,
                      borderRadius: BorderRadius.circular(3),
                    ),
                  );
                }),
              ),

              // Categories Scroll
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 16),
                child: Text('Categories', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              ),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Row(
                  children: ["All", "Electronics", "Apparel", "Living", "Wellness", "Footwear"].map((cat) {
                    final isSelected = _appState.selectedCategory == cat;
                    return Padding(
                      padding: const EdgeInsets.only(right: 10),
                      child: InkWell(
                        onTap: () {
                          setState(() {
                            _appState.selectedCategory = cat;
                          });
                        },
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 250),
                          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                          decoration: BoxDecoration(
                            color: isSelected ? const Color(0xFF2563EB) : Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.01),
                                blurRadius: 10,
                              )
                            ],
                            border: Border.all(
                              color: isSelected ? Colors.transparent : Colors.black.withOpacity(0.04),
                            ),
                          ),
                          child: Text(
                            cat,
                            style: TextStyle(
                              color: isSelected ? Colors.white : const Color(0xFF0F172A),
                              fontWeight: FontWeight.w600,
                              fontSize: 13,
                            ),
                          ),
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),

              // Product Grid Header
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 20),
                child: Row(
                  children: [
                    Text(
                      '\${_appState.selectedCategory} Collection',
                      style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                    ),
                    const Spacer(),
                    Text(
                      '\${filtered.length} Items',
                      style: const TextStyle(color: Colors.grey, fontSize: 12),
                    ),
                  ],
                ),
              ),

              // Infinite Grid Representation
              GridView.builder(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                physics: const NeverScrollableScrollPhysics(),
                shrinkWrap: true,
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  childAspectRatio: 0.68,
                  crossAxisSpacing: 14,
                  mainAxisSpacing: 14,
                ),
                itemCount: filtered.length,
                itemBuilder: (ctx, idx) {
                  return ProductCardWidget(product: filtered[idx]);
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ==========================================
// SEARCH SCREEN
// ==========================================

class SearchScreen extends StatefulWidget {
  const SearchScreen({Key? key}) : super(key: key);

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  final AppState _appState = AppState();
  final TextEditingController _queryController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final searchResults = _appState.products.where((p) =>
        p.title.toLowerCase().contains(_queryController.text.toLowerCase()) ||
        p.brand.toLowerCase().contains(_queryController.text.toLowerCase()) ||
        p.category.toLowerCase().contains(_queryController.text.toLowerCase())).toList();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Discover Products', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFFF8FAFC),
        scrolledUnderElevation: 0,
        automaticallyImplyLeading: false,
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.01),
                    blurRadius: 10,
                  )
                ],
              ),
              child: TextField(
                controller: _queryController,
                autofocus: true,
                onChanged: (q) {
                  setState(() {});
                },
                decoration: InputDecoration(
                  hintText: 'Search by brand, style, or category...',
                  border: InputBorder.none,
                  prefixIcon: const Icon(Icons.search, color: Colors.black45),
                  suffixIcon: _queryController.text.isNotEmpty
                      ? IconButton(
                          icon: const Icon(Icons.clear),
                          onPressed: () {
                            _queryController.clear();
                            setState(() {});
                          },
                        )
                      : null,
                ),
              ),
            ),
          ),
          Expanded(
            child: searchResults.isEmpty
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.search_off_rounded, size: 64, color: Colors.black26),
                        const SizedBox(height: 16),
                        const Text('No products match your search query.', style: TextStyle(color: Colors.grey)),
                      ],
                    ),
                  )
                : GridView.builder(
                    padding: const EdgeInsets.only(left: 16, right: 16, bottom: 110),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 2,
                      childAspectRatio: 0.68,
                      crossAxisSpacing: 14,
                      mainAxisSpacing: 14,
                    ),
                    itemCount: searchResults.length,
                    itemBuilder: (ctx, idx) {
                      return ProductCardWidget(product: searchResults[idx]);
                    },
                  ),
          ),
        ],
      ),
    );
  }
}

// ==========================================
// WISHLIST SCREEN
// ==========================================

class WishlistScreen extends StatelessWidget {
  const WishlistScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final appState = AppState();
    final items = appState.wishlist;

    return Scaffold(
      appBar: AppBar(
        title: const Text('My Favorites', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFFF8FAFC),
        scrolledUnderElevation: 0,
        automaticallyImplyLeading: false,
      ),
      body: items.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.favorite_border_rounded, size: 72, color: Colors.black12),
                  const SizedBox(height: 20),
                  const Text(
                    'No favorite items yet',
                    style: TextStyle(fontWeight: FontWeight.w600, fontSize: 16, color: Colors.black45),
                  ),
                  const SizedBox(height: 8),
                  const Text('Discover premium goods on the storefront', style: TextStyle(color: Colors.grey)),
                ],
              ),
            )
          : GridView.builder(
              padding: const EdgeInsets.only(left: 16, right: 16, bottom: 110),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 0.68,
                crossAxisSpacing: 14,
                mainAxisSpacing: 14,
              ),
              itemCount: items.length,
              itemBuilder: (ctx, idx) {
                return ProductCardWidget(product: items[idx]);
              },
            ),
    );
  }
}

// ==========================================
// REUSABLE PRODUCT CARD WIDGET
// ==========================================

class ProductCardWidget extends StatefulWidget {
  final Product product;
  const ProductCardWidget({Key? key, required this.product}) : super(key: key);

  @override
  State<ProductCardWidget> createState() => _ProductCardWidgetState();
}

class _ProductCardWidgetState extends State<ProductCardWidget> {
  @override
  Widget build(BuildContext context) {
    final appState = AppState();

    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          PageRouteBuilder(
            pageBuilder: (_, __, ___) => ProductDetailScreen(product: widget.product),
            transitionsBuilder: (_, anim, __, child) => FadeTransition(opacity: anim, child: child),
            transitionDuration: const Duration(milliseconds: 400),
          ),
        );
      },
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(24),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.015),
              blurRadius: 16,
              offset: const Offset(0, 8),
            )
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Image with Favorite trigger & discount badge
            Expanded(
              child: Stack(
                children: [
                  Hero(
                    tag: 'img-\${widget.product.id}',
                    child: Container(
                      decoration: BoxDecoration(
                        borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
                        image: DecorationImage(
                          image: NetworkImage(widget.product.images[0]),
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                  ),
                  // Favorite button
                  Positioned(
                    top: 10,
                    right: 10,
                    child: GestureDetector(
                      onTap: () {
                        setState(() {
                          appState.toggleFavorite(widget.product);
                        });
                      },
                      child: Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.85),
                          shape: BoxShape.circle,
                        ),
                        child: Icon(
                          widget.product.isFavorite ? Icons.favorite : Icons.favorite_border,
                          color: widget.product.isFavorite ? const Color(0xFFEF4444) : Colors.black85,
                          size: 16,
                        ),
                      ),
                    ),
                  ),
                  // Discount Badge
                  Positioned(
                    top: 10,
                    left: 10,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: const Color(0xFFF97316),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Text(
                        '-\${widget.product.discount}%',
                        style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            // Info block
            Padding(
              padding: const EdgeInsets.all(12.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    widget.product.brand.toUpperCase(),
                    style: const TextStyle(fontSize: 8, letterSpacing: 1.5, color: Colors.grey, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    widget.product.title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: Color(0xFF1E293B)),
                  ),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      const Icon(Icons.star, color: Colors.amber, size: 12),
                      const SizedBox(width: 2),
                      Text(
                        widget.product.rating.toString(),
                        style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Colors.black85),
                      ),
                      const SizedBox(width: 4),
                      Text(
                        '(\${widget.product.reviews})',
                        style: const TextStyle(fontSize: 9, color: Colors.grey),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Text(
                        '\\\$\${widget.product.price}',
                        style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Color(0xFF2563EB)),
                      ),
                      const SizedBox(width: 6),
                      Text(
                        '\\\$\${widget.product.oldPrice}',
                        style: const TextStyle(
                          fontSize: 11,
                          color: Colors.grey,
                          decoration: TextDecoration.lineThrough,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}

// ==========================================
// PRODUCT DETAIL SCREEN
// ==========================================

class ProductDetailScreen extends StatefulWidget {
  final Product product;
  const ProductDetailScreen({Key? key, required this.product}) : super(key: key);

  @override
  State<ProductDetailScreen> createState() => _ProductDetailScreenState();
}

class _ProductDetailScreenState extends State<ProductDetailScreen> {
  int _activeImageIdx = 0;
  late String _selectedColor;
  late String _selectedSize;
  int _quantity = 1;

  @override
  void initState() {
    super.initState();
    _selectedColor = widget.product.colors[0];
    _selectedSize = widget.product.sizes[0];
  }

  @override
  Widget build(BuildContext context) {
    final appState = AppState();

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.product.brand.toUpperCase(), style: const TextStyle(fontSize: 12, letterSpacing: 2, color: Colors.grey)),
        centerTitle: true,
        actions: [
          IconButton(
            icon: Icon(widget.product.isFavorite ? Icons.favorite : Icons.favorite_border,
                color: widget.product.isFavorite ? const Color(0xFFEF4444) : Colors.black),
            onPressed: () {
              setState(() {
                appState.toggleFavorite(widget.product);
              });
            },
          ),
          const SizedBox(width: 10),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Gallery Hero Image
            Hero(
              tag: 'img-\${widget.product.id}',
              child: Container(
                height: 340,
                width: double.infinity,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: NetworkImage(widget.product.images[_activeImageIdx]),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 12),
            // Image selector row
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(widget.product.images.length, (index) {
                final isCurrent = index == _activeImageIdx;
                return GestureDetector(
                  onTap: () {
                    setState(() {
                      _activeImageIdx = index;
                    });
                  },
                  child: Container(
                    margin: const EdgeInsets.symmetric(horizontal: 4),
                    height: 54,
                    width: 54,
                    decoration: BoxDecoration(
                      border: Border.all(color: isCurrent ? const Color(0xFF2563EB) : Colors.transparent, width: 2),
                      borderRadius: BorderRadius.circular(10),
                      image: DecorationImage(
                        image: NetworkImage(widget.product.images[index]),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                );
              }),
            ),
            // Info Box
            Padding(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: Text(
                          widget.product.title,
                          style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: Color(0xFF0F172A)),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                        decoration: BoxDecoration(
                          color: const Color(0xFF22C55E).withOpacity(0.1),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Text(
                          '\${widget.product.stock} In Stock',
                          style: const TextStyle(color: Color(0xFF22C55E), fontSize: 10, fontWeight: FontWeight.bold),
                        ),
                      )
                    ],
                  ),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      const Icon(Icons.star, color: Colors.amber, size: 16),
                      const SizedBox(width: 4),
                      Text(widget.product.rating.toString(), style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                      const SizedBox(width: 6),
                      Text('(\${widget.product.reviews} verified reviews)', style: const TextStyle(color: Colors.grey, fontSize: 12)),
                    ],
                  ),
                  const SizedBox(height: 18),
                  Row(
                    children: [
                      Text('\\\$\${widget.product.price}', style: const TextStyle(fontSize: 26, fontWeight: FontWeight.bold, color: Color(0xFF2563EB))),
                      const SizedBox(width: 10),
                      Text('\\\$\${widget.product.oldPrice}', style: const TextStyle(fontSize: 16, color: Colors.grey, decoration: TextDecoration.lineThrough)),
                    ],
                  ),
                  const SizedBox(height: 24),
                  // Color selection
                  const Text('Select Finish / Color', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                  const SizedBox(height: 8),
                  Row(
                    children: widget.product.colors.map((col) {
                      final isSel = col == _selectedColor;
                      return Padding(
                        padding: const EdgeInsets.only(right: 8.0),
                        child: ChoiceChip(
                          label: Text(col),
                          selected: isSel,
                          onSelected: (selected) {
                            if (selected) setState(() => _selectedColor = col);
                          },
                        ),
                      );
                    }).toList(),
                  ),
                  const SizedBox(height: 18),
                  // Size selection
                  const Text('Select Configuration / Size', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                  const SizedBox(height: 8),
                  Row(
                    children: widget.product.sizes.map((sz) {
                      final isSel = sz == _selectedSize;
                      return Padding(
                        padding: const EdgeInsets.only(right: 8.0),
                        child: ChoiceChip(
                          label: Text(sz),
                          selected: isSel,
                          onSelected: (selected) {
                            if (selected) setState(() => _selectedSize = sz);
                          },
                        ),
                      );
                    }).toList(),
                  ),
                  const SizedBox(height: 24),
                  const Text('Product Description', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15)),
                  const SizedBox(height: 8),
                  Text(
                    widget.product.description,
                    style: const TextStyle(color: Colors.black54, height: 1.5, fontSize: 13),
                  ),
                  const SizedBox(height: 24),
                  const Text('Specifications', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15)),
                  const SizedBox(height: 10),
                  ...widget.product.specifications.entries.map((ent) {
                    return Padding(
                      padding: const EdgeInsets.symmetric(vertical: 4),
                      child: Row(
                        children: [
                          Text(ent.key, style: const TextStyle(color: Colors.grey, fontSize: 12)),
                          const Spacer(),
                          Text(ent.value, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 12)),
                        ],
                      ),
                    );
                  }).toList(),
                  const SizedBox(height: 100),
                ],
              ),
            )
          ],
        ),
      ),
      bottomSheet: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.04),
              blurRadius: 10,
              offset: const Offset(0, -4),
            )
          ],
        ),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              decoration: BoxDecoration(
                color: const Color(0xFFF1F5F9),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.remove, size: 16),
                    onPressed: () {
                      if (_quantity > 1) setState(() => _quantity--);
                    },
                  ),
                  Text(_quantity.toString(), style: const TextStyle(fontWeight: FontWeight.bold)),
                  IconButton(
                    icon: const Icon(Icons.add, size: 16),
                    onPressed: () {
                      setState(() => _quantity++);
                    },
                  ),
                ],
              ),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF2563EB),
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
                onPressed: () {
                  for (int i = 0; i < _quantity; i++) {
                    appState.addToCart(widget.product, _selectedColor, _selectedSize);
                  }
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text('Added \${widget.product.title} to cart'),
                      action: SnackBarAction(
                        label: 'View Cart',
                        onPressed: () {
                          appState.activeNavIndex = 3;
                          Navigator.pop(context);
                        },
                      ),
                    ),
                  );
                },
                child: const Text('Add to Bag', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ==========================================
// SHOPPING CART SCREEN
// ==========================================

class CartScreen extends StatefulWidget {
  const CartScreen({Key? key}) : super(key: key);

  @override
  State<CartScreen> createState() => _CartScreenState();
}

class _CartScreenState extends State<CartScreen> {
  final AppState _appState = AppState();

  @override
  Widget build(BuildContext context) {
    final list = _appState.cart;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Shopping Bag', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFFF8FAFC),
        scrolledUnderElevation: 0,
        automaticallyImplyLeading: false,
      ),
      body: list.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.shopping_bag_outlined, size: 80, color: Colors.black12),
                  const SizedBox(height: 20),
                  const Text('Your shopping bag is empty', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black45)),
                  const SizedBox(height: 8),
                  ElevatedButton(
                    onPressed: () => _appState.activeNavIndex = 0,
                    style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF2563EB)),
                    child: const Text('Go Shopping', style: TextStyle(color: Colors.white)),
                  ),
                ],
              ),
            )
          : Column(
              children: [
                Expanded(
                  child: ListView.builder(
                    padding: const EdgeInsets.only(left: 16, right: 16, bottom: 20),
                    itemCount: list.length,
                    itemBuilder: (ctx, idx) {
                      final item = list[idx];
                      return Container(
                        margin: const EdgeInsets.only(bottom: 12),
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.black.withOpacity(0.01),
                              blurRadius: 10,
                            )
                          ],
                        ),
                        child: Row(
                          children: [
                            Container(
                              height: 70,
                              width: 70,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12),
                                image: DecorationImage(
                                  image: NetworkImage(item.product.images[0]),
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(item.product.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.bold)),
                                  const SizedBox(height: 2),
                                  Text('\${item.selectedColor} • \${item.selectedSize}', style: const TextStyle(color: Colors.grey, fontSize: 10)),
                                  const SizedBox(height: 6),
                                  Text('\\\$\${item.product.price}', style: const TextStyle(color: Color(0xFF2563EB), fontWeight: FontWeight.bold)),
                                ],
                              ),
                            ),
                            Row(
                              children: [
                                IconButton(
                                  icon: const Icon(Icons.remove_circle_outline, size: 20),
                                  onPressed: () => setState(() => _appState.updateQuantity(item, -1)),
                                ),
                                Text(item.quantity.toString(), style: const TextStyle(fontWeight: FontWeight.bold)),
                                IconButton(
                                  icon: const Icon(Icons.add_circle_outline, size: 20),
                                  onPressed: () => setState(() => _appState.updateQuantity(item, 1)),
                                ),
                              ],
                            )
                          ],
                        ),
                      );
                    },
                  ),
                ),
                // Cost calculation Card
                Container(
                  padding: const EdgeInsets.all(24),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.04),
                        blurRadius: 20,
                        offset: const Offset(0, -6),
                      )
                    ],
                    borderRadius: const BorderRadius.vertical(top: Radius.circular(32)),
                  ),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text('Subtotal', style: TextStyle(color: Colors.grey)),
                          Text('\\\$\${_appState.subtotal.toStringAsFixed(2)}', style: const TextStyle(fontWeight: FontWeight.bold)),
                        ],
                      ),
                      const SizedBox(height: 8),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text('Est. Shipping', style: TextStyle(color: Colors.grey)),
                          Text(_appState.shippingFee == 0 ? 'Free' : '\\\$\${_appState.shippingFee.toStringAsFixed(2)}', style: const TextStyle(fontWeight: FontWeight.bold)),
                        ],
                      ),
                      if (_appState.discountAmount > 0) ...[
                        const SizedBox(height: 8),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Text('Bundle Discount', style: TextStyle(color: Color(0xFF22C55E))),
                            Text('-\\\$\${_appState.discountAmount.toStringAsFixed(2)}', style: const TextStyle(color: Color(0xFF22C55E), fontWeight: FontWeight.bold)),
                          ],
                        ),
                      ],
                      const Divider(height: 24),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text('Estimated Total', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                          Text('\\\$\${_appState.grandTotal.toStringAsFixed(2)}', style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Color(0xFF2563EB))),
                        ],
                      ),
                      const SizedBox(height: 18),
                      SizedBox(
                        width: double.infinity,
                        child: ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFF2563EB),
                            padding: const EdgeInsets.symmetric(vertical: 18),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                          ),
                          onPressed: () {
                            Navigator.push(
                              context,
                              PageRouteBuilder(
                                pageBuilder: (_, __, ___) => const CheckoutScreen(),
                                transitionsBuilder: (_, anim, __, child) => FadeTransition(opacity: anim, child: child),
                                transitionDuration: const Duration(milliseconds: 400),
                              ),
                            );
                          },
                          child: const Text('Proceed to Checkout', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                        ),
                      ),
                      const SizedBox(height: 70), // Padding to account for floating bar
                    ],
                  ),
                ),
              ],
            ),
    );
  }
}

// ==========================================
// CHECKOUT SCREEN WITH PREMIUM CARD
// ==========================================

class CheckoutScreen extends StatefulWidget {
  const CheckoutScreen({Key? key}) : super(key: key);

  @override
  State<CheckoutScreen> createState() => _CheckoutScreenState();
}

class _CheckoutScreenState extends State<CheckoutScreen> {
  final AppState _appState = AppState();
  final _addressController = TextEditingController(text: "Av. Diagonal Deco, Block B, Flat 4A, San Francisco");
  final _phoneController = TextEditingController(text: "+1 415 901 0233");
  int _payMethodIdx = 0; // 0: Card, 1: ApplePay, 2: PayPal

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Checkout Verification', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFFF8FAFC),
        scrolledUnderElevation: 0,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Delivery Address', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 8),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
              child: Column(
                children: [
                  TextField(
                    controller: _addressController,
                    decoration: const InputDecoration(
                      labelText: 'Full Address',
                      icon: Icon(Icons.location_on_outlined),
                      border: InputBorder.none,
                    ),
                  ),
                  const Divider(),
                  TextField(
                    controller: _phoneController,
                    decoration: const InputDecoration(
                      labelText: 'Contact Phone',
                      icon: Icon(Icons.phone_outlined),
                      border: InputBorder.none,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            const Text('Payment Method', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 8),
            Row(
              children: [
                _buildMethodSelector(0, Icons.credit_card, 'Card'),
                _buildMethodSelector(1, Icons.apple, 'Apple Pay'),
                _buildMethodSelector(2, Icons.payment, 'PayPal'),
              ],
            ),
            const SizedBox(height: 20),
            // Dynamic premium Credit Card view
            if (_payMethodIdx == 0) ...[
              Container(
                height: 180,
                width: double.infinity,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    colors: [Color(0xFF2563EB), Color(0xFF0F172A)],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  borderRadius: BorderRadius.circular(24),
                  boxShadow: [
                    BoxShadow(
                      color: const Color(0xFF2563EB).withOpacity(0.3),
                      blurRadius: 16,
                      offset: const Offset(0, 8),
                    )
                  ],
                ),
                padding: const EdgeInsets.all(24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: const [
                        Text('AETHER CLUB', style: TextStyle(color: Colors.white38, fontSize: 10, letterSpacing: 2, fontWeight: FontWeight.bold)),
                        Icon(Icons.contactless, color: Colors.white54),
                      ],
                    ),
                    const Text(
                      '••••  ••••  ••••  9018',
                      style: TextStyle(color: Colors.white, fontSize: 20, letterSpacing: 4, fontWeight: FontWeight.bold),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text('CARDHOLDER', style: TextStyle(color: Colors.white38, fontSize: 8)),
                            const SizedBox(height: 2),
                            Text(_appState.currentUser ?? 'GUEST CLIENT', style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.bold)),
                          ],
                        ),
                        const Text('12 / 29', style: TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.bold)),
                      ],
                    )
                  ],
                ),
              ),
            ],
            const SizedBox(height: 32),
            const Text('Order Calculation', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('Items cost', style: TextStyle(color: Colors.grey)),
                Text('\\\$\${_appState.subtotal.toStringAsFixed(2)}', style: const TextStyle(fontWeight: FontWeight.bold)),
              ],
            ),
            const SizedBox(height: 6),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('Taxes & Insurance', style: TextStyle(color: Colors.grey)),
                Text('\\\$\${_appState.estimatedTax.toStringAsFixed(2)}', style: const TextStyle(fontWeight: FontWeight.bold)),
              ],
            ),
            const Divider(height: 24),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('Checkout Total', style: TextStyle(fontWeight: FontWeight.bold)),
                Text('\\\$\${_appState.grandTotal.toStringAsFixed(2)}', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF2563EB))),
              ],
            ),
            const SizedBox(height: 40),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF2563EB),
                  padding: const EdgeInsets.symmetric(vertical: 18),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
                onPressed: () {
                  _appState.clearCart();
                  Navigator.pushAndRemoveUntil(
                    context,
                    PageRouteBuilder(
                      pageBuilder: (_, __, ___) => const OrderSuccessScreen(),
                      transitionsBuilder: (_, anim, __, child) => FadeTransition(opacity: anim, child: child),
                    ),
                    (route) => false,
                  );
                },
                child: const Text('Complete Secure Order', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildMethodSelector(int idx, IconData icon, String text) {
    final isSelected = _payMethodIdx == idx;
    return Expanded(
      child: GestureDetector(
        onTap: () => setState(() => _payMethodIdx = idx),
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 4),
          padding: const EdgeInsets.symmetric(vertical: 14),
          decoration: BoxDecoration(
            color: isSelected ? const Color(0xFF2563EB) : Colors.white,
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: isSelected ? Colors.transparent : Colors.black12),
          ),
          child: Column(
            children: [
              Icon(icon, color: isSelected ? Colors.white : Colors.black85),
              const SizedBox(height: 6),
              Text(text, style: TextStyle(color: isSelected ? Colors.white : Colors.black85, fontSize: 11, fontWeight: FontWeight.bold)),
            ],
          ),
        ),
      ),
    );
  }
}

// ==========================================
// ORDER SUCCESS SCREEN
// ==========================================

class OrderSuccessScreen extends StatelessWidget {
  const OrderSuccessScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(28.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Spacer(),
            Container(
              padding: const EdgeInsets.all(28),
              decoration: BoxDecoration(
                color: const Color(0xFF22C55E).withOpacity(0.12),
                shape: BoxShape.circle,
              ),
              child: const Icon(
                Icons.check_circle_rounded,
                color: Color(0xFF22C55E),
                size: 88,
              ),
            ),
            const SizedBox(height: 36),
            const Text(
              'Aether Order Confirmed',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Color(0xFF0F172A)),
            ),
            const SizedBox(height: 12),
            const Text(
              'Thank you for your purchase. Master artisans have begun securing your order. We have sent receipt details to salcedozdesing@gmail.com.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.black54, height: 1.5, fontSize: 13),
            ),
            const Spacer(),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF2563EB),
                  padding: const EdgeInsets.symmetric(vertical: 18),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
                onPressed: () {
                  Navigator.pushAndRemoveUntil(
                    context,
                    PageRouteBuilder(
                      pageBuilder: (_, __, ___) => const MainAppContainer(),
                    ),
                    (route) => false,
                  );
                  AppState().activeNavIndex = 4; // Open profile / tracking tab
                },
                child: const Text('Track Order Delivery', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
              ),
            ),
            const SizedBox(height: 14),
            TextButton(
              onPressed: () {
                Navigator.pushAndRemoveUntil(
                  context,
                  PageRouteBuilder(
                    pageBuilder: (_, __, ___) => const MainAppContainer(),
                  ),
                  (route) => false,
                );
              },
              child: const Text('Back to Storefront', style: TextStyle(color: Colors.grey)),
            ),
          ],
        ),
      ),
    );
  }
}

// ==========================================
// ORDER TRACKING SCREEN (TIMELINE VIEW)
// ==========================================

class OrderTrackingScreen extends StatelessWidget {
  const OrderTrackingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final state = AppState();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Aether Live Tracker', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: const Color(0xFFF8FAFC),
        scrolledUnderElevation: 0,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                boxShadow: [
                  BoxShadow(color: Colors.black.withOpacity(0.01), blurRadius: 10),
                ],
              ),
              child: Row(
                children: [
                  const Icon(Icons.local_shipping_outlined, color: Color(0xFF2563EB), size: 36),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text('Shipment Status: In Transit', style: TextStyle(fontWeight: FontWeight.bold)),
                        Text('Estimated arrival: July 2, 2026', style: TextStyle(color: Colors.grey, fontSize: 12)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 32),
            const Text('Journey Timeline', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 24),
            _buildTimelineStep('Preparing Order', 'Order verified and packed by hand', 0, state.currentTrackingStep),
            _buildTimelineStep('Handed to Carrier', 'Aether premium courier dispatched', 1, state.currentTrackingStep),
            _buildTimelineStep('Shipping Progress', 'In transit on local cargo hubs', 2, state.currentTrackingStep),
            _buildTimelineStep('Out for Delivery', 'Local courier is completing route', 3, state.currentTrackingStep),
            _buildTimelineStep('Delivered Securely', 'Package signed and completed', 4, state.currentTrackingStep),
            const SizedBox(height: 48),
            Center(
              child: ElevatedButton.icon(
                onPressed: () {
                  state.triggerTrackingDemo();
                },
                icon: const Icon(Icons.refresh),
                label: const Text('Update Carrier Tracking (Demo)'),
              ),
            )
          ],
        ),
      ),
    );
  }

  Widget _buildTimelineStep(String title, String subtitle, int stepIdx, int currentStep) {
    final isDone = stepIdx <= currentStep;
    final isNext = stepIdx == currentStep + 1;

    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Column(
          children: [
            Container(
              height: 24,
              width: 24,
              decoration: BoxDecoration(
                color: isDone ? const Color(0xFF22C55E) : isNext ? const Color(0xFF2563EB) : Colors.white,
                shape: BoxShape.circle,
                border: Border.all(
                  color: isDone ? Colors.transparent : isNext ? const Color(0xFF2563EB) : Colors.grey.withOpacity(0.5),
                  width: 2,
                ),
              ),
              child: isDone
                  ? const Icon(Icons.check, color: Colors.white, size: 14)
                  : null,
            ),
            if (stepIdx < 4)
              Container(
                height: 50,
                width: 2,
                color: isDone ? const Color(0xFF22C55E) : Colors.black12,
              )
          ],
        ),
        const SizedBox(width: 18),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: isDone ? const Color(0xFF0F172A) : Colors.black38,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                subtitle,
                style: const TextStyle(color: Colors.grey, fontSize: 11),
              ),
            ],
          ),
        )
      ],
    );
  }
}

// ==========================================
// PROFILE SCREEN
// ==========================================

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final appState = AppState();

    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      body: SingleChildScrollView(
        padding: const EdgeInsets.only(bottom: 110),
        child: Column(
          children: [
            // Premium Header with Profile Details
            Container(
              padding: const EdgeInsets.only(top: 60, bottom: 28, left: 24, right: 24),
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFF0F172A), Color(0xFF1E293B)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.vertical(bottom: Radius.circular(32)),
              ),
              child: Row(
                children: [
                  const CircleAvatar(
                    backgroundImage: NetworkImage('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'),
                    radius: 36,
                  ),
                  const SizedBox(width: 18),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Aether Member',
                          style: TextStyle(color: Color(0xFFF97316), fontSize: 9, letterSpacing: 1.5, fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: 4),
                        const Text(
                          'Isabella Salcedo',
                          style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          appState.currentUser ?? 'salcedozdesing@gmail.com',
                          style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 12),
                        ),
                      ],
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.qr_code_2_rounded, color: Colors.white),
                    onPressed: () {},
                  )
                ],
              ),
            ),
            const SizedBox(height: 12),
            // Profile Actions
            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                children: [
                  _buildProfileTile(
                    context,
                    Icons.local_shipping_outlined,
                    'Delivery Tracking',
                    'Aether dispatch status center',
                    () {
                      Navigator.push(
                        context,
                        PageRouteBuilder(
                          pageBuilder: (_, __, ___) => const OrderTrackingScreen(),
                        ),
                      );
                    },
                  ),
                  _buildProfileTile(
                    context,
                    Icons.history_toggle_off,
                    'Order History',
                    'Verified bills & items',
                    () {},
                  ),
                  _buildProfileTile(
                    context,
                    Icons.discount_outlined,
                    'Saved Coupons',
                    'PREMIUM20 code is active',
                    () {},
                  ),
                  _buildProfileTile(
                    context,
                    Icons.contact_support_outlined,
                    'Concierge Care',
                    '24/7 dedicated live assistance',
                    () {},
                  ),
                  _buildProfileTile(
                    context,
                    Icons.logout_rounded,
                    'Disconnect Account',
                    'Disconnect from terminal securely',
                    () {
                      appState.logout();
                      Navigator.pushAndRemoveUntil(
                        context,
                        PageRouteBuilder(
                          pageBuilder: (_, __, ___) => const AnimatedLoginScreen(),
                        ),
                        (route) => false,
                      );
                    },
                    isDanger: true,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildProfileTile(
    BuildContext context,
    IconData icon,
    String title,
    String description,
    VoidCallback onTap, {
    bool isDanger = false,
  }) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.005),
            blurRadius: 10,
          )
        ],
      ),
      child: ListTile(
        onTap: onTap,
        leading: Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: isDanger ? const Color(0xFFEF4444).withOpacity(0.1) : const Color(0xFF2563EB).withOpacity(0.06),
            shape: BoxShape.circle,
          ),
          child: Icon(icon, color: isDanger ? const Color(0xFFEF4444) : const Color(0xFF2563EB)),
        ),
        title: Text(title, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14, color: isDanger ? const Color(0xFFEF4444) : Colors.black85)),
        subtitle: Text(description, style: const TextStyle(fontSize: 11, color: Colors.grey)),
        trailing: const Icon(Icons.chevron_right, color: Colors.black26),
      ),
    );
  }
}
`;
