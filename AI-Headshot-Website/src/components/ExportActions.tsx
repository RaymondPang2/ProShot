import { useState } from "react";
import type { ExportFormat, HeadshotPreset } from "../types"
import { cn } from "../lib/utils";
import { Check, Copy, Download, ExternalLink, Loader2 } from "lucide-react";
import { getExportUrl } from "../lib/transformations";


interface ExportActionsProps {
    publicId: string
    selectedPreset: HeadshotPreset
}

const FORMATS: { value: ExportFormat; label: string }[] = [
  { value: "jpg", label: "JPG" },
  { value: "png", label: "PNG" },
  { value: "webp", label: "WEBP" },
];

export default function ExportActions({
  publicId,
  selectedPreset,
}: ExportActionsProps) {
  const [format, setFormat] = useState<ExportFormat>("webp");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function buildExportUrl(): string {
    return getExportUrl(publicId, selectedPreset, format)
  }

  async function handleDownload() {
    setLoading(true)
    setError(null)
    try{
        const url = buildExportUrl()
        const res = await fetch(url)
        if (!res.ok) throw new Error("Download failed ($(res.status))");
        const blob = await res.blob();
        if (blob.size === 0) throw new Error("Download returned an empty file");
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `headshot-${selectedPreset.id}.${format}`;
        a.click();
        URL.revokeObjectURL(a.href);
    } catch (e) {
        setError(e instanceof Error ? e.message : "Export failed")
    } finally {
        setLoading(false);
    }   
  }

  async function handleOpenTab() {
    setLoading(true)
    setError(null)
    try{
        const url = buildExportUrl();
        window.open(url, "_blank", "noopener,noreferrer");
    } catch (e) {
        setError(e instanceof Error ? e.message : "Export failed")
    } finally {
        setLoading(false);
    }
  }

  async function handleCopyURL () {
    setLoading(true)
    setError(null)
    try{
        const url = buildExportUrl();
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 20000);
    } catch (e) {
        setError(e instanceof Error ? e.message : "Export failed")
    } finally {
        setLoading(false);
    }
  }

  return (
    <section className="px-4 py-8">
      <div className="glass-card mx-auto max-w-xl p-6">
        <h3 className="mb-4 text-center text-lg font-semibold">
          Export Your Headshot
        </h3>

        <p className="mb-6 text-center text-sm text-white/50">
          Pick a format and download your headshot
        </p>

        <div className="flex flex-wrap justify-center gap-2">
        <button
            type="button"
            onClick={handleDownload}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5"
        >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            Download
        </button>
        <button
            type="button"
            onClick={handleOpenTab}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5"
        >
            <ExternalLink className="h-4 w-4" />
            Open in Tab
        </button>
        <button
            type="button"
            onClick={handleCopyURL}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5"
        >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied!' : 'Copy URL'}
        </button>
        </div>

        {error && (
            <p className="mt-4 text-center text-sm text-red-400">(error)</p>
        )}
      </div>
    </section>
  );
}