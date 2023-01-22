/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Seyed Sepehr Sadeghian Dehkordi  Student ID: 172344210  Date: Jan 21 2023
*
********************************************************************************/ 

let serverVerbs=["GET","GET","GET","POST","GET","POST"];
let serverPaths=["/","/about","/contact","/login","/panel","/logout"];
let serverResponses=["Welcome to WEB700 Assignment 1","This assignment was prepared by Seyed Sepehr Sadeghian Dehkordi","Seyed Sepehr Sadeghian Dehkordi : 172344210","User Logged In","Main Panel","Logout Complete"]; 


let httpRequest =   function(httpVerb ,path){
    for (let i = 0; i < serverVerbs.length; i++){
        if(serverVerbs[i]==httpVerb ){  
            if(serverPaths[i]==path)  {                    
            return "200: " +serverResponses[i]
        }   
      }     
     }
     return "404: Unable to process "+httpVerb+" request for " +path       
 } 

 var testVerbs = [ "GET", "POST"];
 var testPaths = [ "/", "/about", "/contact","/login", "/panel","/logout","/randompath1","/randompath2"];
 
let getRandomInteger = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
let automateTests = function (){
    function randomRequest (){
        randVerb=getRandomInteger(0,1)
        randPath=getRandomInteger(0,7)
    
        console.log(httpRequest(testVerbs[randVerb],testPaths[randPath]))
    } 
    setInterval(randomRequest,1)
}

automateTests()