export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken)
    {
        return {
            Authorisation:"Pushpak" + user.accessToken
        };
    }
    else{
        return {};
    }
}