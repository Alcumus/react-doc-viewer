import { FC } from "react";

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

export interface DocRenderer extends FC<{}> {
  priority: number;
}
