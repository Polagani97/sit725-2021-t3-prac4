var express = require('express')
var app = express()

app.use(express.static(__dirname+'/public'));

function reverse (stringin)
{
    let rev_string = "";
    for (let i = stringin.length-1 ; i>=0 ;i--)
    {
        rev_string+= stringin[i];
    }
    return rev_string;
}

function is_palindrome(stringin)
{
    var reversed_string = reverse(stringin);
    if( reversed_string === stringin)
    {
        console.log("parsed string is a palindrome");
        return "parsed string is a palindrome";
    }
    else{
        console.log("parsed string is not a palindrome");
        return "parsed string is not a palindrome";
    }
}

app.get('/check_palindrome',function(request,response){
    var stringin = request.query.stringinput;
    var result = is_palindrome(stringin);
    response.send("CHECK PALINDROME : "+result);
})

var port=3000;
app.listen(port)
console.log('Server is listening on: '+port)