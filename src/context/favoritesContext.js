import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const favoritesContext = createContext(null);

export const useFavoritesContext = () => {
  const context = useContext(favoritesContext);

  if (context === undefined) {
    throw new Error(
      'FavoritesContext should be within FavoritesContextProvider',
    );
  }

  return context;
};

const FavoritesContextProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  // fungsi menangani button add to favorites untuk menambahkannya ke array favorites.
  const addToFavoritesHandler = useCallback((item) => {
    const oldFavorites = [...favorites]

    const newFavorites = oldFavorites.concat(item)

    setFavorites(newFavorites)
  }, [favorites])

  const value = useMemo(() => ({
    favorites, addToFavoritesHandler
  }), [favorites])

  return (
    <favoritesContext.Provider value={value}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
