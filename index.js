const accessKey = "x7z8L2A-EmxRtqsErIJHSOWpoZ8fwwTB7orzgcpVlms";

const searchBox = document.querySelector("#searchBox");
const searchImage = document.querySelector("#searchImage");
const searchForm = document.querySelector(".search-form");
const searchResult = document.querySelector(".search-result");
const showMore = document.querySelector(".showMore");

let keyword = "";
let page = 1;

async function searchObj(){
    let keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);

    if(page === 1){
        searchResult.innerHTML = "";
    }

        const results = data.results;
        results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target='_blink';

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        showMore.style.visibility ="visible";
    });
    
    
}

searchForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    page = 1;
    searchObj();
});

showMore.addEventListener("click" ,()=>{
    page++;
    searchObj();
});