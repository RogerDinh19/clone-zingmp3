import instance from '../axios';


    // lấy data từ axios.js
export const getHome = () => new Promise(async(resolve, reject) => {
    try {
        const response = await instance({
            url: '/home',
            method: 'GET',
        })
        resolve(response)

    } catch (error) {
        reject(error);
    }
})