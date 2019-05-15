const url =
"https://newsapi.org/v2/top-headlines?country=us&apiKey=54a8f685019f473ab5c0e306ce2d4403";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}