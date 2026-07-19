# Food Allergy App

A mobile app to help users with food allergies track and identify allergens in foods.

## Features

- ✅ Track your allergies
- ✅ Search food database
- ✅ Check ingredients for allergens
- ✅ Log meals and track reactions
- ✅ Emergency contacts

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Easy development and deployment
- **JavaScript** - Programming language

## Getting Started

### Prerequisites

- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- Expo CLI - Install with: `npm install -g expo-cli`
- A smartphone or emulator

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/wolfc7154-pixel/food-allergy-app.git
   cd food-allergy-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   expo start
   ```

4. Open on your phone:
   - iOS: Press `i` in terminal
   - Android: Press `a` in terminal
   - Or scan the QR code with Expo Go app

## Project Structure

```
food-allergy-app/
├── App.js                 # Main app file
├── screens/               # App screens
│   ├── HomeScreen.js
│   ├── AllergiesScreen.js
│   └── ScannerScreen.js
├── components/            # Reusable components
│   └── AllergenChecker.js
├── data/                  # App data
│   └── allergenDatabase.js
├── package.json           # Dependencies
└── README.md              # This file
```

## How to Use

### For Beginners

1. Start with `App.js` - This is your main file
2. Read the comments - Every file has comments explaining the code
3. Modify the screens - Change colors, text, and features
4. Test on your phone - Use Expo Go app to see changes instantly

### Key Files to Learn

- `App.js` - Navigation and main structure
- `screens/HomeScreen.js` - Home page
- `data/allergenDatabase.js` - Food and allergen data

## Next Steps

1. ✅ Install and run the app
2. ✅ Explore each screen
3. ✅ Customize colors and text
4. ✅ Add more foods to the database
5. ✅ Connect to a real food/barcode API

## Useful Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [JavaScript Basics](https://javascript.info/)
- [Food Database APIs](https://www.edamam.com/) (for real food data)

## Common Issues

**Problem: "expo command not found"**
- Solution: `npm install -g expo-cli`

**Problem: App won't load**
- Solution: Clear cache with `expo start --clear`

**Problem: Can't see changes**
- Solution: Save file and wait 2-3 seconds, app will refresh

## Support

Stuck? Check:
1. The comments in the code files
2. Expo documentation
3. React Native community forums

## Future Features

- 📱 Barcode scanner
- 🏥 Emergency contacts
- 📊 Meal logging and history
- 🏪 Restaurant allergen menus
- 👥 Community tips

Good luck! 🚀
