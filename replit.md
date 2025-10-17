# Golf Distance Costa Azahar - Mobile Application

## Overview

A React Native mobile application built with Expo that helps golfers measure distances to holes at Club de Golf Costa Azahar. The app uses GPS location services to calculate real-time distances from the player's current position to specific holes on two different 9-hole courses (Recorrido Rojo and Recorrido Verde). It differentiates measurement points based on hole type: center of green for Par 3s, entrance to green for other pars.

## User Preferences

Preferred communication style: Simple, everyday language (Spanish).

## Recent Changes

**October 17, 2025**: Major UI/UX redesign completed
- Changed initial color scheme from green to blue (#1976d2)
- Implemented dynamic color theming (red #c41e3a / green #4caf50 based on course selection)
- StatusBar color synchronization: blue initially, changes to course color after selection
- Redesigned navigation: removed logo from home screen
- Course selection: square buttons (150x150) for Rojo/Verde
- Hole selection: 3x3 grid layout (no scroll)
- Added arrow-based hole navigation (◄ ►) with smart positioning:
  - Previous hole (◄) always on left side
  - Next hole (►) always on right side
  - Hole 1: only ► on right
  - Hole 9: only ◄ on left

**October 16, 2025**: Initial application development completed
- Created React Native app with Expo
- Implemented GPS-based distance measurement
- Added two 9-hole courses (Rojo and Verde) with fixed GPS coordinates
- Integrated Club de Golf Costa Azahar branding
- Configured EAS build for APK generation
- Set up GitHub Actions workflow for automated builds
- Created comprehensive installation guide in Spanish

## System Architecture

### Frontend Architecture

**Framework**: React Native with Expo SDK ~54.0.13
- **Navigation System**: Stack-based navigation using `@react-navigation/native` and `@react-navigation/native-stack`
- **Screen Flow**: 
  1. Home Screen (blue theme, no logo, "Empezar medición" button)
  2. Course Selection Screen (blue theme, square buttons for Rojo/Verde courses)
  3. Hole Selection Screen (course-colored theme, 3x3 grid for holes 1-9)
  4. Measurement Screen (course-colored theme, GPS distance calculation, arrow navigation)

**UI Design Pattern**: 
- Initial blue color scheme (#1976d2)
- Dynamic theming: red (#c41e3a) for Rojo, green (#4caf50) for Verde
- StatusBar color syncs with theme (blue → course color)
- Touch-optimized large buttons for outdoor use
- Portrait-only orientation for single-handed operation
- Material design elevation/shadows for depth
- Arrow navigation (◄ ►) positioned by direction for intuitive hole switching

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
- Verified accuracy: ~4545m vs Google Maps 4540m (99% accurate)

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
- EAS Project ID: f3f52237-ffba-4a82-b701-708e1cb26f36
- Configured for development, preview (internal APK), and production builds
- New React Native architecture enabled
- Android Keystore generated and configured

## Project Structure

```
golf-distance/
├── .github/
│   └── workflows/
│       └── build.yml          # GitHub Actions for APK build (updated to v4)
├── assets/
│   └── images/
│       └── logo.jpg           # Club logo (not displayed in current version)
├── data/
│   └── courses.js             # Course coordinates data
├── screens/
│   ├── HomeScreen.js          # Blue welcome screen, no logo
│   ├── CourseSelectionScreen.js  # Blue theme, square course buttons
│   ├── HoleSelectionScreen.js    # Course-colored, 3x3 grid, no scroll
│   └── MeasurementScreen.js      # Course-colored, GPS + arrow navigation
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
- **GitHub Actions**: Automated APK build workflow (updated to v4 actions)
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
4. Download APK from Expo dashboard (https://expo.dev)

## Installation on Android

1. Download generated APK file
2. Enable "Install from unknown sources" in Android settings
3. Open APK file on device
4. Follow installation prompts
5. Grant location permissions when prompted

## Usage Flow

1. Open app → Blue screen with "Empezar medición" button
2. Tap button → Blue screen, choose course (Rojo or Verde in square buttons)
3. Select course → Screen changes to course color, 3x3 grid to choose hole (1-9)
4. Select hole → Screen in course color, tap "Medición" button for distance
5. Navigate between holes using arrow buttons (◄ previous, ► next)
6. App shows "X mts a centro/entrada de green"

## UI Color Scheme

- **Initial/Unselected State**: Blue (#1976d2)
- **Recorrido Rojo**: Red (#c41e3a)
- **Recorrido Verde**: Green (#4caf50)
- **StatusBar**: Syncs with current theme color

## Future Enhancements (Not Implemented)

- Automatic hole progression tracking
- Round history with distance records
- Course layout map visualization
- Wind and weather conditions
- Export round statistics
