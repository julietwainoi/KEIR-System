const firebaseConfig = {
    apiKey: "AIzaSyAU9pRv8zhlMUfQNRks-tLTIVQj06dGAbM",
    authDomain: "tues--phone-keir.firebaseapp.com",
    projectId: "tues--phone-keir",
    storageBucket: "tues--phone-keir.appspot.com",
    messagingSenderId: "220975991824",
    appId: "1:220975991824:web:220ceb8fba64d12d890e95",
    measurementId: "G-9B20NBLBS0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  var totalItems;
  var maxCode;
  var code;
  
  //change the color and disabled attribute for edit button
  // show or hide the innerHTML of element with status id
  function changeStatus(code) {
    var status;
    firebase
      .database()
      .ref("personaldetails/" + code)
      .on("value", function (snapshot) {
        status = snapshot.val().status;
      });
  
    if (status === "pending") {
      firebase
        .database()
        .ref("personaldetails/" + code)
        .update({
          status: "completed",
        });
      document.getElementById(code).querySelector("#done").style.color =
        "#00b200";
      document.getElementById(code).querySelector("#editbtn").disabled = true;
      document
        .getElementById(code)
        .querySelector("#editbtn").style.backgroundColor =
        "rgba(116, 116, 116, 0.671)";
      document.getElementById(code).querySelector("#status").innerHTML = `
              <i class="far fa-check-circle"></i> Completed
              `;
    } else {
      firebase
        .database()
        .ref("personaldetails/" + code)
        .update({
          status: "pending",
        });
      document.getElementById(code).querySelector("#done").style.color = "gray";
      document.getElementById(code).querySelector("#editbtn").disabled = false;
      if (
        document.getElementById(code).querySelector("#editbtn").style
          .removeProperty
      ) {
        document
          .getElementById(code)
          .querySelector("#editbtn")
          .style.removeProperty("background-color");
      } else {
        document
          .getElementById(code)
          .querySelector("#editbtn")
          .style.removeAttribute("background-color");
      }
      document.getElementById(code).querySelector("#status").innerHTML = "";
    }
  }
  
  
  function storeData(event){
      event.preventDefault()
  
      var fullName = document.getElementById("FullName").value;
      var PassportNumber = document.getElementById("PassportNumber").value;
      var location = document.getElementById("Location").value;
      var Emailaddress = document.getElementById("Emailaddress").value;
      document.getElementById("FullName").value = "";
      document.getElementById("PassportNumber").value = "";
      document.getElementById("Location").value = "";
      document.getElementById("Emailaddress").value = "";
  
      //storing data into the firebase
      
      firebase
        .database()
        .ref("personaldetails"+ code)
        .set({
            FullName: fullName,
            passportNumber: PassportNumber,
            location: location,
            Emailaddress: Emailaddress,
            status :"pending",
  
          });
        
  
      document.getElementById("tasks-header").insertAdjacentHTML(
          "afterend",
  
        ` 
          <div class="personaldetails" id="${code}">
            <div class="data" id="${fullName}">
            <button class="done" id="done"onclick="changestatus(${code})"><i class="fa fa-check-circle"></i></button>
            <p class="fullName">${fullName}</P>
            <p class="passportNumber">${PassportNumber}</p>
            <p class="location">${location}</p>
            <p class="Emailaddress">${Emailaddress}</p>
            <p id="status"></p> 
            </div>
            <hr>
            <div class="buttons">
            <div class="buttons">
            <button class=" button edit" id="editData" onclick = "editData('${code}')" >EDIT TASK</button>
            <button class=" button delete" id="deleteData" onclick="deleteData('${code}')"  >DELETE TASK</button>
          </div>
        </div>
        `     
  
     );
  }
  
  function deleteData(code) {
      firebase.database().ref("personaldetails" + code).remove();
      document.getElementById(code).remove();
    
      firebase.database().ref("personaldetails").update
      ({totalItems:totalItems - 1,
          
        });
  
    
      }
  // Edit Task
  
  function editData(code) {
      document.getElementById("FullName").value = document
      .getElementById(code)
        .querySelector(".data")
        .querySelector(".fullName").innerHTML;
    
        document.getElementById("PassportNumber").value = document
        .getElementById(code)
        .querySelector(".data")
        .querySelector(".passportNumber").innerHTML;
        
        document.getElementById("Location").value = document
        .getElementById(code)
        .querySelector(".data")
        .querySelector(".location").innerHTML;
  
        document.getElementById("Emailaddress").value = document
        .getElementById(code)
        .querySelector(".data")
        .querySelector(".Emailaddress").innerHTML;
  
  
        if (document.getElementById("SUBMIT") !== null) {
          document.getElementById("SUBMIT").remove();
        }
        document.getElementById("form-btns").innerHTML = `
          <button class="button update" id = "updateTASK" onclick = "updateData('${code}')">󠀫󠀫<i class="fas fa-sync-alt"></i> UPDATE TASK</button>
          <button class="button cancel" id = "cancelTASK" onclick = "cancelUpdation('${code}' )"><i class="fas fa-ban"></i> CANCEL</button>
          `;
      }
      // Update Data and clear cancel and update task buttons
  
  function updateData(c) {
    var updateTask = document.getElementById("fullName").value;
    var updateDesc = document.getElementById("passportNumber").value;
    var updateTask = document.getElementById("location").value;
    var updateTask = document.getElementById("Emailaddress").value;
    
  
    firebase
      .database()
      .ref("personaldetails/" + c)
      .update({
        fullName: updatefullName,
        passportNumber: updatepassportNumber,
        location: updatelocation,
        Emailaddress:updateEmailaddress
  
      });
  
    document.getElementById("fullName").value = "";
    document.getElementById("passportNumber").value = "";
    document.getElementById("location").value = "";
    document.getElementById("Emailaddress").value = "";
    document.getElementById("updateTask").remove();
    document.getElementById("cancelTask").remove();
  
    document.getElementById("form-btns").innerHTML = `
    <button type="submit" class="button submit" id = "SUBMIT" >󠀫󠀫<i class="fas fa-plus"></i> SUBMIT </button>
    `;
   // Updating the task in the side bar
   document
   .getElementById(c)
   .querySelector(".data")
   .querySelector(".fullName").innerHTML = updatefullName;
  document
   .getElementById(c)
   .querySelector(".data")
   .querySelector(".passportNumber").innerHTML = updatepassportNumber ;
   document
   .getElementById(c)
   .querySelector(".data")
   .querySelector(".location").innerHTML = updatelocation;
   document
   .getElementById(c)
   .querySelector(".data")
   .querySelector(".Emailaddress").innerHTML = updateEmailaddress;
  
  }
  
  function cancelUpdation() {
  document.getElementById("fullName").value = "";
  document.getElementById("passportNumber").value = "";
  document.getElementById("location").value = "";
  document.getElementById("Emailaddress").value="";
  document.getElementById("updateTask").remove();
  document.getElementById("cancelTask").remove();
  
  document.getElementById("form-btns").innerHTML = `
  <button type="submit" class="button submit" id = "SUBMIT" >󠀫󠀫<i class="fas fa-plus"></i> SUBMIT </button>
  `;
  }
  
  var data;
  firebase
    .database()
    .ref("personaldetails")
    .on("value", function (snapshot) {
      data = snapshot.val();
    });
  
  // Show All Functionality
  function showAll() {
    if (data === null && document.getElementById("info") == null) {
      document.getElementById("tasks-header").insertAdjacentHTML(
        "afterend",
        `<div class="no-task-info" id = "info">
              <i class="fas fa-info-circle"></i>
              No pending tasks
          </div>`
      );
    }
  
    for (code in data) {
      var code = code;
      var fullName = data[code]["fullName"];
      var passportNumber= data[code]["passportNumber"];
      var location = data[code]["location"];
      var Emailaddress = data[code]["Emailaddress"];
      var status = data[code]["status"];
  
      var color;
      if (status === "pending") {
        color = "gray";
      } else {
        color = "#00b200";
      }
    }
  
  
  //  Show the data in the body in form of card
    document.getElementById("tasks-header").insertAdjacentHTML(
      "afterend",
      `<div class="personaldetails" id="${code}">
        <div class="data" id="${fullName}">
            
            <p class="fullName">${fullName}</p>
            <p class="passportNumber">${PassportNumber}</p>
            <p class="location">${location}</p>
            <p class="Emailaddress">${Emailaddress}</p>
            <small id = "status"></small>
        </div>
        <hr>
        <div class="buttons">
            <button class="button edit" id="editbtn" onclick = "editData('${code}')"><i class="fas fa-edit"></i> EDIT TASK</button>
            <button class="button delete" id="deletebtn" onclick = "deleteData('${code}')"><i class="fas fa-trash-alt"></i> DELETE TASK</button>
        </div>
        
        </div>`
    );
  
    
    if (status === "pending") {
      document.getElementById(code).querySelector("#editbtn").disabled = false;
      if (
        document.getElementById(code).querySelector("#editbtn").style
          .removeProperty
      ) {
        document
          .getElementById(code)
          .querySelector("#editbtn")
          .style.removeProperty("background-color");
      } else {
        document
          .getElementById(code)
          .querySelector("#editbtn")
          .style.removeAttribute("background-color");
      }
      document.getElementById(code).querySelector("#status").innerHTML = "";
    } else {
      document.getElementById(code).querySelector("#editbtn").disabled = true;
      document
        .getElementById(code)
        .querySelector("#editbtn").style.backgroundColor =
        "rgba(116, 116, 116, 0.671)";
      document.getElementById(code).querySelector("#status").innerHTML = `
            <i class="far fa-check-circle"></i> Completed
            `;
    }
  }
  
    
  
    // Delete everything in our database
  function deleteAll() {
    var option = false;
    if (totalItems === 0 && document.getElementById("info") === null) {
      document.getElementById("tasks-header").insertAdjacentHTML(
        "afterend",
        `<div class="no-task-info" id = "info">
              <i class="fas fa-info-circle"></i>
              No pending tasks
          </div>`
      );
    
      } 
  
  
  if (totalItems!== 0) {
    option = confirm(
      "The tasks will be permanently deleted. Do you want to continue?"
    );
    if (option === true) {
      firebase.database().ref("personaldetails").remove();
      document.querySelectorAll(".personaldetails").forEach((element) => {
        element.remove();
      });
      firebase.database().ref("personaldetails").update({
        totalItems: 0,
        maxCode: 0,
      });
      document.getElementById("tasks-header").insertAdjacentHTML(
        "afterend",
        `<div class="no-task-info" id = "info">
                <i class="fas fa-info-circle"></i>
                All items deleted
            </div>`
        );
      }
    }
  }
  
  