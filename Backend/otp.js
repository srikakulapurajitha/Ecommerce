const textflow = require("textflow.js");
textflow.useKey("GxmJjG39CdfXbzpVIESdp04TMPkLQJg464mcuralHxGkcFRriMkG0WrpAbsUbouq");

// Sending an SMS in one line
textflow.sendSMS("+917387591037", "Dummy message text...",(result) => {
    if (result.ok) {
      console.log("SUCCESS");
    }
  })
  
  // Awaiting promise inside of async function


// OTP Verification
// User has sent his phone number for verification
//textflow.sendVerificationSMS("+11234567890", verificationOptions);

// Show him the code submission form
// We will handle the verification code ourselves

// The user has submitted the code
//let result = await textflow.verifyCode("+11234567890", "USER_ENTERED_CODE"); 
// if result.valid is true, then the phone number is verified. 