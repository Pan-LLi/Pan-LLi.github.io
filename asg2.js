function Change() {
    let obj1=document.getElementById("a1");
    obj1.textContent="Hello users!";
    obj1.style.color="silver";
    obj1.style.fontSize="30px";
    obj1.style.fontFamily='Finger Paint';
    
    let cc1=document.getElementById("a2");
    cc1.style.fontSize="30px";
    
    let cc2=document.getElementById("a3");
    cc2.style.fontSize="30px";
 
    
    
}

function randPrize(){
    let obj2=document.getElementById("displayprize");
    let prizes=["iPhone","Starbucks Coffee","Shirt","Earpod","iPad"];
    var index=Math.floor(Math.random()*(prizes.length));
    obj2.textContent="The prize you win is "+prizes[index];

}

function swap(){
    let p1=document.getElementById("p1");
    let text1=p1.textContent;
    let p2=document.getElementById("p2");
    let text2=p2.textContent;
    p1.textContent=text2;
    p2.textContent=text1;
}

function swapImg(){
    let img1=document.getElementById("img1");
    let img2=document.getElementById("img2");
    let img11=img1.src;
    let img22=img2.src;
    img1.src=img22;
    img2.src=img11;

}