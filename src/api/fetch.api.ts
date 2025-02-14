import { getFileNameFromContentDisposition } from "../utils/getFileNameFromContentDisposition.util";
import { downloadFile } from "../utils/downloadFile.util";
import { openFile } from "../utils/openFile.util";

const API_URL = import.meta.env.VITE_API_URL;

export const getFile = async (path: string, ops: RequestInit = {}, isDownload: boolean = true) => {
  console.log(`${API_URL}${path}`);
  const response = await fetch(`${API_URL}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/pdf",
    },
    ...ops,
  });

  const filename = getFileNameFromContentDisposition(response);
  const blob = await response.blob();
  if (isDownload)
    downloadFile(filename, blob);
  else
    openFile(blob);
};
