import { getFile } from "../api";

export const getPdfFile = async (path: string) => {
  try {
    await getFile(path);
  } catch {
    console.error("Error al descargar el archivo");
  }
};
