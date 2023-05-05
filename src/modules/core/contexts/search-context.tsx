import React from 'react'

type ContextProps = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  isSearched: boolean
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = React.createContext({} as ContextProps)

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = React.useState('')
  const [isSearched, setIsSearched] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  return (
    <Context.Provider value={{ setIsSearched, isSearched, loading, search, setLoading, setSearch }}>
      {children}
    </Context.Provider>
  )
}

export const useSearch = () => {
  const context = React.useContext(Context)

  if (!context) throw new Error('Error on SearchProvider')

  return { ...context }
}
