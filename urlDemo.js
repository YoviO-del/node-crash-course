import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString);


// format()

//format makes an obj to string
console.log(url.format(urlObj))


// import.meta.url - file URL
console.log(import.meta.url);



// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));


const params = new URLSearchParams(urlObj.search);
params.append('limit','5')
params.delete('limit')
//limit=5 usually means: return only the first 5 results

