# Componentes de Selector de Rango Personalizados

## Visión General

Este proyecto implementa componentes de selector de rango personalizados en React, ofreciendo dos variantes:

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

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/
│   │   ├── Range.tsx
│   │   ├── Dot.tsx
│   │   ├── Bar.tsx
│   │   └── Label.tsx
│   ├── ErrorBoundary.tsx
│   └── RangeWrapper.tsx
├── hooks/
├── pages/
│   ├── Index.tsx
│   ├── Exercise1.tsx
│   └── Exercise2.tsx
├── types/
├── utils/
│   └── getData.ts
├── App.tsx
└── main.tsx
```

## Componentes Clave

-  `Range.tsx`: Componente principal para ambos tipos de rango
-  `RangeWrapper.tsx`: Maneja la obtención de datos y proporciona props a Range
-  `Dot.tsx`: Punto interactivo para la selección de rango
-  `Bar.tsx`: Representación visual del rango seleccionado
-  `getData.ts`: Maneja llamadas a la API con caché

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
   -  `VITE_API_NORMAL_URL`: URL para la API de rango normal
   -  `VITE_API_FIXED_URL`: URL para la API de rango fijo
4. Ejecutar el servidor de desarrollo
   ```
   npm run dev
   ```

## Uso

Navega a diferentes páginas para ver los selectores de rango en acción:

-  `/`: Página de inicio con enlaces a ejemplos
-  `/exercise1`: Selector de rango normal
-  `/exercise2`: Selector de rango fijo

## Tecnologías Utilizadas

-  React
-  TypeScript
-  React Router
-  Vite (para construcción y desarrollo)
-  Tailwind CSS (para estilos)

## Contribución

¡Las contribuciones son bienvenidas! Por favor, siéntete libre de enviar un Pull Request.

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).
