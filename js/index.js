const vid=document.getElementById("vid")

const myFunction=()=>{
  document.getElementById("vid").classList.add("size");
  document.getElementById("vid").classList.remove("videoSizeDefault")
  document.getElementById("icon").classList.add("hideIcon")
  document.getElementById("icon").classList.remove("showIcon")
  vid.muted=false;

}
vid.addEventListener("click",myFunction,myFunction1);