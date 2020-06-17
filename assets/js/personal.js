var newsCardEl = document.getElementById("news-card");
var newsSearchForm = document.getElementById("news-search");
var newsInputEl = document.getElementById("news-input")

var newsSubmitHandler = function(event){
    event.preventDefault();

    var searchTerm = newsInputEl.value.trim();
    newsInputEl.value = "";

    searchNews(searchTerm);
}

//get news
var getNews = function() {
    
    fetch('https://gnews.io/api/v3/topics/nation?&max=3&token=43720a239752027317cec258fed618fc')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayNews(data);
        });
}
//display news
var displayNews = function(data) {
    
    for(var i=0; i<data.articles.length; i++){
        //find and define news data
        var newsTitle = data.articles[i].title;
        var newsLink = data.articles[i].url;
        //create news title element and append
        var newsTitleEl = document.createElement("h5");
        newsTitleEl.textContent = newsTitle;
        newsTitleEl.className = "news-title"
        newsCardEl.appendChild(newsTitleEl);
        //create news article link element and append
        var newsLinkEl = document.createElement("a");
        newsLinkEl.textContent = "Read Article";
        newsLinkEl.className = "news-link";
        newsLinkEl.setAttribute('href', newsLink);
        newsLinkEl.setAttribute('target', '_blank')
        newsCardEl.appendChild(newsLinkEl);

    }
}

//search news
var searchNews = function(searchTerm){
    fetch('https://gnews.io/api/v3/search?q=' + searchTerm +'&max=3&token=43720a239752027317cec258fed618fc')
        .then(function (response) {
            return response.json();
        })
        .then(function (searchData) {
            console.log(searchData);
            displaySearchedNews(searchData, searchTerm)
        });
}

//display searched topic
var displaySearchedNews = function(searchData, searchTerm){
    newsCardEl.textContent = "";
    
    var searchHeader = document.createElement("h3");
    searchHeader.className = "news-header";
    searchHeader.textContent = "Searched Topic: " + searchTerm;
    newsCardEl.appendChild(searchHeader);

    for(var i=0; i<searchData.articles.length; i++){
        //find and define news data
        var searchTitle = searchData.articles[i].title;
        var searchLink = searchData.articles[i].url;
        //create news title element and append
        var searchTitleEl = document.createElement("h5");
        searchTitleEl.textContent = searchTitle
        searchTitleEl.className = "news-title"
        newsCardEl.appendChild(searchTitleEl);
        //create news article link element and append
        var searchLinkEl = document.createElement("a");
        searchLinkEl.textContent = "Read Article";
        searchLinkEl.className = "news-link";
        searchLinkEl.setAttribute('href', searchLink);
        searchLinkEl.setAttribute('target', '_blank')
        newsCardEl.appendChild(searchLinkEl);
    }
}

getNews();
newsSearchForm.addEventListener("submit", newsSubmitHandler);