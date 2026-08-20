import type { CloudinaryImage } from "@cloudinary/url-gen/index";
import { cld } from "../cloudinary/config";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import type { ExportFormat, HeadshotPreset } from "../types";
import { generativeBackgroundReplace, generativeReplace } from "@cloudinary/url-gen/actions/effect";

const WIDTH = 600;
const HEIGHT = 750;

function finalizeImage(img: CloudinaryImage) {
    return img.resize(fill().width(WIDTH).height(HEIGHT).gravity(autoGravity()))
        .delivery(format(auto()))
        .delivery(quality(autoQuality()));
}

export const HEADSHOT_PRESETS: HeadshotPreset[] = [
  {
    id: "corporate-executive",
    name: "Corporate Executive",
    description: "Navy suit with office backdrop — LinkedIn ready",
    category: "style",

    build: (publicId) =>
      finalizeImage(
        cld
          .image(publicId)
          .effect(
            generativeReplace()
              .from("casual shirt")
              .to(
                "professional navy suit jacket with white dress shirt and tie"
              )
          )
          .effect(
            generativeBackgroundReplace().prompt(
              "modern corporate office with bookshelves professional lighting"
            )
          )
      ),

    transformationChain:
      "e_gen_replace:from_casual%20shirt;to_professional%20navy%20suit%20jacket%20with%20white%20dress%20shirt%20and%20tie/e_gen_background_replace:prompt_modern%20corporate%20office%20with%20bookshelves%20professional%20lighting/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
  },

  {
    id: "outdoor-professional",
    name: "Outdoor Professional",
    description: "Crisp white shirt with golden hour garden",
    category: "style",

    build: (publicId) =>
      finalizeImage(
        cld
          .image(publicId)
          .effect(
            generativeReplace()
              .from("casual shirt")
              .to("crisp white button down dress shirt professional")
          )
          .effect(
            generativeBackgroundReplace().prompt(
              "outdoor garden with trees golden hour sunlight bokeh"
            )
          )
      ),

    transformationChain:
      "e_gen_replace:from_casual%20shirt;to_crisp%20white%20button%20down%20dress%20shirt%20professional/e_gen_background_replace:prompt_outdoor%20garden%20with%20trees%20golden%20hour%20sunlight%20bokeh/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
  },

  {
    id: "urban-business",
    name: "Urban Business",
    description: "Smart blazer with city street bokeh",
    category: "style",

    build: (publicId) =>
      finalizeImage(
        cld
          .image(publicId)
          .effect(
            generativeReplace()
              .from("casual shirt")
              .to("charcoal gray blazer over light blue dress shirt")
          )
          .effect(
            generativeBackgroundReplace().prompt(
              "modern downtown city street with buildings professional urban bokeh"
            )
          )
      ),

    transformationChain:
      "e_gen_replace:from_casual%20shirt;to_charcoal%20gray%20blazer%20over%20light%20blue%20dress%20shirt/e_gen_background_replace:prompt_modern%20downtown%20city%20street%20with%20buildings%20professional%20urban%20bokeh/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
  },

  {
    id: "tech-founder",
    name: "Tech Founder",
    description: "Minimal black shirt with modern startup office",
    category: "style",

    build: (publicId) =>
      finalizeImage(
        cld
          .image(publicId)
          .effect(
            generativeReplace()
              .from("casual shirt")
              .to("premium fitted black crew neck shirt professional")
          )
          .effect(
            generativeBackgroundReplace().prompt(
              "modern technology startup office minimal interior soft natural lighting"
            )
          )
      ),

    transformationChain:
      "e_gen_replace:from_casual%20shirt;to_premium%20fitted%20black%20crew%20neck%20shirt%20professional/e_gen_background_replace:prompt_modern%20technology%20startup%20office%20minimal%20interior%20soft%20natural%20lighting/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
  },

  {
    id: "studio-professional",
    name: "Studio Professional",
    description: "Classic suit with clean neutral studio background",
    category: "style",

    build: (publicId) =>
      finalizeImage(
        cld
          .image(publicId)
          .effect(
            generativeReplace()
              .from("casual shirt")
              .to("dark tailored business suit with white dress shirt")
          )
          .effect(
            generativeBackgroundReplace().prompt(
              "professional photography studio neutral gray background softbox lighting"
            )
          )
      ),

    transformationChain:
      "e_gen_replace:from_casual%20shirt;to_dark%20tailored%20business%20suit%20with%20white%20dress%20shirt/e_gen_background_replace:prompt_professional%20photography%20studio%20neutral%20gray%20background%20softbox%20lighting/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
  },

  {
    id: "creative-professional",
    name: "Creative Professional",
    description: "Relaxed blazer with stylish creative workspace",
    category: "style",

    build: (publicId) =>
      finalizeImage(
        cld
          .image(publicId)
          .effect(
            generativeReplace()
              .from("casual shirt")
              .to("stylish casual blazer over clean neutral shirt")
          )
          .effect(
            generativeBackgroundReplace().prompt(
              "modern creative design studio warm lighting tasteful interior bokeh"
            )
          )
      ),

    transformationChain:
      "e_gen_replace:from_casual%20shirt;to_stylish%20casual%20blazer%20over%20clean%20neutral%20shirt/e_gen_background_replace:prompt_modern%20creative%20design%20studio%20warm%20lighting%20tasteful%20interior%20bokeh/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
  },

  {
    id: "academic",
    name: "Academic",
    description: "Professional outfit with university library setting",
    category: "style",

    build: (publicId) =>
      finalizeImage(
        cld
          .image(publicId)
          .effect(
            generativeReplace()
              .from("casual shirt")
              .to("professional blazer over collared shirt academic style")
          )
          .effect(
            generativeBackgroundReplace().prompt(
              "elegant university library bookshelves softly blurred professional lighting"
            )
          )
      ),

    transformationChain:
      "e_gen_replace:from_casual%20shirt;to_professional%20blazer%20over%20collared%20shirt%20academic%20style/e_gen_background_replace:prompt_elegant%20university%20library%20bookshelves%20softly%20blurred%20professional%20lighting/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
  },

  {
    id: "luxury-executive",
    name: "Luxury Executive",
    description: "Tailored suit with premium office setting",
    category: "style",

    build: (publicId) =>
      finalizeImage(
        cld
          .image(publicId)
          .effect(
            generativeReplace()
              .from("casual shirt")
              .to(
                "luxury tailored charcoal suit with white dress shirt professional executive"
              )
          )
          .effect(
            generativeBackgroundReplace().prompt(
              "luxury executive office floor to ceiling windows modern interior professional lighting"
            )
          )
      ),

    transformationChain:
      "e_gen_replace:from_casual%20shirt;to_luxury%20tailored%20charcoal%20suit%20with%20white%20dress%20shirt%20professional%20executive/e_gen_background_replace:prompt_luxury%20executive%20office%20floor%20to%20ceiling%20windows%20modern%20interior%20professional%20lighting/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
  },

  {
  id: "casual-professional",
  name: "Casual Professional",
  description: "Smart sweater with bright modern workspace",
  category: "style",

  build: (publicId) =>
    finalizeImage(
      cld
        .image(publicId)
        .effect(
          generativeReplace()
            .from("casual shirt")
            .to(
              "clean fitted crewneck sweater over collared shirt professional"
            ),
        )
        .effect(
          generativeBackgroundReplace().prompt(
            "bright modern coworking space with soft natural lighting and subtle bokeh",
          ),
        ),
    ),

    transformationChain:
      "e_gen_replace:from_casual%20shirt;to_clean%20fitted%20crewneck%20sweater%20over%20collared%20shirt%20professional/e_gen_background_replace:prompt_bright%20modern%20coworking%20space%20with%20soft%20natural%20lighting%20and%20subtle%20bokeh/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
    },

];

