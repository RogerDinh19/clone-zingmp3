import actionType from "../action/actionType";


const initState = {
    banner: [],
    artist: {}
}

const appReducer = (state = initState,action ) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId ==='hSlider')?.items || null,
                artist: action.homeData?.find(item => item.sectionId ==='hArtistTheme') || null
                
            }
    
        default:
            return state
    }
}

export default appReducer;