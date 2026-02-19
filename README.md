<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1f0RC0OpfbjGBLKk1BiEuFc-2n3RRZUbd

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure [.env.local](.env.local):
   - **GEMINI_API_KEY**: tu API key de Gemini (si usas funciones que la requieran).
   - **VITE_FORMSPREE_ID**: ver abajo (formulario de contacto).

3. Run the app:
   ```bash
   npm run dev
   ```

### Formulario de contacto (Formspree)

Para que el formulario de contacto envíe correos a **daniel.lopez@dimetrics.com.co**:

1. Entra en [formspree.io](https://formspree.io) y crea una cuenta (o inicia sesión).
2. Crea un nuevo formulario: **New Form**.
3. En el formulario, configura el email de notificación: **daniel.lopez@dimetrics.com.co**.
4. Formspree te dará una URL como: `https://formspree.io/f/xxxxxxxx`
   - El **ID** es la parte final: `xxxxxxxx` (solo esos caracteres).
5. En el proyecto, abre [.env.local](.env.local) y asigna ese ID:
   ```env
   VITE_FORMSPREE_ID=xxxxxxxx
   ```
6. Reinicia el servidor de desarrollo (`npm run dev`) para que cargue la variable.

Si `VITE_FORMSPREE_ID` está vacío, al enviar el formulario verás un mensaje de error pidiendo configurarlo.
