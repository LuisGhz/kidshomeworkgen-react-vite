export const openFile = (blob: Blob) => {
  const url = window.URL.createObjectURL(blob);
  window.open(url, "_blank");
};
