const modal = document.getElementById('employeeModal');
const closeModalButton = document.getElementById('closeModalbutton')
// const submitBtn = document.querySelector("#submit")
// employeeModal=Document.querySelector("#employeeModal")



 document.getElementById("add_emp").addEventListener('click', function () {
  modal.style.display = 'block';
  modal.setAttribute("aria-hidden", "false");
  // submitBtn.body.display = 'submit';
  // employeeModal.innerHTML="employeeModalLabel"
});

closeModalButton.addEventListener('click', function () {
  modal.style.display = 'none';
  modal.setAttribute("aria-hidden", "true");

});



// get employees from databae and list it on the table
async function fetchEmployees() {
  try {
    const response = await fetch(" http://localhost:3000/employees")

    let tableBody = document.getElementById("tableBody")
    let column = "";


    if (!response.ok) {
      throw new Error(`HTTP error ! status :${response.status}`);

    }
    const employees = await response.json();
    console.log(employees);
    employees.forEach((element, index) => {

      column +=
        ` <tr>
              <td scope="row">#0 ${index}</td>
              <td>${element.salutation} ${element.firstName} ${element.lastName}</td>
              <td>${element.email}</td>
              <td>${element.phone}</td>
              <td>${element.gender}</td>
              <td>${element.dob}</td>
              <td>${element.country}</td>
            </tr>`
    });

    tableBody.innerHTML = column;
  }

  catch (error) {
    console.log("Error fetching employee data :", error);

  }
}

fetchEmployees();


const submitBtn = document.getElementById('submitBtn')
// add event 
submitBtn.addEventListener("click", (event) => {
  
  validation();
 
  
})


const salutationInp = document.getElementById("salutation")
const firstNameInp = document.getElementById("firstName")
const lastNameInp = document.getElementById("lastName")
const emailInp = document.getElementById("email")
const mobileInp = document.getElementById("mobile")
  const dobInp = document.getElementById("dob")
  const genderInp = document.querySelector('[name="gender"]');
  const qualificationInp = document.getElementById("qualification")
  const addressInp = document.getElementById("address")
  const stateInp = document.getElementById("state")
  const countryInp = document.getElementById("country")
  const cityInp = document.getElementById("city")
  const pinInp = document.getElementById("pin")
  const usernameInp = document.getElementById("username")
  const passwordInp = document.getElementById("password")



// define the validate function

