import type { CloudinaryImage } from "@cloudinary/url-gen/index";
import { cld } from "../cloudinary/config";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import type { HeadshotPreset } from "../types";
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
                "professional navy suit jacket with white dress shirt and tie",
              ),
          )
          .effect(
            generativeBackgroundReplace().prompt(
              "modern corporate office with bookshelves professional lighting",
            ),
          ),
      ),

    transformationChain: 
      "e_gen_replace:from_casual%20shirt;to_professional%20navy%20suit%20jacket%20with%20white%20dress%20shirt%20and%20tie/e_gen_background_replace:prompt_modern%20corporate%20office%20with%20bookshelves%20professional%20lighting/c_fill,w_600,h_750,g_auto/f_auto/q_auto",
  },
];



export function buildOriginalPreview(publicId: string) : CloudinaryImage{
    return cld
        .image(publicId)
        .resize(fill().width(WIDTH).height(HEIGHT).gravity(autoGravity()))
        .delivery(format(auto()))
        .delivery(quality(autoQuality()));
}