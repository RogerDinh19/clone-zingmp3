import actionType from "./actionType";
// import * as apis from "../../apis";


export const setCurSongId = (sid) => ({
    type : actionType.SET_CUR_SONG_ID,
    sid: sid
})