# Guía de Instalación - App Distancia Golf Costa Azahar

## 📱 Generar APK para Android

### Método 1: Usar GitHub Actions (Recomendado)

#### Paso 1: Crear cuenta en Expo (si no tienes)
1. Ve a https://expo.dev
2. Haz clic en "Sign Up"
3. Crea tu cuenta (gratis)

#### Paso 2: Obtener Token de Expo
1. Inicia sesión en https://expo.dev
2. Ve a tu perfil (esquina superior derecha)
3. Click en "Access Tokens"
4. Click en "Create Token"
5. Dale un nombre (por ejemplo: "GitHub Actions")
6. Copia el token generado (guárdalo, no se volverá a mostrar)

#### Paso 3: Crear repositorio en GitHub
1. Ve a https://github.com
2. Click en "New repository"
3. Nombre: `golf-distance-app` (o el que prefieras)
4. Marca como "Public" o "Private"
5. Click en "Create repository"

#### Paso 4: Subir el código a GitHub
Ejecuta estos comandos en la terminal dentro de la carpeta `golf-distance`:

```bash
git init
git add .
git commit -m "Primera versión de la app de golf"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/golf-distance-app.git
git push -u origin main
```

(Reemplaza `TU_USUARIO` con tu usuario de GitHub)

#### Paso 5: Configurar el Token en GitHub
1. Ve a tu repositorio en GitHub
2. Click en "Settings" (configuración)
3. En el menú izquierdo: "Secrets and variables" → "Actions"
4. Click en "New repository secret"
5. Name: `EXPO_TOKEN`
6. Secret: pega el token que copiaste de Expo
7. Click en "Add secret"

#### Paso 6: Ejecutar el Build
1. En tu repositorio, ve a la pestaña "Actions"
2. Verás el workflow "Build Android APK"
3. Click en "Run workflow" → "Run workflow"
4. Espera 10-15 minutos mientras se genera el APK
5. Una vez completado, descarga el APK desde "Artifacts"

### Método 2: Build Local con EAS CLI

#### Paso 1: Instalar EAS CLI
```bash
npm install -g eas-cli
```

#### Paso 2: Iniciar sesión
```bash
eas login
```
Ingresa tus credenciales de Expo

#### Paso 3: Generar APK
```bash
cd golf-distance
eas build --platform android --profile preview
```

Sigue las instrucciones en pantalla. Al finalizar, recibirás un enlace para descargar el APK.

## 📲 Instalar APK en tu Móvil Android

### Opción A: Descarga directa en el móvil
1. Descarga el APK directamente en tu móvil
2. Abre la app "Archivos" o "Descargas"
3. Busca el archivo `golf-distance-app.apk`
4. Toca el archivo
5. Si aparece advertencia de seguridad:
   - Ve a Configuración → Seguridad
   - Activa "Orígenes desconocidos" o "Instalar apps desconocidas"
6. Vuelve y toca el APK
7. Confirma la instalación

### Opción B: Transferir desde PC
1. Descarga el APK en tu computadora
2. Conecta tu móvil al PC con cable USB
3. Copia el archivo APK a la carpeta "Descargas" del móvil
4. Desconecta el móvil
5. Abre "Archivos" en el móvil
6. Busca y toca el archivo APK
7. Sigue las instrucciones de instalación

## 🎯 Cómo usar la App

1. **Abre la app** - Verás el logo del Club de Golf Costa Azahar
2. **Presiona "Empezar medición"**
3. **Selecciona el recorrido:**
   - Recorrido Rojo (botón rojo)
   - Recorrido Verde (botón verde)
4. **Selecciona el hoyo** que estás jugando (1-9)
5. **Presiona "Medición"** para calcular la distancia
6. La app te mostrará:
   - Si es Par 3: "X mts a centro de green"
   - Si es Par 4 o 5: "X mts a entrada de green"

## ⚠️ Requisitos y Permisos

### Requisitos del móvil:
- Android 5.0 o superior
- GPS activo
- Espacio: ~50 MB

### Permisos necesarios:
- **Ubicación GPS**: Para calcular tu distancia al hoyo

La app te pedirá permiso la primera vez que la uses. Debes aceptar para que funcione.

## 🔧 Solución de Problemas

### La app no instala
- Verifica que has activado "Orígenes desconocidos"
- Asegúrate de tener suficiente espacio (mínimo 100 MB libres)

### No calcula la distancia
- Verifica que el GPS está activado
- Asegúrate de haber dado permiso de ubicación a la app
- Sal al exterior si estás en un edificio (mejor señal GPS)

### La distancia no es precisa
- Espera unos segundos hasta que el GPS se estabilice
- La precisión mejora con cielo despejado
- Intenta presionar "Medición" de nuevo

## 📝 Notas Importantes

- ✅ La app funciona **offline** (no necesita internet)
- ✅ Solo necesita **GPS activo**
- ✅ Las coordenadas de los hoyos están guardadas en la app
- ✅ Puedes usar la app tantas veces como quieras sin costo

## 🔄 Actualizaciones

Para actualizar la app en el futuro:
1. Genera un nuevo APK con una versión superior en `app.json`
2. Desinstala la versión antigua
3. Instala la nueva versión

## 📞 Soporte

Si tienes problemas con la instalación o uso de la app, contacta con el administrador del sistema.

---

**Club de Golf Costa Azahar - App de Medición de Distancias**
