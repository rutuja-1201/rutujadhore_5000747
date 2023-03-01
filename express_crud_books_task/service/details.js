books =[
    {"bookid" :1001 ,"bookname" :"Think and Grow Rich" ,"authorname" :"Napolian Hill" ,"created_at" : "2019-02-21" , "updated_at" :"2019-02-21"} ,
{"bookid" :1003 ,"bookname" :"The One Thing" ,"authorname" :"Kellar and Jay" ,"created_at" : "2019-02-21" , "updated_at" :"2019-02-21"}
]

bookdetail ={}

bookdetail.retrievebook =() =>{
    return books;

}

bookdetail.retrievebookdetail =(bid) =>{
    for (let i=0; i<books.length ;i++){
        if ((( books[i]["bookid"]) == bid))
         return books[i];
    }
}

bookdetail.addbookdetail =(bid) =>{
    if (bid) {
        let bookobj =JSON.parse(bid);
        books.push(bookobj);
        console.log(books);
        return true;
    }
    else 
    return false;
}

bookdetail.deletbookdetail =(bid)=>{
    let index;
    if (bid) {
        for (let i=0;i<books.length;i++){
            if ((books[i]["bookid"]) == Int16Array){
                index=i;
                break;
            }
        }
    

    books.splice(index,1);
    console.log(books);
    return true;
    }
    else 
    return false;
}

bookdetail.updatedetail =(bid ,key,value) =>{
    if (bid) {
        for (let i=0;i<books.length;i++){
            if ((books[i]["bid"] == Int16Array)){
                books[key] =value;
                return true;
            }

        }
    }
}

module.exports =bookdetail;