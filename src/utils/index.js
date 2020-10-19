export const getTextExcerpt = (value, maxChr) => {
     return value.length > maxChr ? `${value.slice(0,maxChr)}...` : value; 
}

export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export const getCategoryId = (category) =>{

    const toLowerCategory = category.toLowerCase();

    switch(toLowerCategory){
            case 'politics':
                return 1;
            case 'international':
                return 2;
            case 'technology':
                return 3;
            case 'shows':
                return 4;
            case 'sports':
                return 5;
            case 'design':
                return 6;
        }
}

export const formatData = (article) =>(
    {
        id: article.news_id,
        url: article.url, 
        title: getTextExcerpt( article.title, 50 ), 
        img_url: article.img_url, 
        source_img: article.source_img, 
        source_name: article.source_name,
        date: article.date,
    }
)



