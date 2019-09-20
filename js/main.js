$( document ).ready(function() { // loading page, fadeIn the formulaire and call function
    VerificationAge();
    VerifPassword();
    $(".hide").hide();
    $(".hide").fadeIn(3000);
})

function VerificationAge() { // verify if you are Majeur or mineur
    $("#age").keyup(function(){
        if($(this).val() == 0){
            $("#AgeVerification").text("");
        }else if($(this).val() < 18){
            $("#AgeVerification").text("Mineur").animate({fontSize: '1em'}, "slow");
            $("#AgeVerification").addClass("text-warning");
        }else if($(this).val() >= 18) {
            $("#AgeVerification").text("Majeur").animate({fontSize: '3em'}, "slow");
            $("#AgeVerification").removeClass().addClass("text-success");
        }
    })
}

function VerifPassword(){ // verify if you password equal to confirm Password
    $("#password").change(function(){
        if($(this).val() != $("#confirmPassword").val()){
            $("#PasswordVerif").text("Les 2 mots de passe ne correspondent pas !");
            $("#PasswordVerif").css("color", "red");
        }else {
            $("#PasswordVerif").text("");
        }
    });
    $("#confirmPassword").change(function(){
        if($(this).val() != $("#password").val()){
            $("#PasswordVerif").text("Les 2 mots de passe ne correspondent pas !");
            $("#PasswordVerif").css("color", "red");
        }else {
            $("#PasswordVerif").text("");
        }
    });
}
$("button").click(function(e){ // when click on the button submit , verify if input is not empty and post below the formulaire the seizure of user
    var lastname = $("#lastname").val();
    var firstname = $("#firstname").val();
    var pseudo = $("#pseudo").val();
    var password = $("#password").val();
    var btnradio = $("input[name='btnradio']:checked").val();
    var age = $("#age").val();

    if(lastname == "" || firstname == "" || pseudo == "" || password == "" || btnradio == undefined || $("#PasswordVerif").text() != ""){
        $("#warning").html("Veuillez remplir tout les champs");
        event.preventDefault();
    }else {
        event.preventDefault();
        $(".hide").hide("slow");
        $(".show").removeClass("d-none");
        $("#summary").html(btnradio +"<br />"+ lastname + " " + firstname + "<br /> Age :" + age + $("#AgeVerification").text() + "<br /> Pseudo : " + pseudo + "<br />  Mot de passe : " + password);
    }
})




