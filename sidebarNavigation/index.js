document.addEventListener("DOMContentLoaded", function () {
  const documentBody = document.querySelector("body");
  //create <nav>
  const navigation = document.createElement("nav");
  navigation.className = "navigation";
  //create nested links
  const instagramLink = document.createElement("a");
  instagramLink.className = "navigation__instagram";
  const facebookLink = document.createElement("a");
  facebookLink.className = "navigation__facebook";
  const twitterLink = document.createElement("a");
  twitterLink.className = "navigation__twitter";
  const linkedinLink = document.createElement("a");
  linkedinLink.className = "navigation__linkedin";
  //create images for links
  const instagramIcon = document.createElement("i");
  instagramIcon.className = "fa-brands fa-instagram";

  const facebookIcon = document.createElement("i");
  facebookIcon.className = "fa-brands fa-facebook";

  const twitterIcon = document.createElement("i");
  twitterIcon.className = "fa-brands fa-twitter";

  const linkedinIcon = document.createElement("i");
  linkedinIcon.className = "fa-brands fa-linkedin";

  //add images into links
  instagramLink.appendChild(instagramIcon);
  facebookLink.appendChild(facebookIcon);
  twitterLink.appendChild(twitterIcon);
  linkedinLink.appendChild(linkedinIcon);

  //add links into <nav>
  navigation.appendChild(instagramLink);
  navigation.appendChild(facebookLink);
  navigation.appendChild(twitterLink);
  navigation.appendChild(linkedinLink);
  //add <nav> into body
  documentBody.appendChild(navigation);

  //add eventlistener for :hover
  navigation.addEventListener("mouseover", (event) => {
    //add <span> elemets
    const instagramText = document.createElement("span");
    instagramText.className = "navigation__instagram-text";
    instagramText.innerHTML = "Instagram";
    const facebookText = document.createElement("span");
    facebookText.className = "navigation__facebook-text";
    facebookText.innerHTML = "Facebook";
    const twitterText = document.createElement("span");
    twitterText.className = "navigation__twitter-text";
    twitterText.innerHTML = "Twitter";
    const linkedinText = document.createElement("span");
    linkedinText.className = "navigation__linkedin-text";
    linkedinText.innerHTML = "Linkedin";
    instagramLink.appendChild(instagramText);
    facebookLink.appendChild(facebookText);
    twitterLink.appendChild(twitterText);
    linkedinLink.appendChild(linkedinText);
  });

  //add eventlistener when mouse is out from navigation
  navigation.addEventListener("mouseout", (event) => {
    const instagramLink = document.querySelector(".navigation__instagram");
    const instagramText = document.querySelector(".navigation__instagram-text");
    instagramLink.removeChild(instagramText);
    const facebookLink = document.querySelector(".navigation__facebook");
    const facebookText = document.querySelector(".navigation__facebook-text");
    facebookLink.removeChild(facebookText);
    const twitterLink = document.querySelector(".navigation__twitter");
    const twitterText = document.querySelector(".navigation__twitter-text");
    twitterLink.removeChild(twitterText);
    const linkedinLink = document.querySelector(".navigation__linkedin");
    const linkedinText = document.querySelector(".navigation__linkedin-text");
    linkedinLink.removeChild(linkedinText);
  });
});
