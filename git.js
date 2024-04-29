let url="https://api.github.com/users/"

let profilename=document.querySelector(".profilrname");
let avtar=document.querySelector(".picc");
let username=document.querySelector(".username");
let folows=document.querySelector(".folwes")
let folowing=document.querySelector(".folowing");
let bio=document.querySelector(".bio");
let repos=document.querySelector(".Repost");
let searchbtn=document.getElementById("searchbtn");
let profile=document.getElementById("Profile");
let inputvalue=document.querySelector(".inputt")
let empthsearch=document.querySelector(".khali")
let viewprofile=document.querySelector("#viewprofilebtn")

searchbtn.addEventListener("click",async()=>{
    search=inputvalue.value;
    let res = await fetch(`${url}${search}`);
    let data = await res.json();

    if(data.login){

        empthsearch.classList.add("hide")
        profile.classList.remove("hide")
        console.log('search=',search);
    }
    else{
        
        console.log('login nai hy');
        empthsearch.classList.remove("hide")
        empthsearch.innerHTML="404 Not Found"
        profile.classList.add("hide");
    };

    console.log('data=',data);
    newdata(data);
    
});

let newdata=(data)=>{
    search=inputvalue.value;

    profilename.innerHTML=data.name;
    username.innerHTML=`@${data.login}`;
    avtar.src=data.avatar_url;
    folows.innerHTML=data.followers;
    folowing.innerHTML=data.following;
    repos.innerHTML=data.public_repos;
    bio.innerHTML=data.bio;
    let prolink="https://github.com/" 
    viewprofile.href=`${prolink}${search}`;

    console.log('newdta=',data.login);
};







