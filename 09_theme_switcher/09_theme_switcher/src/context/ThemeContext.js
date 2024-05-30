import React from  'react'
import {createContext, useContext} from 'react'

export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useThemeContext () {
    return useContext(ThemeContext)
}