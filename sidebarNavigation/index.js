document.addEventListener("DOMContentLoaded", function () {
  const documentBody = document.querySelector("body");
  //create navigation sidebar
  const navigation = document.createElement("nav");
  navigation.className = "navigation";

  //create nested links
  const instagramLink = document.createElement("a");
  instagramLink.className = "navigation__network navigation__instagram";
  const facebookLink = document.createElement("a");
  facebookLink.className = "navigation__network navigation__facebook";
  const twitterLink = document.createElement("a");
  twitterLink.className = "navigation__network navigation__twitter";
  const linkedinLink = document.createElement("a");
  linkedinLink.className = "navigation__network navigation__linkedin";

  //add images for links
  const instagramIcon = document.createElement("i");
  instagramIcon.className = "fa-brands fa-instagram";

  const facebookIcon = document.createElement("i");
  facebookIcon.className = "fa-brands fa-facebook";

  const twitterIcon = document.createElement("i");
  twitterIcon.className = "fa-brands fa-twitter";

  const linkedinIcon = document.createElement("i");
  linkedinIcon.className = "fa-brands fa-linkedin";

  // add all elements to navigation sidebar
  instagramLink.append(instagramIcon);
  facebookLink.append(facebookIcon);
  twitterLink.append(twitterIcon);
  linkedinLink.append(linkedinIcon);

  navigation.append(instagramLink);
  navigation.append(facebookLink);
  navigation.append(twitterLink);
  navigation.append(linkedinLink);

  //add navigation sidebar to the page
  documentBody.append(navigation);

  //eventlistener for :hover
  navigation.addEventListener("mouseenter", (event) => {
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

    instagramLink.prepend(instagramText);
    facebookLink.prepend(facebookText);
    twitterLink.prepend(twitterText);
    linkedinLink.prepend(linkedinText);
  });

  //eventlistener when mouse is out from navigation
  navigation.addEventListener("mouseleave", (event) => {});
});
