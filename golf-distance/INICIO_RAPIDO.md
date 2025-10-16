# 🚀 Inicio Rápido - App Golf Costa Azahar

## Probar la App AHORA (sin generar APK)

### 1. Descarga Expo Go en tu móvil
- **Android**: Google Play Store → busca "Expo Go"
- **iOS**: App Store → busca "Expo Go"

### 2. La app ya está corriendo
- El servidor ya está iniciado en Replit
- Puedes ver un código QR en la consola

### 3. Escanea el QR
- Abre Expo Go en tu móvil
- Toca "Scan QR code"
- Apunta a la pantalla de Replit donde está el código QR
- ¡La app se cargará automáticamente!

---

## Generar APK (para distribución)

### Rápido: Método GitHub Actions

1. **Crea cuenta en Expo** → https://expo.dev (gratis)

2. **Obtén tu token**:
   - Perfil → Access Tokens → Create Token
   - Copia el token

3. **Sube a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "App Golf Costa Azahar"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/golf-app.git
   git push -u origin main
   ```

4. **Configura el secreto**:
   - Tu repo en GitHub → Settings → Secrets → Actions
   - New secret: nombre `EXPO_TOKEN`, valor: tu token de Expo

5. **Ejecuta el build**:
   - Pestaña Actions → "Build Android APK"
   - Run workflow
   - Espera 15 minutos
   - Descarga APK de Artifacts

### Manual: Método EAS CLI

```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

---

## 📱 Instalar APK en Android

1. Descargar APK en tu móvil
2. Configuración → Seguridad → Activar "Orígenes desconocidos"
3. Abrir archivo APK
4. Instalar
5. Dar permiso de ubicación

---

## 🎯 Cómo usar la app

1. Abrir app → "Empezar medición"
2. Elegir recorrido (Rojo/Verde)
3. Elegir hoyo (1-9)
4. Tocar "Medición"
5. Ver distancia en metros

---

## 📚 Más información

- **GUIA_INSTALACION.md** → Guía completa paso a paso
- **RESUMEN_PROYECTO.md** → Qué incluye el proyecto
- **README.md** → Documentación técnica

---

**¡Listo! Tu app de golf ya está funcionando.** 🏌️‍♂️⛳
