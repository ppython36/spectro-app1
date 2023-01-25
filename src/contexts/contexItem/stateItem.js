import ContextItem from './ContextItem'


const StateItem = ({ children }) => {
  

  return (
    <ContextItem.Provider
      value={{  }}
    >
      {children}
    </ContextItem.Provider>
  );
};

export default StateItem;