//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
  name: 'John delavega',
  email: 'john.doe@example.com',
  age: 25,
  dob: '08/02/1989',
  active: true,
  img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

const userProfile = document.querySelector('#profile');
userProfile.style.background = "linear-gradient(-135deg, rgb(250, 218, 97) 0%, rgb(255, 145, 136) 50%, rgb(255, 90, 205) 100%)";
userProfile.style.margin = "0 auto";
userProfile.style.padding = "20px";
userProfile.style.width = "400px";
userProfile.style.color = "#fff";

const userAvatar = document.createElement('img');
userAvatar.src = userData.img;
userAvatar.alt = "avatar";
userProfile.appendChild(userAvatar);

const userName = document.createElement('h1');
userName.innerText = userData.name;
userName.style.margin = "10px 0";
userName.style.fontWeight = "bold";
userName.style.fontSize = "1.5em";
userProfile.appendChild(userName);



const userEmail = document.createElement('p');
userEmail.innerText = userData.email;
userProfile.appendChild(userEmail);

const userAge = document.createElement('p');
userAge.innerText = userData.age;
userProfile.appendChild(userAge);

const userDob = document.createElement('p');
userDob.innerText = userData.dob;
userProfile.appendChild(userDob);

const userActive = document.createElement('p');
userActive.innerText = userData.active;
userProfile.appendChild(userActive);
