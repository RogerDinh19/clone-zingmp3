import actionType from "./actionType";
// import * as apis from "../../apis";


export const setCurSongId = (sid) => ({
    type : actionType.SET_CUR_SONG_ID,
    sid: sid
})

export const play = (flag) => ({
    type : actionType.PLAY,
    flag: flag
})

export const playAlbum = (flag) => ({
    type : actionType.SET_ALBUM,
    flag: flag
})

export const setPlaylist = (songs) => ({
    type : actionType.PLAYLIST,
    songs: songs
})


// export const fetchDetailPlayList = (pid) => async (dispatch) => {
//     try {
//         const response = await apis.apiGetDetailPlayList(pid)
//         if(response?.data.err === 0 ) {
//             dispatch({
//                 type: actionType.PLAYLIST,
//                 songs: response.data?.data?.song?.items
//             }) 
//         }
//     } catch (error) {
//         dispatch({
//             type: actionType.PLAYLIST,
//             songs: null
//         })
//     }
// }