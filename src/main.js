import Api from './functions';

async function showUser(username){
    const userInfo = await Api.getUserInfo(username);

    document.querySelector('#content h1').textContent = userInfo.name;
    document.querySelector('#content img').src = userInfo.avatar_url;
}

showUser(prompt('Write the username:'));