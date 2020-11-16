/*
    Méthodes d'accès aux services Web API_Server/bookmarks
 */

//const apiBaseURL= "http://localhost:5000/api/bookmarks";
//const apiBaseURL= "https://blushing-imaginary-streetcar.glitch.me/api/bookmarks";
const apiBaseURL= "https://worried-low-reading.glitch.me//api/bookmarks";

function webAPI_GET_ALL(queryString, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + queryString,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data => { successCallBack(data); console.log("webAPI_GET_ALL - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET_ALL - error");
        }
    });
}

function webAPI_GET( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data  => { successCallBack(data); console.log("webAPI_GET - success", data);},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET - error");
        }
    });
}

function webAPI_POST( data , successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: (data) => {successCallBack();  console.log("webAPI_POST - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_POST - error");
        }
    });
}

function webAPI_PUT(data, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + data.Id,
        type: 'PUT',
        contentType:'application/json',
        data: JSON.stringify(data),
        success:(s) => {successCallBack();  console.log("webAPI_PUT - success", s); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_PUT - error");
        }
    });
}

function webAPI_DELETE( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE - error");
        }
    });
}
function webAPI_LOGIN(email, password, successCallBack, errorCallBack){ //todo
    $.ajax({
        url: apiBaseURL,
        contentType:'text/plain',
        type: 'GET',
        success:() =>{successCallBack(); console.log("webAPI_LOGGIN - success"); storeLoggedUsername(username)},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_LOGIN - error");
        }
    })
}
function webAPI_REGISTER(email, username, password, successCallBack, errorCallBack){ //todo

}
function webAPI_EditProfile(username, email, password, successCallBack, errorCallBack){ //todo

}
function eraseAccessToken(){
    localStorage.setItem('access_Token', null);
}
function retreiveAccessToken(){
    return localStorage.getItem('access_token');
}
function getBearerAuthorizationToken(){
    return {'Authorization': 'Bearer ' + retreiveAccessToken()};
}
function storeLoggedUsername(username){
    localStorage.setItem('username', username);
}
function retreiveLoggedUsername(){
    return localStorage.getItem('username');
}