export const ALL_PRESETS = HEADSHOT_PRESETS;

export function buildOriginalPreview(publicId: string) : CloudinaryImage{
    return cld
        .image(publicId)
        .resize(fill().width(WIDTH).height(HEIGHT).gravity(autoGravity()))
        .delivery(format(auto()))
        .delivery(quality(autoQuality()));
}

export function getPresetById(id: string): HeadshotPreset | undefined {
    return ALL_PRESETS.find((p) => p.id === id);
}

export function getExportTransformationChain(
  preset: HeadshotPreset,
  publicId: string,
) {
  const url = preset.build(publicId).toURL();
  const marker = "/image/upload/";
  const rest = url.split(marker)[1]?.split("?")[0] ?? "";
  let path = rest.replace(/^v\d+\//, "");
  const suffix = `/${publicId}`;

  if (path.endsWith(suffix)) {
    return path.slice(0, -suffix.length);
  }

  return preset.transformationChain;
}

export function getExportUrl(
    publicId: string,
    preset: HeadshotPreset,
    format: ExportFormat,
): string {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) {
        throw new Error("Cloudinary cloud name is not configured.;")
    }

    let chain = getExportTransformationChain(preset, publicId);
    if (chain.endsWith("/")) chain = chain.slice(0, -1);

    chain = chain.replace(/\/f_auto\//, `/f_${format}/`);
    return `https://res.cloudinary.com/${cloudName}/image/upload/${chain}/${publicId}.${format}`;
}