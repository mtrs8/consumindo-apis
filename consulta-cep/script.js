$(document).ready(function(){
    $("#txtCep").focusout(function(){
        var cep = $("#txtCep").val();
        cep = cep.replace("-", "");

        var urlStr = "https://viacep.com.br/ws/"+ cep +"/json";
        $.ajax({
            url : urlStr,
            type : "get",
            dataType : "json",
            success : function(data){
                console.log(data);
                $("#txtCidade").val(data.localidade);
                $("#txtUf").val(data.uf);
                $("#txtBairro").val(data.bairro);
                $("#txtRua").val(data.logradouro);
                //$("#txtComplemento").val(data.complemento);
                $("#txtddd").val(data.ddd);
            },
            error : function(erro){
                console.log(erro);
            }
        });
    });
});