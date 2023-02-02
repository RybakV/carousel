
const carousel = document.querySelector("#carousel");

fetch('https://pixabay.com/api/?key=18618763-c9ef92b1310e6ed5c6aaa8e00&q=yellow+flowers&image_type=photo&page=1&per_page=3')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        carousel.innerHTML += `<img src="${json.hits[0].webformatURL}" alt="${json.hits[0].tags} by ${json.hits[0].user}"/>`;
    })

let f = {
    "total":33875,
    "totalHits":500,
    "hits":[{
        "id":2295434,
        "pageURL":"https://pixabay.com/photos/spring-bird-bird-tit-spring-blue-2295434/",
        "type":"photo",
        "tags":"spring bird, bird, tit",
        "previewURL":"https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg",
        "previewWidth":150,
        "previewHeight":99,
        "webformatURL":"https://pixabay.com/get/gfa5928926e5acb4b2b674a8b371531a3697b4c7378c0425c1b3bd2d59a36c82950d089d0ee2df2e65c389cb17aeb3d7d8f2e9ad7f1d4c7f5284a86257dcaf30b_640.jpg","webformatWidth":640,"webformatHeight":426,"largeImageURL":"https://pixabay.com/get/g3a2c59045424764daa54b684f28275bfaa6f20221a63e35ccf9ff68639dc3d00e6bea683900136808952bcf8932c169cbd09a0868f725af4406cf2ff8f71b5a0_1280.jpg",
        "imageWidth":5363,
        "imageHeight":3575,
        "imageSize":2938651,
        "views":622330,
        "downloads":358782,
        "collections":2054,
        "likes":1982,
        "user_id":334088,
        "user":"JillWellington",
        "userImageURL":"https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg"
    },
]}




