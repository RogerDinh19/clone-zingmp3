import instance from '../axios';


    // lấy data từ axios.js
export const apiGetSong = (sid) => new Promise(async(resolve, reject) => {
    try {
        const response = await instance({
            url: '/song',
            method: 'GET',
            params: {id: sid},
        })
        resolve(response)

    } catch (error) {
        reject(error);
    }
})

export const apiGetDetailSong = (sid) => new Promise(async(resolve, reject) => {
    try {
        const response = await instance({
            url: '/infosong',
            method: 'GET',
            params: {id: sid},
        })
        resolve(response)

    } catch (error) {
        reject(error);
    }
})

export const apiGetDetailPlayList = (pid) => new Promise(async(resolve, reject) => {
    try {
        const response = await instance({
            url: '/detailplaylist',
            method: 'GET',
            params: {id: pid},
        })
        resolve(response)

    } catch (error) {
        reject(error);
    }
})