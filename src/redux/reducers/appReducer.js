import actionType from "../action/actionType";


const initState = {
    banner: [],
    artist: {},
    theHappyWeekend: {},
    chill: {},


    isLoading: false,

    
}

const appReducer = (state = initState,action ) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId ==='hSlider')?.items || null,
                artist: action.homeData?.find(item => item.sectionId ==='hArtistTheme') || null,
                theHappyWeekend: action.homeData?.find(item => item.sectionId ==='hEditorTheme2') || null,
                chill: action.homeData?.find(item => item.sectionId ==='hEditorTheme') || null   
            }

        case actionType.LOADING:
            return{
                ...state,
                isLoading: action.flag
            }
    
        default:
            return state
    }
}

export default appReducer;