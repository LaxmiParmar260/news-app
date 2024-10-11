

const getCurrentDate = () =>{
    const requiredDate = new Date(Date.now()).toLocaleDateString("en-In") 
    const day = requiredDate.split("/")[0]
    const month = requiredDate.split("/")[1]-1
    const year =  requiredDate.split("/")[2]

    return `${year}-${month}-${day}`;

}

const currentDate = getCurrentDate()
console.log(currentDate)



export const fetchNews = async (topic) => {

try {
    const res = await fetch(
        `https://newsapi.org/v2/everything?q=${topic}&from${currentDate}&sortBy=publishedAt&apiKey=0d1c8275439f4a78b44b69f8970af81f`
      );
      const data = await res.json();
      return  data.articles
    
} catch (error) {
    console.log(error)
}

 
};
