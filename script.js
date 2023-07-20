const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or Light Images
const imageMode = (color) => {
  image1.src = `img/1_${color}.svg`;
  image2.src = `img/2_${color}.svg`;
  image3.src = `img/3_${color}.svg`;
};

//toggle dark and light
const toggleLightDarkMode = (isLight) => {
  nav.style.backgroundColor = isLight
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = isLight
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
  isLight
    ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  isLight ? imageMode("light") : imageMode("dark");
};

// Switch Theme Dynamically
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleLightDarkMode(false);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleLightDarkMode(true);
  }
};

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleLightDarkMode(false);
  }
}

var form = document.getElementById('theform');
form.addEventListener('submit', function(e){
    e.preventDefault()
    document.getElementById('result').style.display = 'flex';
    let username = document.getElementById('searchuser').value;
fetch(`https://api.github.com/users/${username}`).then(res => res.json()).then(
    data => {
        document.getElementById('pfp').src = data['avatar_url'];
        document.getElementById('name').innerHTML = data['name'];
        document.getElementById('username-url').href = data['html_url'];
        document.getElementById('username').innerHTML = '@'+data['login'];
        document.getElementById('bio').innerHTML = data['bio'];
        document.getElementById('follower').innerHTML = data['followers'];
        document.getElementById('following').innerHTML = data['following'];
        document.getElementById('repo').innerHTML = data['public_repos'];
        document.getElementById('location').innerHTML = data['location'];
        document.getElementById('website').innerHTML = data['blog'];
        document.getElementById('twitter').innerHTML = '@'+data['twitter_username'];
        document.getElementById('organization').innerHTML = data['company'];
        document.getElementById('joindate').innerHTML = data['created_at'].slice(0, 10);
        document.getElementById('website-url').href = 'https://'+data['blog'];
        document.getElementById('twitter-url').href = 'https://twitter.com/'+data['twitter_username'];
})
})