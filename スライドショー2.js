

let img=[
    "https://www.cmoa.jp/data/image/title/title_0000037770/VOLUME/100000377700001.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91wk1wnYclL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51ZxU6FYLuL._SX315_BO1,204,203,200_.jpg",
    "https://www.cmoa.jp/data/image/title/title_0000114428/VOLUME/100001144280001.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71KqE534-LL.jpg",
];

let count =0;
function myFunc(){
if(count == img.length-1){
    count=0;
}else{
    count++;
};
document.sshow.src= img[count];
// console.log(count);
};

let id;//これがないとsetIntervalのidとclearIntervalのidが同じものにならない
function buttonStart(){
id =setInterval(myFunc,1000);
};

const div =document.getElementById("div");
const imgGood =document.getElementById("imgGood");
const imgGood2 =document.getElementById("imgGood2");
imgGood.style.display="none";
imgGood2.style.display="none";

function buttonStop(){
    clearInterval(id);
    switch(count){
        case 0://鋼の錬金術師
            div.innerHTML ="センスいいね！！";
            imgGood.style.display="inline";
        break;
        case 1://チェンソーマン
            div.innerHTML ="おもれぇよな！";
            imgGood2.style.display="inline";
        break;
        case 2://呪術廻戦
        location.href= "https://www.youtube.com/watch?v=v8bZVdTgXoY";
        break;
        case 3://ワンパンマン
            document.write("");
            div.innerHTML ="";
        break;
        case 4://トリコ
            // document.write("<marquee style=font-size:100px direction='left' scrollamount='70'>ガッツ！　ガツガツ！</marquee>");
            // document.write("<div style=text-align:center;><img src=https://cdn-scissors.gigaviewer.com/image/scale/57336444c96e0c84021e4f44d0133e288021755d/enlarge=0;height=484;no_unsharpmask=1;quality=90;version=1;width=484/https%3A%2F%2Fcdn-ak-img.shonenjumpplus.com%2Fpublic%2Fseries-thumbnail%2F10833519556325021792-3bd4f015d82e6c57e6059f825ede75d7%3F1601853144 ></div>")
            location.href ="トリコ用.html"
        break; 
        default:
            document.write("<p>miss</p>");
            break;
    };
}

