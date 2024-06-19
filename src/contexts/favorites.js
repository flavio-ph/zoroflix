import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider ({ children }) {
    const [favorite, setFavorite] = useState([])


    return (
        <FavoritesContext.Provider
            value={{favorite, setFavorite}}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

// Hook personalizado
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite) {
        // verificar se tem o já está verificado para não se repetir

        const repeatedFavorited = favorite.some((item) => item.id === newFavorite.id)

        // nova lista recebe lista anterior

        let newList = [...favorite]

        // verificar se não tem repetido e adicionar o item na lista de favoritos
        if(!repeatedFavorited) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // se for repetido ele vau ser removido da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id)
        return setFavorite(newList)

    }
    return {
        favorite,
        addFavorite
    }
}