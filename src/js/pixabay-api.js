export function searchImg(value) {
    const baseUrl = 'https://pixabay.com';
    const endPoint = '/api/'
    const options = new URLSearchParams({
        key: '44411802-6a5316a8fc33c8235d915a6fe',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        q:`${value}`,
    });
    const url = `${baseUrl}${endPoint}?${options}`;
    return fetch(url).then(data => {
        if (!data.ok) {
        throw new Error(data.status);
        } else {
            return data.json();
    }
        
     })
};
