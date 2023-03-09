import instance from '../axios';


    // lấy data từ axios.js
export const getSong = (sid) => new Promise(async(resolve, reject) => {
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

export const getDetailSong = (sid) => new Promise(async(resolve, reject) => {
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