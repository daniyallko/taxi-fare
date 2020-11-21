$(document).ready(function() {
    $(".choose").change(function () {
        $("select option").prop("disabled", false);
        $(".choose").not($(this)).find("option[value='" + $(this).val() + "']").prop("disabled", true);
    });
    $("#lugg").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
        if (!(keyCode >= 48 && keyCode <= 57)) {
          return false;
        }
    });
    $('#err').hide();
     $cabtyp = $('#cabtype'), $lug = $('#lugg');
        $cabtyp.change(function () {
            if ($cabtyp.val() == 'CedMicro') {
                $lug.attr('disabled', 'disabled').val('');
                $('#err').show();
            } else {
                $lug.removeAttr('disabled');
                $('#err').hide();
            }
        }).trigger('change');
        $('#nu').hide();
        $('#ep').hide();
        $('#ed').hide();
        $('#ec').hide();
   $("#button4").click(function(e){
        e.preventDefault();
        $pickup=$("#pickup").val();
        $drop=$("#drop").val();
        $cabtype=$("#cabtype").val();
        $lugg=$("#lugg").val();
        if(isNaN($lugg)){
            $('#fare').hide();
            return $('#nu').show();
        }
        else{
            $('#nu').hide();
        }
        if($pickup==null)
        {
            return $('#ep').show();
        }
        else{
            $('#ep').hide();
        }
        console.log($drop);
        if($drop=="")
        {
            return $('#ed').show();
        }
        else{
            $('#ed').hide();
        }
        console.log($cabtype);
        if($cabtype=="")
        {
            $('#ed').hide();
            return $('#ec').show();
        }
        else{
            $('#ec').hide();
        }
        if($pickup=="")
        {
            return $('#ep').show();
        }
        else{
            $('#ep').hide();
        }
        $.ajax({
            url: 'process.php',
            type: 'post',
            data:{
                pickup : $pickup,
                drop : $drop,
                cabtype : $cabtype,
                lugg : $lugg
            },
            success: function (result) {
                console.log(result);
                $('#nu').hide();
                $('#ep').hide();
                $('#ed').hide();
                $('#ec').hide();
                $('#fare').show();
                $('#fare').html("Your Fare is "+result);
            },
            error: function () {
                alert(error);
            }
        });
    });
});

