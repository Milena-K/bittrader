import { createContext, useMemo, useState } from "react";

export const ContextRegister = createContext({ openRegister: false, setIsOpenRegister: null});

const ContextRegisterProvider = ({ children}) => {

  const [openRegister, setIsOpenRegister] = useState(false);
  // const valueRegister = useMemo(() => (), [openRegister, setIsOpenRegister]);

  return (
    <ContextRegister.Provider value={{openRegister, setIsOpenRegister}}>
      {children}
    </ContextRegister.Provider>
  )

}

export default ContextRegisterProvider;