function validation() {

  // const upload = upload.value.trim()
  const salutationVal = salutationInp.value
  const firstNameVal= firstNameInp.value
  const lastNameVal =  lastNameInp.value
  const emailVal= emailInp.value
  const mobileVal = mobileInp.value
  const dobVal= dobInp.value
  const genderVal = genderInp.value
  const qualificationVal = qualificationInp.value
  const addressVal = addressInp.value
  const stateVal = stateInp.value
  const countryVal = countryInp.value
  const cityVal = cityInp.value
  const pinVal = pinInp.value
  const usernameVal = usernameInp.value
  const passwordVal = passwordInp.value

  let isValid = true; 

  
  // salutation validation        
  const salutationregex = /^(Mr|Mrs|Ms|Dr|Prof|Mx)$/
  if (!salutationregex.test(salutationVal)) {
    validationerror(salutationInp, "please choose the salutation")
    isValid = false
  }
  else {
    validationsuccess(salutationInp, "success")
  }


  //  first name validation 

  const nameregex = /^[a-zA-Z]{2,50}$/;
  if (!nameregex.test(firstNameVal)) {
    validationerror(firstNameInp, "please enter your first name")
     isValid = false

  }
  else {
    validationsuccess(firstNameInp, "success")
  }



  // last name validation 

  const lastNameregex = /^[a-zA-Z]{1,50}$/;
  if (!lastNameregex.test(lastNameVal)) {
    validationerror(lastNameInp, "please enter your last name")
     isValid = false
  }

  else {
    validationsuccess(lastNameInp, "success")
  }


  // email validation 
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailregex.test(emailVal)) {
    validationerror(emailInp, "please enter your email")
     isValid = false
  }
  else {
    validationsuccess(emailInp, "success")
  }


  //  phone validation 

  const phoneregex = /^\+?[0-9\s\-()]{10,20}$/;

  if (!phoneregex.test(mobileVal)) {
    validationerror(mobileInp, "enter your phone number")
     isValid = false
  }
  else {
    validationsuccess(mobileInp, "success")
  }


  // address validation

  const addressregex = /^[a-zA-Z0-9\s,.'#-]{5,}$/;
  if (!addressregex.test(addressVal)) {
    validationerror(addressInp, "enter your address")
     isValid = false
  }

  else {
    validationsuccess(addressInp, "success")
  }

  //  qualification validation
  const qualificationsregex = /^[a-zA-Z0-9\s,.'-]{2,50}$/;
  if (!qualificationsregex.test(qualificationVal)) {
    validationerror(qualificationInp, "enter your qualification")
     isValid = false
  }

  else {
    validationsuccess(qualificationInp, "success")
  }



  // dob validation 
  const dobregex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  if (!dobregex.test(dobVal)) {
    
    validationerror(dobInp, "enter your date of birth")
     isValid = false
  }

  else {
    validationsuccess(dobInp, "success")
  }

  // pin validation 


  const pinRegex = /^[1-9][0-9]{5}$/;
  if (!pinRegex.test(pinVal)) {
    validationerror(pinInp, "enter the pin")
     isValid = false
  }

  else {
    validationsuccess(pinInp, "success")
  }




  // country validation


  if (countryVal === "") {
    validationerror(countryInp, "enter your country")
     isValid = false
  }
  else {
    validationsuccess(countryInp, "success")
  }



  // state validation

  if (stateVal === "") {
    validationerror(stateInp, "enter your state")
     isValid = false
  }
  else {
    validationsuccess(stateInp, "success")
  }


  //  city validation 

  const cityregex = /^[A-Za-z\s.'-]+$/;

  if (!cityregex.test(cityVal)) {
    validationerror(cityInp, "enter your city")
     isValid = false
  }

  else {
    validationsuccess(cityInp, "success")
  }


  // username validation 

  const usernameRegex = /^[a-zA-Z0-9_\.]+$/;

  

  if (!usernameRegex.test(usernameVal)) {
    validationerror(usernameInp, "enter the username")
     isValid = false
  }
  else {
    validationsuccess(usernameInp, "success")
  }


  // password validation

  // const passwordregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const passwordregex = /^[A-Za-z0-9]{6,}$/;
  

  if (!passwordregex.test(passwordVal)) {
    validationerror(passwordInp, "enter the password")
     isValid = false
  }
  
  else {
    validationsuccess(passwordInp, "success")
  }


// gender validation 


if (genderVal !== "male" && genderVal !== "female") {
  validationerror(genderInp, "please select your gender");
   isValid = false
} else {
  validationsuccess(genderInp, "success");
  }
  
  let formatedDob = dobVal.split('-').reverse().join('-')
  
  const formData = new FormData();
  formData.append("salutation", salutationVal);
  formData.append("firstName", firstNameVal);
  formData.append("lastName", lastNameVal);
  formData.append("email", emailVal);
  formData.append("phone", mobileVal);
  formData.append("dob", formatedDob);
  formData.append("gender", genderVal);
  formData.append("qualifications", qualificationVal);
  formData.append("address", addressVal);
  formData.append("state", stateVal);
  formData.append("country", countryVal);
  formData.append("city", cityVal);
  formData.append("pin", pinVal);
  formData.append("username", usernameVal);
  formData.append("password", passwordVal);


 if (isValid) {
   // Call the function to submit the form data
   console.log(formData);
   
    submitForm(formData);
  }



}

function validationerror(input, message) {
  console.log(input , message);
  
  const info = input.parentElement
  const span = info.querySelector("span")
  span.innerHTML = message;
  span.style.color = "red";
  input.style.setProperty('border-color', 'red')
  span.style.display = "block";
  // const icon = info.querySelector(".icon");
  // icon.classList.add("fa-solid fa-circle-exclamation")
  // icon.style.color="red";
  // icon.style.display="inline-block";
}

function validationsuccess(input, message) {
  

  
  // const icon=info.querySelector(".icon")
  // icon.classList.add("fa-solid fa-circle-check");
  // icon.style.color="green";
  // icon.style.display="inline-block";

}


function submitForm(formData) {
  console.log(formData);
  
  // Use Fetch API to send the POST request
  fetch('http://localhost:3000/employees', {
    method: 'POST',
    body: formData, // Send form data
  })
  .then(response => {
    if (response.ok) {
      // Handle success
      console.log(response);
      
      alert("Form submitted successfully!");
      // You can redirect the user or perform any other action after success
    } else {
      // Handle server errors
      alert("There was an error submitting the form.");
    }
  })
  .catch(error => {
    console.error('Error submitting form:', error);
    alert("Network error. Please try again.");
  });
}































































