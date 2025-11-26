# 🎮 Dextrality Network

Sitio web oficial del servidor de Minecraft **Dextrality Network** - Java & Bedrock.

## 🚀 Tecnologías

- **React 18** - Librería UI
- **Vite** - Build tool ultra rápido
- **Tailwind CSS** - Estilos utilitarios
- **ESLint** - Linting de código

## 📁 Estructura del Proyecto

```
Dextrality-Web/
├── public/                    # Archivos estáticos
│   ├── Banner.png            # Banner principal
│   ├── logo.png              # Logo del servidor
│   ├── logo_fin_fondo.png    # Logo sin fondo
│   ├── earth.png             # Imagen modo Earth
│   ├── 1910.png              # Imagen modo 1910
│   └── images/team/          # Fotos del equipo
│
├── src/
│   ├── main.jsx              # Punto de entrada
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globales
│   ├── load.css              # Estilos del loader
│   │
│   └── components/
│       ├── Navbar/           # Barra de navegación
│       │   └── Navbar.jsx
│       │
│       ├── HeroSection/      # Sección principal (hero)
│       │   ├── HeroSection.jsx
│       │   └── StatCard.jsx  # Tarjetas de estadísticas
│       │
│       ├── NewsSection/      # Sección de noticias
│       │   └── NewsSection.jsx
│       │
│       ├── GameModesSection/ # Modalidades de juego
│       │   └── GameModesSection.jsx
│       │
│       ├── TeamSection/      # Equipo del servidor
│       │   └── TeamSection.jsx  # Carrusel infinito
│       │
│       ├── Footer/           # Pie de página
│       │   └── Footer.jsx
│       │
│       ├── LoadingScreen/    # Pantalla de carga
│       │   ├── LoadingScreen.jsx
│       │   └── MinecraftLoader.jsx  # Loader animado
│       │
│       └── Icons/            # Iconos SVG
│           └── index.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

## 🎯 Secciones

| Sección         | Descripción                                 |
| --------------- | ------------------------------------------- |
| **Hero**        | Banner, slogan, botón Discord, estadísticas |
| **Noticias**    | Actualizaciones y eventos del servidor      |
| **Modalidades** | Earth, Vanilla, 1910, Skyblock              |
| **Equipo**      | Carrusel con miembros del staff             |
| **Footer**      | Redes sociales e información                |

## 👥 Roles del Equipo

| Rol           | Color      | Miembros       |
| ------------- | ---------- | -------------- |
| 👑 Owner       | Dorado     | German Antonio |
| ⚜️ High Admin  | Rojo       | Himako         |
| 🛡️ Admin       | Rojo       | Martind07      |
| 📋 Manager     | Naranja    | Gallus         |
| 🎯 Coordinador | Azul       | Gallus         |
| ⚙️ Config      | Gris       | David, Cardan  |
| 🔨 Moderador   | Verde      | Dany           |
| 🏗️ Builder     | Morado     | Himako, Gallus |
| 💻 Developer   | Cyan       | Martind07      |
| 🌟 Trial       | Cyan claro | Hatsky, iCHAVO |



## 🎨 Colores del Tema

```css
--primary: #6DCCC1      /* Turquesa principal */
--primary-dark: #4BA89E /* Turquesa oscuro */
--gold: #D4A843         /* Dorado */
--bg-dark: #0f172a      /* Fondo oscuro */
--bg-medium: #1e293b    /* Fondo medio */
```

## ✨ Características

- ✅ Diseño responsive
- ✅ Animaciones suaves
- ✅ Efecto parallax en hero
- ✅ Carrusel infinito arrastrable
- ✅ Contador animado de estadísticas
- ✅ Pantalla de carga con tips
- ✅ Optimizado con React.memo

## 🌐 IP del Servidor

```
PLAY.DEXTRALITY.NET
```

**Java & Bedrock**

---

© 2025 Dextrality Network. No afiliados con Mojang/Microsoft.
