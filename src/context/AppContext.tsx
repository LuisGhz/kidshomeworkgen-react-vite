import { createContext } from "react";

interface ContextProps {
  isLoading: boolean;
  loading: () => void;
  loaded: () => void;
}

export const AppContext = createContext<ContextProps>({
  isLoading: false,
  loading: () => {},
  loaded: () => {},
});
