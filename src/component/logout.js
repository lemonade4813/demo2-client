export default function Logout(){

    localStorage.removeItem("userId");

    window.location.href="/"
    
}