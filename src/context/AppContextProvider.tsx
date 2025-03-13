import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";

interface ProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const loading = () => setIsLoading(true);
  const loaded = () => setIsLoading(false);
  return (
    <AppContext.Provider value={{ isLoading, loading, loaded }}>
      {children}
    </AppContext.Provider>
  );
};