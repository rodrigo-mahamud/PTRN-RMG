# Selectores de Rango Personalizados en Next.js

## Visión General

Este proyecto implementa componentes de selector de rango personalizados en Next.js, ofreciendo dos variantes:

1. Un selector de rango numérico flexible y ajustable
2. Un selector de rango fijo con valores predefinidos

Estos componentes proporcionan una forma interactiva y visualmente atractiva para que los usuarios seleccionen valores o rangos, con características como actualizaciones dinámicas, integración de API y manejo de errores.

## Características

-  **Dos Tipos de Selector de Rango**:
   -  Rango Normal: Permite la selección dentro de un rango continuo
   -  Rango Fijo: Ofrece selección de valores predefinidos
-  **Integración de API**: Obtiene datos de rango de APIs externas
-  **UI Interactiva**:
   -  Puntos arrastrables para la selección de rango
   -  Retroalimentación visual con barras de colores
   -  Etiquetas clickeables para una fácil selección de valores
-  **Campos de Entrada**: Para entrada numérica precisa (en modo de Rango Normal)
-  **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
-  **Manejo de Errores**: Muestra errores de manera elegante con Error Boundary
-  **Estado de Carga**: Loader de esqueleto mientras se obtienen los datos
-  **Caché**: Implementa un mecanismo de caché simple para llamadas a la API
-  **Modo Oscuro**: Soporte para temas claro y oscuro
-  **Animaciones Fluidas**: Implementadas con Framer Motion

## Estructura del Proyecto

```
src/
├── app/
│ ├── exercise1/
│ │ ├── error.tsx
│ │ └── page.tsx
│ ├── exercise2/
│ │ ├── error.tsx
│ │ └── page.tsx
│ ├── error.tsx
│ ├── globals.css
│ ├── layout.tsx
│ ├── not-found.tsx
│ └── page.tsx
├── components/
│ ├── magicui/
│ │ ├── animated-grid-pattern.tsx
│ │ ├── blur-fade.tsx
│ │ ├── dock.tsx
│ │ └── ripple.tsx
│ ├── ui/
│ │ ├── alert.tsx
│ │ ├── bar.tsx
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── container.tsx
│ │ ├── dot.tsx
│ │ ├── dropdown-menu.tsx
│ │ ├── input.tsx
│ │ ├── label.tsx
│ │ ├── range.test.tsx
│ │ ├── range.tsx
│ │ ├── separator.tsx
│ │ ├── skeleton.tsx
│ │ ├── tooltip.tsx
│ │ └── tracks.tsx
│ ├── ErrorBoundary.tsx
│ ├── NavDock.tsx
│ ├── RangeWrapper.tsx
│ ├── SkeletonCard.tsx
│ ├── ThemeProvider.tsx
│ └── ToggleTheme.tsx
├── hooks/
│ ├── usePercentToValue.ts
│ └── useValueToPercent.ts
├── lib/
│ ├── getData.ts
│ └── utils.ts
├── routes.ts
├── Test.csv
└── types.ts
```

## Componentes Clave

-  `Range.tsx`: Componente principal para ambos tipos de rango
-  `RangeWrapper.tsx`: Maneja la obtención de datos y proporciona props a Range
-  `Dot.tsx`: Punto interactivo para la selección de rango
-  `Bar.tsx`: Representación visual del rango seleccionado
-  `getData.ts`: Maneja llamadas a la API con server actions

## Requisitos del Sistema

-  Node.js: v18.17.0 o superior
-  Next.js: v13.4.19 o superior

## Configuración y Ejecución

1. Clonar el repositorio
   ```
   git clone [URL_DEL_REPOSITORIO]
   ```
2. Instalar dependencias
   ```
   npm install
   ```
3. Configurar variables de entorno:
   -  `NEXT_PUBLIC_API_NORMAL_URL`: URL para la API de rango normal
   -  `NEXT_PUBLIC_API_FIXED_URL`: URL para la API de rango fijo
4. Ejecutar el servidor de desarrollo
   ```
   npm run dev
   ```
   O para usar Turbopack:
   ```
   npm run turbo
   ```

## Scripts Disponibles

-  `npm run dev`: Inicia el servidor de desarrollo con Turbopack en el puerto 8080
-  `npm run turbo`: Inicia el servidor de desarrollo estándar en el puerto 8080
-  `npm run build`: Construye la aplicación para producción
-  `npm run start`: Inicia el servidor de producción
-  `npm run lint`: Ejecuta el linter

## Uso

Navega a diferentes rutas para ver los selectores de rango en acción:

-  `/`: Página de inicio con enlaces a ejemplos
-  `/exercise1`: Selector de rango normal
-  `/exercise2`: Selector de rango fijo

## Tecnologías Utilizadas

-  Next.js
-  React
-  TypeScript
-  Tailwind CSS (para estilos base y utilidades)
-  shadcn/ui (para componentes UI reutilizables)
-  Framer Motion (para animaciones fluidas)

## Características de UI/UX

-  **Componentes shadcn**: Utilizamos componentes prediseñados de shadcn/ui para una interfaz de usuario consistente y moderna.
-  **Tailwind CSS**: Empleado para estilos personalizados y responsivos.
-  **Framer Motion**: Implementa animaciones suaves para una experiencia de usuario mejorada.
-  **Modo Oscuro**: Soporte completo para temas claro y oscuro, mejorando la accesibilidad y preferencias del usuario.

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).
