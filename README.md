# ProShot

AI-powered professional headshot generator - upload a portrait, choose or customize a style, preview the transformation, and export the finished image.

## Demo Link

Access the live demo at: http://localhost:5173 - the app is ran locally; see [Setup](#setup)).

Or watch the video demo (with captions): https://drive.google.com/file/d/1BhnjTBSjyXYBaOiz38Wv4vm_NHf7A6E_/view?usp=sharing

## Table of Contents

- [About the App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

## About the App

**ProShot** is a web application that turns an uploaded portrait into a polished professional headshot. Users can choose and customize from different preset styles, preview the result, and export the final image in their preferred format.

The application uses Cloudinary's generative image transformations to replace backgrounds and clothing while keeping the uploaded person as the subject. It also automatically crops, resizes, and optimizes each image to produce a consistent portrait layout.

### Main Features

- Drag-and-drop image upload
- Multiple professional headshot presets
- AI-powered background and clothing replacement
- Automatic cropping and subject positioning
- Image previews with optimized loading
- Multiple export format options
- Responsive design for desktop and mobile devices
- Custom background descriptions for personalized AI-generated settings

## Screenshots

Add your main application screenshot here:

```md
![ProShot preview](docs/screenshots/proshot-preview.png)
```

More screenshots of the upload screen, preset selection, generated results, and export controls can be added to `docs/screenshots/`.

## Technologies

I used `React`, `TypeScript`, `Vite`, `Tailwind CSS`, `Cloudinary`, `React Dropzone`, and `Lucide React`.


## Setup

- Download or clone the repository:

  ```bash
  git clone https://github.com/RaymondPang2/ProShot.git
  cd ProShot
  ```

- Install the dependencies:

  ```bash
  npm install
  ```

- Add your Cloudinary cloud name to the project's Cloudinary configuration. If your version uses an environment variable, create a `.env` file:

  ```env
  VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
  VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
  ```
  
- In Cloudinary, create an unsigned upload preset:

1. Open Settings
2. Go to Upload
3. Find Upload presets
4. Create a new preset
5. Set its signing mode to Unsigned
6. Copy the preset name into your .env file

- Start the development server:

  ```bash
  npm run dev
  ```

- Open the local URL shown in the terminal.

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Approach

I built ProShot around a preset-based transformation system. Each preset defines a professional style, including the requested clothing and background changes. When a user selects a preset, the application builds the matching Cloudinary transformation and displays the processed result.

I separated the interface into reusable components for uploading, preset selection, image previews, and export controls. I also used TypeScript types for uploaded images, headshot presets, and export formats so the different parts of the application use consistent data.

Cloudinary performs the generative image processing. ProShot handles the upload workflow, preset definitions, transformation logic, preview experience, and export controls.

## Status

**ProShot** is functional and supports image uploads, preset transformations, previews, and exports.

Future improvements may include custom transformation prompts, additional professional presets, before-and-after comparison controls, improved error handling, and a gallery of recent generations.

## Credits

- [Raymond Pang](https://github.com/RaymondPang2) — project development and customization
- [Cloudinary](https://cloudinary.com/) — image transformations, optimization, and delivery

This foundation of the project was initially built by following the [Build a Production Ready AI Headshot Generator](https://www.youtube.com/watch?v=rbqlqqD4q34) tutorial. I expanded and customized it by adding additional headshot presets, export options, and UI improvements.

## License

MIT License © [Raymond Pang](https://github.com/RaymondPang2)

Review the original tutorial and any provided starter code for applicable licensing terms before redistributing or using tutorial-derived code commercially.

**Final Words:**

Thank you for checking out ProShot. Suggestions and feedback are always welcome. 😃
