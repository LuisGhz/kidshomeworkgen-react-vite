import { getFile } from "../api";
import { RequestInitFile } from "../api/models/RequestInitFile.model";

export const getPdfFile = async (path: string, ops: RequestInitFile = {}) => {
  try {
    await getFile(path, ops);
  } catch {
    console.error("Error al descargar el archivo");
  }
};
