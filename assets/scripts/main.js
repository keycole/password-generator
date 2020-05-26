// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
    //Gather user selected parameters
    if(generateBtn){
        //Gather user selected password length
        var pwLength=prompt("How long do you want your password to be? You can choose a number from 8 - 128.");
            //Validate pwLength
            while (pwLength < 8 || pwLength > 128){
                var pwLength = prompt("Oops! You shall not pass! The password must be a number from 8 - 128.")   
            if(pwLength < 8 || pwLength > 128){
            var pwLength = prompt("Oops! You shall not pass! The password must be a number from 8 - 128.")
                };
            };
            console.log("The password length will be: " + pwLength);
        
        //Gather user request for symbols to be used
        var includeLower = confirm("Would you like your password to include lowercase letters?");
        console.log("The password will contain lowercase letters: " + includeLower);
        
        var includeUpper = confirm("Would you like your password to include uppercase letters?");
        console.log("The password will contain uppercase letters: " + includeUpper);
    
        var includeNumber = confirm("Would you like your password to include numbers?");
        console.log("The password will contain numbers: " + includeNumber);
    
        var includeSymbol = confirm("Would you like your password to include symbols?");
        console.log("The password will contain symbols: " + includeSymbol);

            //Confirm that the user has selected at least one character type
            while (includeLower===false && includeUpper===false && includeNumber===false && includeSymbol===false){
                alert("You shall not pass! Please try again. You must select at least one character type.");
                var includeLower = confirm("Would you like your password to include lowercase letters?");
                console.log("The password will contain lowercase letters: " + includeLower);
                
                var includeUpper = confirm("Would you like your password to include uppercase letters?");
                console.log("The password will contain uppercase letters: " + includeUpper);
            
                var includeNumber = confirm("Would you like your password to include numbers?");
                console.log("The password will contain numbers: " + includeNumber);
            
                var includeSymbol = confirm("Would you like your password to include symbols?");
                console.log("The password will contain symbols: " + includeSymbol);

            if (includeLower===false && includeUpper===false && includeNumber===false && includeSymbol===false){
                alert("You shall not pass! Please try again. You must select at least one character type.");
                var includeLower = confirm("Would you like your password to include lowercase letters?");
                console.log("The password will contain lowercase letters: " + includeLower);
                
                var includeUpper = confirm("Would you like your password to include uppercase letters?");
                console.log("The password will contain uppercase letters: " + includeUpper);
            
                var includeNumber = confirm("Would you like your password to include numbers?");
                console.log("The password will contain numbers: " + includeNumber);
            
                var includeSymbol = confirm("Would you like your password to include symbols?");
                console.log("The password will contain symbols: " + includeSymbol);
            };
        };    
    };

    //Generate password possible characters based on the user's input.
    var pwCharacters = '';

    if(includeLower===true){
        pwCharacters = pwCharacters + "abcdefghijklmnopqrstuvwxyz";
    };
    
    if(includeUpper===true){
        pwCharacters = pwCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    
    if(includeNumber===true){
        pwCharacters = pwCharacters + "0123456789";
    };
    
    if(includeSymbol===true){
        pwCharacters = pwCharacters + "!@#$%^&*()?";
    };
    
    console.log("The following characters will be used: " + pwCharacters);
    console.log("The pwCharacter var length = " + pwCharacters.length);

    //Generate password
    var password = '';

    for (i = 0; i < pwLength; i++){
        var password = password + Array.from(pwCharacters)[(Math.floor(Math.random() * pwCharacters.length))];
        console.log(password);
    };

    console.log(password);

    // Write password to the #password input
    var passwordText = document.querySelector("#password");
      
    passwordText.value = password;
    
  });