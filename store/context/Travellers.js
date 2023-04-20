import { createContext, useState } from "react";

export const TravListContext = createContext({
  traveller: [],
  addTraveller: (data) => {},
});

function TravellersListProvider({ children }) {
  const [traveller, setTraveller] = useState([]);

  function addTraveller(data) {
    setTraveller((currentTravList) => [...currentTravList, data]);
  }

  const travListContext = {
    traveller: traveller,
    addTraveller: addTraveller,
  };

  return <TravListContext.Provider value={travListContext} >{children}</TravListContext.Provider>;
}

export default TravellersListProvider;