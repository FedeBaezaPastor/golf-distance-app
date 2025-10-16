# Golf Distance Costa Azahar - Mobile Application

## Overview

A React Native mobile application built with Expo that helps golfers measure distances to holes at Club de Golf Costa Azahar. The app uses GPS location services to calculate real-time distances from the player's current position to specific holes on two different 9-hole courses (Recorrido Rojo and Recorrido Verde). It differentiates measurement points based on hole type: center of green for Par 3s, entrance to green for other pars.

## User Preferences

Preferred communication style: Simple, everyday language (Spanish).

## Recent Changes

**October 16, 2025**: Initial application development completed
- Created React Native app with Expo
- Implemented GPS-based distance measurement
- Added two 9-hole courses (Rojo and Verde) with fixed GPS coordinates
- Integrated Club de Golf Costa Azahar branding and logo
- Configured EAS build for APK generation
- Set up GitHub Actions workflow for automated builds
- Created comprehensive installation guide in Spanish

## System Architecture

### Frontend Architecture

**Framework**: React Native with Expo SDK ~54.0.13
- **Navigation System**: Stack-based navigation using `@react-navigation/native` and `@react-navigation/native-stack`
- **Screen Flow**: 
  1. Home Screen (brand introduction with club logo)
  2. Course Selection Screen (choose between Rojo/Verde courses)
  3. Hole Selection Screen (select hole 1-9)
  4. Measurement Screen (GPS distance calculation)

**UI Design Pattern**: 
- Golf-themed green color scheme (#2d5f2e primary color)
- Touch-optimized large buttons for outdoor use
- Portrait-only orientation for single-handed operation
- Material design elevation/shadows for depth

**State Management**: Component-level useState hooks (no global state management needed for this simple flow)

### Data Architecture

**Static Data Storage**: Course data stored in JavaScript module (`data/courses.js`)
- Structured as nested objects: courses → holes → coordinates
- Each hole contains: number, par value, latitude, longitude
- Two courses: 'rojo' and 'verde', each with 9 holes

**Data Structure**:
```
courses = {
  [courseId]: {
    name: string,
    holes: [{
      number: int,
      par: int,
      lat: float,
      lng: float
    }]
  }
}
```

### Location Services

**GPS Provider**: expo-location library
- Uses high-accuracy GPS positioning
- Requires foreground location permissions (iOS and Android)
- Permission handling with graceful degradation and user alerts

**Distance Calculation**: 
- Uses Haversine formula via `geolib` library
- Calculates great-circle distance between two GPS coordinates
- Returns distance in meters between user position and target hole

**Measurement Logic**:
- Par 3 holes: measure to center of green
- Par 4/5 holes: measure to entrance/front of green
- (Note: Current implementation uses same coordinates; logic prepared for future differentiation)

### Platform Configuration

**iOS Configuration**:
- Bundle identifier: `com.costaazahar.golfdistance`
- Location permission message in Info.plist
- Tablet support enabled

**Android Configuration**:
- Package name: `com.costaazahar.golfdistance`
- Permissions: ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION
- APK build type for distribution

**Build System**: 
- Uses EAS Build for native builds
- Configured for development, preview (internal APK), and production builds
- New React Native architecture enabled

## Project Structure

```
golf-distance/
├── .github/
│   └── workflows/
│       └── build.yml          # GitHub Actions for APK build
├── assets/
│   └── images/
│       └── logo.jpg           # Club logo
├── data/
│   └── courses.js             # Course coordinates data
├── screens/
│   ├── HomeScreen.js          # Welcome screen with logo
│   ├── CourseSelectionScreen.js  # Choose Rojo/Verde
│   ├── HoleSelectionScreen.js    # Choose hole 1-9
│   └── MeasurementScreen.js      # GPS measurement
├── App.js                     # Main navigation setup
├── app.json                   # Expo configuration
├── eas.json                   # EAS Build configuration
├── package.json               # Dependencies
├── README.md                  # Technical documentation
└── GUIA_INSTALACION.md       # Spanish installation guide
```

## External Dependencies

### Core Framework
- **Expo SDK (~54.0.13)**: Cross-platform mobile development framework
- **React (19.1.0)**: UI library
- **React Native (0.81.4)**: Native mobile runtime

### Navigation
- **@react-navigation/native (^7.1.18)**: Navigation framework
- **@react-navigation/native-stack (^7.3.28)**: Stack navigator
- **react-native-screens (^4.17.1)**: Native screen optimization
- **react-native-safe-area-context (^5.6.1)**: Safe area handling

### Location & Measurement
- **expo-location (^19.0.7)**: GPS location services (requires device location permissions)
- **geolib (^3.3.4)**: Geospatial calculations (Haversine distance formula)

### UI Components
- **expo-status-bar (~3.0.8)**: Status bar styling

### Development & Build
- **EAS Build**: Expo Application Services for native builds and distribution
- **GitHub Actions**: Automated APK build workflow
- No backend server or database required
- No authentication system
- No cloud services or APIs

## Course Data

### Recorrido Rojo (Red Course)
- Hole 1: Par 4 - 39.988322, 0.022657
- Hole 2: Par 5 - 39.985194, 0.020813
- Hole 3: Par 4 - 39.983990, 0.018985
- Hole 4: Par 3 - 39.985240, 0.019958
- Hole 5: Par 4 - 39.987076, 0.020533
- Hole 6: Par 5 - 39.990130, 0.022704
- Hole 7: Par 4 - 39.988225, 0.020756
- Hole 8: Par 3 - 39.991340, 0.022917
- Hole 9: Par 3 - 39.991482, 0.023704

### Recorrido Verde (Green Course)
- Hole 1: Par 4 - 39.988322, 0.022657
- Hole 2: Par 5 - 39.985194, 0.020813
- Hole 3: Par 4 - 39.983990, 0.018985
- Hole 4: Par 4 - 39.987076, 0.020533
- Hole 5: Par 5 - 39.990130, 0.022704
- Hole 6: Par 4 - 39.988225, 0.020756
- Hole 7: Par 3 - 39.988867, 0.020615
- Hole 8: Par 4 - 39.991340, 0.022917
- Hole 9: Par 3 - 39.991482, 0.023704

## APK Build Process

### Method 1: GitHub Actions (Recommended)
1. User needs Expo account and access token
2. Token must be added as GitHub secret: `EXPO_TOKEN`
3. Push code to GitHub repository
4. Workflow automatically builds APK on push to main
5. Download APK from GitHub Actions artifacts

### Method 2: Local EAS Build
1. Install EAS CLI: `npm install -g eas-cli`
2. Login: `eas login`
3. Build: `eas build --platform android --profile preview`
4. Download APK from provided link

## Installation on Android

1. Download generated APK file
2. Enable "Install from unknown sources" in Android settings
3. Open APK file on device
4. Follow installation prompts
5. Grant location permissions when prompted

## Usage Flow

1. Open app → See logo and "Empezar medición" button
2. Tap button → Choose course (Rojo or Verde)
3. Select course → Choose hole (1-9)
4. Select hole → Tap "Medición" button
5. App calculates distance → Shows "X mts a centro/entrada de green"

## Future Enhancements (Not Implemented)

- Automatic hole progression tracking
- Round history with distance records
- Course layout map visualization
- Wind and weather conditions
- Export round statistics
