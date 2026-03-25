# 🍔 FDW - Food Delivery Web App

A modern, fast, and user-friendly **Food Delivery Web Application** built with cutting-edge web technologies. Order your favorite food with just a few clicks!

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-19.2-cyan.svg)
![Vite](https://img.shields.io/badge/Vite-7.3-purple.svg)

---

## ✨ Features

🎯 **Core Features:**
- 🏠 **Browse Food Items** - Explore a wide variety of dishes across multiple categories
- 🔍 **Smart Search** - Find dishes by name instantly
- 🛒 **Shopping Cart** - Add/remove items and manage quantities with real-time cart updates
- 📊 **Cart Management** - Increment/decrement quantities, remove items, view totals
- 💰 **Dynamic Pricing** - Real-time subtotal, tax calculations, and delivery charges
- 🎨 **Responsive Design** - Beautiful UI that works on all devices
- 🍽️ **Food Categories** - Filter dishes by breakfast, soups, mains, desserts, and more
- 🥗 **Veg/Non-Veg Filter** - Easy identification of vegetarian and non-vegetarian options
- 🔔 **Toast Notifications** - Get instant feedback when items are added to cart

---

## 📸 Screenshots

### 1️⃣ Home Page & Food Browse
![Screenshot 1](./screenshots/screenshot-11.png)
*Browse all available food items with beautiful card layouts*

### 2️⃣ Food Categories
![Screenshot 2](./screenshots/screenshot-22.png)
*Filter food by categories like Breakfast, Soups, Mains, etc.*

### 3️⃣ Search Functionality
![Screenshot 3](./screenshots/screenshot-33.png)
*Search for your favorite dishes in real-time*

### 4️⃣ Shopping Cart
![Screenshot 4](./screenshots/screenshot-44.png)
*Manage your cart with quantity controls*

### 5️⃣ Cart Checkout
![Screenshot 5](./screenshots/screenshot-55.png)
*Review order details with taxes and delivery charges*

### 6️⃣ Order Summary
![Screenshot 6](./screenshots/screenshot-66.png)
*Final order summary before placing order*

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | React 19.2 |
| **State Management** | Redux Toolkit 2.11 |
| **Styling** | Tailwind CSS 4.2 |
| **Build Tool** | Vite 7.3 |
| **Icons** | React Icons 5.6 |
| **Notifications** | React Toastify 11.0 |
| **Package Manager** | npm |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the Repository**
	```bash
	git clone https://github.com/yourusername/fdw.git
	cd fdw
	```

2. **Install Dependencies**
	```bash
	npm install
	```

3. **Start Development Server**
	```bash
	npm run dev
	```
	The app will open at `http://localhost:5173`

4. **Build for Production**
	```bash
	npm run build
	```

5. **Preview Production Build**
	```bash
	npm run preview
	```

---

## 📂 Project Structure

```
fdw/
├── src/
│   ├── components/
│   │   ├── Card.jsx           # Food item card component
│   │   ├── Card2.jsx          # Cart item component
│   │   └── Nav.jsx            # Navigation bar with search & cart
│   ├── pages/
│   │   └── Home.jsx           # Main home page
│   ├── context/
│   │   └── UserContext.jsx    # Global user context (search, cart visibility)
│   ├── redux/
│   │   ├── cartSlice.js       # Redux slice for cart state
│   │   └── store.js           # Redux store configuration
│   ├── assets/                # Food images (image1-image25)
│   ├── App.jsx                # Main App component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint rules
└── index.html                 # HTML template
```

---

## 🚀 How to Use

### Browse & Add Items
1. Open the app and explore food items on the home page
2. Click on **category cards** to filter by type (Breakfast, Soups, etc.)
3. Click **"Add to dish"** button to add items to your cart
4. See the success notification confirming the item was added

### Manage Cart
1. Click the **shopping bag icon** in the navigation bar
2. Adjust quantities using **+** and **-** buttons
3. Items automatically update in cart
4. View **subtotal, taxes, and delivery fees**
5. Remove items using the **delete icon**

### Search Items
1. Use the **search bar** in the navigation
2. Type the name of any dish
3. Results are filtered in real-time
4. Click "Add to dish" to order

---

## 🎮 Redux State Management

### Cart Actions
```javascript
// Add item to cart
dispatch(AddItem({ id, name, price, image, qty }))

// Increment quantity
dispatch(IncrementQty({ id }))

// Decrement quantity
dispatch(DecrementQty({ id }))

// Remove from cart
dispatch(RemoveItem(id))
```

### Cart State Structure
```javascript
[
  {
	 id: 1,
	 name: "Pancakes",
	 price: 499,
	 image: imageUrl,
	 qty: 2
  },
  // ... more items
]
```

---

## 📋 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🎯 Key Components

### `Card.jsx`
Displays individual food items with add-to-cart functionality
- Shows food image, name, price, type (veg/non-veg)
- Dispatches AddItem action on button click

### `Card2.jsx`
Shows items in the shopping cart
- Manages quantity increment/decrement
- Shows item details and prices
- Delete functionality

### `Nav.jsx`
Navigation bar component
- Real-time search functionality
- Shopping bag with cart count
- Logo and branding

### `Home.jsx`
Main page layout
- Displays food categories
- Shows food catalog
- Renders shopping cart panel
- Calculates totals, taxes, delivery fees

---

## 💡 Features to Implement (Future)

- [ ] User authentication & login
- [ ] Order history
- [ ] Payment gateway integration
- [ ] Delivery tracking
- [ ] User reviews & ratings
- [ ] Restaurant filters
- [ ] Favorites/Wishlist
- [ ] Multiple addresses
- [ ] Promo codes & discounts
- [ ] Admin dashboard

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Nikhil Dhuriya**
- GitHub: [@yourusername](https://github.com/Nikhil06052005)
- Email: nikhilkashyap09793000@gmail.com

---

## 📞 Support

If you face any issues or have questions, feel free to:
- Open an issue on GitHub
- Contact via email
- Check the documentation

---

## 🎉 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Built with [Vite](https://vitejs.dev/)

---

**Made with ❤️ and ☕**
