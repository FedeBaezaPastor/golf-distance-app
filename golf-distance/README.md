# Distancia Golf Costa Azahar

Aplicación móvil para medir distancias a los hoyos del Club de Golf Costa Azahar.

## Características

- 📍 Geolocalización GPS en tiempo real
- ⛳ Dos recorridos: Rojo y Verde (9 hoyos cada uno)
- 📏 Cálculo preciso de distancia usando fórmula Haversine
- 🎯 Diferenciación automática: centro de green (Par 3) vs entrada de green (otros pares)
- 🟢 Diseño en colores verde golf con logo del club

## Estructura de la App

1. **Pantalla de Inicio**: Logo del club y botón "Empezar medición"
2. **Selección de Recorrido**: Elegir entre Recorrido Rojo o Verde
3. **Selección de Hoyo**: Elegir hoyo del 1 al 9
4. **Medición**: Botón para calcular distancia desde posición GPS actual

## Datos de los Recorridos

### Recorrido Rojo
- Hoyo 1: Par 4 - 39.988322, 0.022657
- Hoyo 2: Par 5 - 39.985194, 0.020813
- Hoyo 3: Par 4 - 39.983990, 0.018985
- Hoyo 4: Par 3 - 39.985240, 0.019958
- Hoyo 5: Par 4 - 39.987076, 0.020533
- Hoyo 6: Par 5 - 39.990130, 0.022704
- Hoyo 7: Par 4 - 39.988225, 0.020756
- Hoyo 8: Par 3 - 39.991340, 0.022917
- Hoyo 9: Par 3 - 39.991482, 0.023704

### Recorrido Verde
- Hoyo 1: Par 4 - 39.988322, 0.022657
- Hoyo 2: Par 5 - 39.985194, 0.020813
- Hoyo 3: Par 4 - 39.983990, 0.018985
- Hoyo 4: Par 4 - 39.987076, 0.020533
- Hoyo 5: Par 5 - 39.990130, 0.022704
- Hoyo 6: Par 4 - 39.988225, 0.020756
- Hoyo 7: Par 3 - 39.988867, 0.020615
- Hoyo 8: Par 4 - 39.991340, 0.022917
- Hoyo 9: Par 3 - 39.991482, 0.023704

## Tecnologías Utilizadas

- **React Native** con **Expo**
- **expo-location**: Geolocalización GPS
- **geolib**: Cálculo de distancias geográficas
- **React Navigation**: Navegación entre pantallas

## Desarrollo Local

### Instalar Expo Go en tu móvil
1. Descarga **Expo Go** desde Google Play Store (Android) o App Store (iOS)
2. Ejecuta `npm start` en el proyecto
3. Escanea el código QR con Expo Go

### Comandos
```bash
npm install        # Instalar dependencias
npm start          # Iniciar servidor de desarrollo
```

## Generar APK para Android

### Opción 1: Build con EAS (Expo Application Services)

#### Paso 1: Instalar EAS CLI
```bash
npm install -g eas-cli
```

#### Paso 2: Iniciar sesión en Expo
```bash
eas login
```
Si no tienes cuenta, créala en https://expo.dev

#### Paso 3: Configurar el proyecto
```bash
eas build:configure
```

#### Paso 4: Generar APK
```bash
eas build --platform android --profile preview
```

El proceso tardará unos minutos. Al finalizar, recibirás un enlace para descargar el APK.

### Opción 2: Build con GitHub Actions (Recomendado)

#### Paso 1: Crear repositorio en GitHub
```bash
git init
git add .
git commit -m "Initial commit: Golf Distance App"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/golf-distance-app.git
git push -u origin main
```

#### Paso 2: Configurar secretos en GitHub
1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Añade estos secretos:
   - `EXPO_TOKEN`: Token de Expo (obtenerlo desde https://expo.dev/accounts/[username]/settings/access-tokens)

#### Paso 3: Crear workflow de GitHub Actions

Crea el archivo `.github/workflows/build.yml`:

```yaml
name: Build Android APK

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20

      - name: Setup Expo
        uses: expo/expo-github-action@v8
        with:
          expo-version: latest
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: Install dependencies
        run: npm install

      - name: Build Android APK
        run: eas build --platform android --profile preview --non-interactive

      - name: Upload APK
        uses: actions/upload-artifact@v3
        with:
          name: golf-distance-app
          path: "*.apk"
```

#### Paso 4: Ejecutar el build
1. Haz push a GitHub
2. Ve a la pestaña "Actions" en tu repositorio
3. El workflow se ejecutará automáticamente
4. Descarga el APK desde "Artifacts"

## Instalación en Android

1. Descarga el archivo APK generado
2. En tu móvil Android, ve a **Configuración → Seguridad**
3. Activa **"Instalar aplicaciones de fuentes desconocidas"**
4. Abre el archivo APK descargado
5. Sigue las instrucciones de instalación

## Permisos Necesarios

La aplicación solicitará permiso para:
- **Ubicación GPS**: Necesario para calcular distancias desde tu posición actual

## Uso de la Aplicación

1. Abre la app
2. Presiona **"Empezar medición"**
3. Selecciona el recorrido (Rojo o Verde)
4. Selecciona el hoyo actual (1-9)
5. Presiona **"Medición"** para calcular la distancia
6. La app mostrará la distancia en metros a centro/entrada de green

## Notas Importantes

- Requiere conexión GPS activa
- La precisión depende de la señal GPS del dispositivo
- Las coordenadas de los hoyos están fijas en el código
- Funciona offline una vez instalada (solo necesita GPS)

## Autor

Aplicación desarrollada para el Club de Golf Costa Azahar
