
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("subscribeForm");
    if (form){
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const userName = document.getElementById("Name").value;
            const userEmail = document.getElementById("Email").value;
            const userDOB = document.getElementById("DOB").value;
            const userGender = document.getElementById("gender").value;
            const userEULA = document.getElementById('EULA').checked;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            let isValid = true;

            if (!userEULA) {
                alert("You need to accept the User Agreement.");
                isValid = false;
            }

            if (userName == "" || userEmail == "" || userDOB == "" || userGender == "") {
                alert("You must input data to all of the form items.")
                isValid = false;
            }

            if(userName.length < 3 || userName.length > 30){
                alert("Your name must be between 3 and 50 characters long")
                isValid = false;
            }

            if (!emailRegex.test(userEmail)){
                alert("The email you've submitted is not valid.");
                isValid = false;
            }

            const dobDate = new Date(userDOB);
            const currentDate = new Date();
            const ageInYears = currentDate.getFullYear() - dobDate.getFullYear();

            if (ageInYears > 100 || ageInYears < 5) {
                alert('Your age cannot be over 100 years old or under 5 years old');
                isValid = false;
            }

            if (isValid) {
                form.submit();
            }
        });
    }
});