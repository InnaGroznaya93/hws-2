const initState = {
    themeId: 1,
}

type initStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {themeId: action.id}

        default:
            return state
    }
}

type ActionsType = ChangeThemeIdType

type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }as const) // fix any
