let featuresLink = document.getElementById('features-link')
let featuresMenu = document.getElementById('features-menu')
let featuresStroll = document.getElementById('features-stroll')

let companyLink = document.getElementById('company-link');
let companyMenu = document.getElementById('company-menu');
let companyStroll = document.getElementById('company-stroll');
let featuresClickCounter = 1;
let companyClickCounter = 1;


featuresLink.onmouseover = function showFeaturesMenu(){
    featuresMenu.classList.add('features-menu-open');
    featuresMenu.style.display = "flex";
    featuresStroll.url = "./images/icon-arrow-up.svg";
}

featuresLink.onmouseleave = function hideFeaturesMenu(){
    if(featuresClickCounter % 2 !==0){
    featuresMenu.classList.remove('features-menu-open');
    featuresMenu.style.display = "none";
    featuresStroll.src = "./images/icon-arrow-down.svg";
    }
}

companyLink.onmouseover = function showCompanyMenu(){
    companyMenu.classList.add('company-menu-open');
    companyMenu.style.display = "flex";
    companyStroll.src = "./images/icon-arrow-up.svg";
}

companyLink.onmouseleave = function hideCompanyMenu(){
    if(companyClickCounter % 2 !==0){
    companyMenu.classList.remove('company-menu-open');
    companyMenu.style.display = "none";
    companyStroll.src = "./images/icon-arrow-down.svg";
    }
}

featuresLink.onclick = function displayFeaturesMenu(){
    
    if(featuresClickCounter % 2 !==0){
      featuresMenu.classList.add('features-menu-open');
      featuresMenu.style.display = "flex";
      featuresStroll.src = "./images/icon-arrow-up.svg";
    }else{
      featuresMenu.classList.remove('features-menu-open');
      featuresMenu.style.display = "none";
      featuresStroll.src = "./images/icon-arrow-down.svg";
    }
    return featuresClickCounter++
}

companyLink.onclick = function displayCompanyMenu(){
    
    if(companyClickCounter % 2 !==0){
      companyMenu.classList.add('company-menu-open');
      companyMenu.style.display = "flex";
      companyStroll.src = "./images/icon-arrow-up.svg";
    }else{
      companyMenu.classList.remove('company-menu-open');
      companyMenu.style.display = "none";
      companyStroll.src = "./images/icon-arrow-down.svg";
    }
    return companyClickCounter++
}

