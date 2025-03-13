import { useContext } from "react";
import { getPdfFile } from "../../services/PdfFile.service";
import {
  FrAdditions,
  FrMultiplications,
  FrSubstractions,
} from "../../types/maths/FractionsForm.type";
import { buildQueryString } from "../../utils/buildQueryString.util";
import { AppContext } from "../../context/AppContext";

export const useFractions = () => {
  const { loading, loaded } = useContext(AppContext);
  const path = "/fractions";

  const additions = async (values: FrAdditions) => {
    loading();
    const query = buildQueryString(`${path}/additions`, values);
    await getPdfFile(query);
    loaded();
  };

  const multiplications = async (values: FrMultiplications) => {
    loading();
    const query = buildQueryString(`${path}/multiplications`, values);
    await getPdfFile(query);
    loaded();
  };

  const substractions = async (values: FrSubstractions) => {
    loading();
    const query = buildQueryString(`${path}/substractions`, values);
    await getPdfFile(query);
    loaded();
  };

  return { additions, multiplications, substractions };
};
