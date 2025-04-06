import { createContext, useContext, useState, ReactNode } from "react";

type MenuContextType = {
  MenuClicked: boolean;
  setMenuClicked: (value: boolean) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [MenuClicked, setMenuClicked] = useState(false);

  return (
    <MenuContext.Provider value={{ MenuClicked, setMenuClicked }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within MenuProvider");
  return context;
};
