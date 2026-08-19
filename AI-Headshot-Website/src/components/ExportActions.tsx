import type { ExportFormat, HeadshotPreset } from "../types"


interface ExportActionsProps {
    publicId: string
    selectedPreset: HeadshotPreset
}

const FORMATS: { value: ExportFormat; label: string }[] = [

]

export default function ExportActions({
  publicId,
  selectedPreset,
}: ExportActionsProps) {
  return (
    <section className="px-4 py-8">
      <div className="glass-card mx-auto max-w-xl p-6">
        <h3 className="mb-4 text-center text-lg font-semibold">
          Export Your Headshot
        </h3>

        <p className="mb-6 text-center text-sm text-white/50">
          Pick a format and download your headshot
        </p>
      </div>
    </section>
  );
}