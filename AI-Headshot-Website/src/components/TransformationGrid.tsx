import type { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
import type { HeadshotPreset } from "../types";
import { AdvancedImage, placeholder, lazyload } from "@cloudinary/react";

interface PresetImage {
    preset: HeadshotPreset;
    image: CloudinaryImage;
}

interface TransformationGridProps {
    title: string;
    presets: PresetImage[];
}

function PresetCard({
  preset,
  image,
}: {
  preset: HeadshotPreset;
  image: CloudinaryImage;
}) {
  return (
    <button>
      <div>
        <AdvancedImage
          cldImg={image}
          plugins={[placeholder({ mode: "blur" }), lazyload()]}
          alt="Original Upload"
          className="mx-auto rounded-xl shadow-lg"
        />
      </div>
    </button>
  );
}

export default function TransformationGrid({
    title,
    presets,
}: TransformationGridProps){
    if (presets.length === 0) return null;

    return (
        <section className="px-4 py-12">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-2 text-center text-2xl font-semibold">{title}</h2>

                <p className="mb-8 text-center text-sm text-white/50">
                    Outfit swap · Background replace · Optimized for web
                </p>

                <p className="mb-6 text-center text-xs text-amber-400/70">
                    Styles generate one at a time (~30–60s each).
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"></div>
                    {presets.map(({preset, image}) => (
                        <PresetCard preset={preset} image={image}/>
                    ))}
            </div>
        </section>
    );
}