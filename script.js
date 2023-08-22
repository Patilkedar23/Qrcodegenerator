
//variable declaration
let userinput=document.getElementById("userinput");
let qrimg=document.getElementById("qrimg");
let imgbox=document.getElementById("imgbox");

//function for generating the qr image
function generateQr(){

    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userinput.value;
    document.getElementById("imgbox").style.maxHeight="300px";
    document.getElementById("download-btn").style.display="block";
    if(userinput.value===""){
        userinput.placeholder="Enter Proper Value!";
        document.getElementById("download-btn").style.display="none";
    }
}
//handling the theme change event
var icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="icons/dark-mode.png";
    }
    else{
        icon.src="icons/light-mode.png"
    }
}

//handling download of an image 
// Get references to elements
const downloadImage = document.getElementById("qrimg");
const downloadButton = document.getElementById("download-btn");

// Add click event listener to the download button
downloadButton.addEventListener("click", function () {
    // Get the image URL
    const imageUrl = qrimg.src;

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = imageUrl;

    // Extract the filename from the URL 
    const filename = imageUrl.split("/").pop();

    // Set the download attribute and filename
    link.download = filename;

    // Simulate a click on the anchor to trigger the download
    link.click();
});
