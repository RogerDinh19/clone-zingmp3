export const getArrSlider = (start, end, number) => {
    const limit = start > end ? number : end
    // Nếu start lớn hơn end trả về number và ngược lại sẽ được gán bằng end

    let output = []
    for (let i = start; i <= limit; i++) {
        output.push(i)
    }
    // Thêm start => limit vào mảng ouput

    if (start > end) {
        for (let i = 0; i <= end; i++) {
            output.push(i)
        }
    }
    // Nếu start > end thì chạy vòng lặp 1 vòng lặp for thêm số từ 0 -> end vào mảng ouput
    
    return output
}