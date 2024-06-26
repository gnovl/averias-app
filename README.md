# AVERIAS HOGAR

[English](#english) | [Español](#español)

## English

### Home Repair and Plumbing Services Website

AVERIAS HOGAR is a professional website offering plumbing services and maintenance/repairs for common household issues.

### Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React Libraries:
  - react-scroll-to-top
  - react-icons
  - react-scroll
  - hamburger-react
  - react-photo-album
  - react-loading-skeleton
  - qrcode.react
  - react-hook-consent
  - embla-carousel
- Google reCAPTCHA

### Application Overview and Key Features

<div align="center">
  <img src="./screenshots/app_overview.png" alt="AVERIAS HOGAR Web Application" width="800"/>
</div>

AVERIAS HOGAR offers the following key features:

- Comprehensive listing of professional plumbing and home repair services
- Image gallery showcasing completed projects
- Contact form with WhatsApp QR code generation (mobile and desktop compatible)
- Responsive design for optimal experience on both mobile and desktop devices

### Technical Highlights

Our application underwent a significant framework migration to address scalability challenges. This strategic move enhanced our ability to handle high traffic and implement advanced server-side features, ensuring optimal performance and future-proofing the application.

### Deployment

The project is deployed on a VPS server using the following process:

1. Server setup and updates
2. Node.js and PM2 installation
3. GitHub Actions runner setup
4. Workflow configuration for Node.js
5. PM2 process setup
6. Domain and DNS configuration
7. Nginx web server installation
8. SSL certificate installation
9. Build and deploy

### Project Structure

- `/src/`
  - `components/`: Application components
  - `lib/`: Utility functions and helpers
- `/public/`: Static assets (images and favicon)

### Local Setup

To run the project locally:

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file in the root directory with the following variables:

   > NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   > RECAPTCHA_SECRET_KEY=your_secret_key
   > Obtain these keys from the Google reCAPTCHA console for a localhost site.

4. Run the development server: `npm run dev`

### Contact

For more information, visit my [portfolio](https://gnovl.github.io/portfolio/).

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Español

### Sitio Web de Servicios de Reparación del Hogar y Fontanería

AVERIAS HOGAR es un sitio web profesional que ofrece servicios de fontanería y mantenimiento/reparaciones para problemas comunes en el hogar.

### Tecnologías Utilizadas

- Next.js
- TypeScript
- Tailwind CSS
- Bibliotecas de React:
- react-scroll-to-top
- react-icons
- react-scroll
- hamburger-react
- react-photo-album
- react-loading-skeleton
- qrcode.react
- react-hook-consent
- embla-carousel
- Google reCAPTCHA

### Visión General de la Aplicación y Características Principales

<div align="center">
  <img src="./screenshots/app_overview.png" alt="Aplicación Web AVERIAS HOGAR" width="800"/>
</div>

Características clave visibles:

- Listado profesional de servicios
- Galería de imágenes de proyectos completados
- Formulario de contacto con integración de WhatsApp
- Diseño responsivo para móvil y escritorio

### Aspectos Técnicos Destacados

Nuestra aplicación pasó por una importante migración de framework para abordar desafíos de escalabilidad. Este movimiento estratégico mejoró nuestra capacidad para manejar alto tráfico e implementar características avanzadas del lado del servidor, asegurando un rendimiento óptimo y preparando la aplicación para el futuro.

### Despliegue

El proyecto está desplegado en un servidor VPS utilizando el siguiente proceso:

1. Configuración y actualización del servidor
2. Instalación de Node.js y PM2
3. Configuración del runner de GitHub Actions
4. Configuración del flujo de trabajo para Node.js
5. Configuración del proceso PM2
6. Configuración de dominio y DNS
7. Instalación del servidor web Nginx
8. Instalación del certificado SSL
9. Compilación y despliegue

### Estructura del Proyecto

- `/src/`
- `components/`: Componentes de la aplicación
- `lib/`: Funciones de utilidad y helpers
- `/public/`: Activos estáticos (imágenes y favicon)

### Configuración Local

Para ejecutar el proyecto localmente:

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Crear un archivo `.env.local` en el directorio raíz con las siguientes variables:
   > NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_clave_del_sitio
   > RECAPTCHA_SECRET_KEY=tu_clave_secreta

Obtén estas claves de la consola de Google reCAPTCHA para un sitio localhost. 4. Ejecutar el servidor de desarrollo: `npm run dev`

### Contacto

Para más información, visita mi [portafolio](https://gnovl.github.io/portfolio/).

### Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT).
