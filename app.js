class News{
   constructor(userEntry) {
      this.userEntry = userEntry
   }
}

class UI {
   
}

document.querySelector('.form').addEventListener('click', function(e) {
   const key = '3c980e93e664447294c9342e9b0cfac1'
   console.log('submitted');
   
    async function getNews() {
    const response = await fetch(` https://newsapi.org/v2/everything?q=Apple&from=2021-10-16&sortBy=popularity&apiKey=${key}`)
    const data = await response.json()

    console.log(data);
    
   const ranNum = Math.floor(Math.random() * 18) + 1
   console.log(ranNum);
       
   
    const author = data.articles[ranNum].author
    const title = data.articles[ranNum].title
    const text = data.articles[ranNum].content;
    const link = data.articles[ranNum].url
    console.log(text);
    console.log(link);
    document.querySelector('.author').innerText = author

    document.querySelector('.title').innerHTML = title
    
    document.querySelector('.output').innerText = text
    const aTag = document.createElement('a')
    aTag.setAttribute('href',link)
    aTag.append(document.createTextNode('Click here for more'))
    console.log(aTag);
    
    // aTag.innerText =link
    const output2 =  document.querySelector('.output2')
     output2.append(aTag)


   }
   getNews()

   let n = document.querySelector('#number').value;
   let g = [];
   for(i=0; i<n; i++){
      let ran = Math.floor(Math.random() * 40) + 1
      g.push(ran)
   }
   console.log(g);
   for(i=0; i<n; i++){
      for(j=i+1; j<n; j++) {
         if(g[i]>g[j]) {
            temp = g[i]
            g[i] = g[j]
            g[j] = temp
         }
      }
      
   }
   console.log(g)
   
 e.preventDefault();
})








