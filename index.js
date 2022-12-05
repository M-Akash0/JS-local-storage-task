function myvalidate() {
    var error = false;
    var firstnam = document.getElementById("fname");
    if (firstnam.value == "") {
        document.getElementById("valid1").innerHTML = "*A firstname is required*";
        var error = true;
    }
    else {
        document.getElementById("valid1").innerHTML = "";
    }

    var gender;
    var radio1 = document.getElementById("male");
    var radio2 = document.getElementById("female");
    var radio3 = document.getElementById("others");
    if (radio1.checked || radio2.checked || radio3.checked) {
        if (radio1.checked) {
            gender = radio1.value

        }
        if (radio2.checked) {
            gender = radio2.value
        }
        if (radio3.checked) {
            gender = radio3.value
        }
        document.getElementById("validgender").innerHTML = "";

    }
    else {
        document.getElementById("validgender").innerHTML = "*Please select your gender*"
        var error = true;
    }

    var mail = document.getElementById("email");
    var email = /^([(A-za-z0-9_.)])+\@([a-z0-9])+\.([a-z]{3})+$/;
    if (mail.value.match(email)) {
        document.getElementById("valid2").innerHTML = "";
    }
    else {
        if (mail.value == "") {
            document.getElementById("valid2").innerHTML = "*An email is required*"
            var error = true;
        }
        else {
            document.getElementById("valid2").innerHTML = "*Enter correct email format...@gmail.com  *"
            var error = true;
        }
    }

    var mobile = document.getElementById("phone");
    var phoneno = /^([0-9]{10})+$/;
    if (mobile.value.match(phoneno)) {
        document.getElementById("valid3").innerHTML = "";

    }
    else {
        if (mobile.value == "") {
            document.getElementById("valid3").innerHTML = "*A phone number is required*";
            var error = true;
        }
        else {
            document.getElementById("valid3").innerHTML = "*Enter only 10 charcters*";
            var error = true;
        }
    }



    var stddob = document.getElementById("dob");
    if (stddob.value == "") {
        document.getElementById("valid4").innerHTML = "*A dob is required*";
        var error = true;

    }
    else {
        document.getElementById("valid4").innerHTML = "";
    }

    var stdnation = document.getElementById("studentnation");
    if (stdnation.value == "") {
        document.getElementById("validnation").innerHTML = "*Please choose your Nationality*";
        var error = true;
    }
    else {
        document.getElementById("validnation").innerHTML = "";
    }

    var stdge = document.getElementById("studentdegree");
    if (stdge.value == "") {
        document.getElementById("currentdegree").innerHTML = "*Please choose your Degree*";
        var error = true;
    }
    else {
        document.getElementById("currentdegree").innerHTML = "";
    }


    var stdbrh = document.getElementById("studentbranch");
    if (stdbrh.value == "") {
        document.getElementById("currentbranch").innerHTML = "*Please choose your Branch";
        var error = true;
    }
    else {
        document.getElementById("currentbranch").innerHTML = "";
    }


    var stdyear = document.getElementById("studentyear");
    if (stdyear.value == "") {
        document.getElementById("currentyear").innerHTML = "*Please choose your Current year*";
        var error = true;
    }
    else {
        document.getElementById("currentyear").innerHTML = "";
    }


    var stdsem = document.getElementById("studentsem");
    if (stdsem.value == "") {
        document.getElementById("clgsem").innerHTML = "*Please choose your semester*";
        var error = true;
    }
    else {
        document.getElementById("clgsem").innerHTML = "";
    }


    var stdadm = document.getElementById("studentadmission");
    if (stdadm.value == "") {
        document.getElementById("studentadm").innerHTML = "*Please choose your admission*";
        var error = true;
    }
    else {
        document.getElementById("studentadm").innerHTML = "";
    }


    var fathernam = document.getElementById("fathername");
    if (fathernam.value == "") {
        document.getElementById("valid12").innerHTML = "*A fathername is required*";
        var error = true;
    }
    else {
        document.getElementById("valid12").innerHTML = "";
    }

    var fatheropt = document.getElementById("occupation");
    if (fatheropt.value == "") {
        document.getElementById("valid13").innerHTML = "*A occupation is required*";
        var error = true;

    }
    else {
        document.getElementById("valid13").innerHTML = "";
    }
    var fatherincom = document.getElementById("income");
    if (fatherincom.value == "") {
        document.getElementById("valid14").innerHTML = "*A income is required*";
        var error = true;

    }
    else {
        document.getElementById("valid14").innerHTML = "";
    }
    var mothernam = document.getElementById("mothername");
    if (mothernam.value == "") {
        document.getElementById("valid15").innerHTML = "*A mothername is required*";
        var error = true;

    }
    else {
        document.getElementById("valid15").innerHTML = "";
    }

    var contac = document.getElementById("Contact");
    var contactno = /^([0-9]{10})+$/;
    if (contac.value.match(contactno)) {
        document.getElementById("valid16").innerHTML = "";

    }
    else {
        if (contac.value == "") {
            document.getElementById("valid16").innerHTML = "*A contact number is required*";
            var error = true;
        }
        else {
            document.getElementById("valid16").innerHTML = "*Enter only 10 charcters*";
            var error = true;
        }
    }
    var studobj = {
        Fname: firstnam.value,
        Gender: gender,
        Email: mail.value,
        Mobile: mobile.value,
        Dob: stddob.value,
        Nationality: stdnation.value,
        Degree: stdge.value,
        Branch: stdbrh.value,
        Year: stdyear.value,
        Semester: stdsem.value,
        Admission: stdadm.value,
        FathersName: fathernam.value,
        FathersOccupation: fatheropt.value,
        Income: fatherincom.value,
        MothersName: mothernam.value,
        contactno: contac.value,
    }
    console.log(studobj);
    localStorage.setItem("student", JSON.stringify(studobj));
  
      if (error) {
        var error = true;
    }
    else {
         window.location.href = "index1.html";
    }

}
