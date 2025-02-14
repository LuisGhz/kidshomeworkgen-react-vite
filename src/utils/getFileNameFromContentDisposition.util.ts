export const getFileNameFromContentDisposition = (response: Response) => {
  // Get filename from Content-Disposition header
  const contentDisposition = response.headers.get("content-disposition");
  let filename = "file.pdf";
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(
      /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
    );
    if (filenameMatch && filenameMatch[1]) {
      filename = filenameMatch[1].replace(/['"]/g, "");
    }
  }
  return filename || "file.pdf";
};
