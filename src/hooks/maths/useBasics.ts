import { useContext } from "react";
import { getPdfFile } from "../../services/PdfFile.service";
import {
  Additions,
  Divisions,
  Multiplications,
  Substractions,
} from "../../types/maths/ElementaryMathsForm.type";
import { buildQueryString } from "../../utils/buildQueryString.util";
import { AppContext } from "../../context/AppContext";

export const useBasics = () => {
  const { loading, loaded } = useContext(AppContext);
  const path = "/basic-maths";

  const multiplications = async (values: Multiplications) => {
    loading();
    const query = buildQueryString(`${path}/multiplications`, values);
    await getPdfFile(query);
    loaded();
  };

  const divisions = async (values: Divisions) => {
    loading();
    const query = buildQueryString(`${path}/divisions`, values);
    await getPdfFile(query);
    loaded();
  };

  const additions = async (values: Additions) => {
    loading();
    const query = buildQueryString(`${path}/additions`, values);
    await getPdfFile(query);
    loaded();
  };

  const substractions = async (values: Substractions) => {
    loading();
    const query = buildQueryString(`${path}/substractions`, values);
    await getPdfFile(query);
    loaded();
  };

  return { multiplications, divisions, additions, substractions };
};
