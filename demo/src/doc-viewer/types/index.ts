import JPGRenderer from "../renderers/jpg/JPGRenderer";
import PDFRenderer from "../renderers/pdf/PDFRenderer";
import PNGRenderer from "../renderers/png/PNGRenderer";

export type FileType =
  | "application/pdf"
  | "image/png"
  | "image/jpg"
  | "image/jpeg";

export interface IDocument {
  uri: string;
  fileType?: FileType;
  base64Data?: string;
}

export type DocRenderer =
  | typeof PDFRenderer
  | typeof PNGRenderer
  | typeof JPGRenderer;
