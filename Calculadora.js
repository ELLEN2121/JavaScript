 <style>
  body {
            background-image:url(https://media.istockphoto.com/photos/healthy-eating-background-food-photography-different-fruits-and-picture-id515854732?s=612x612); 
            background-size:95%; 
            color:black;
            text-align: center;
            font-size:100px;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
   -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='path_relative_to_the_HTML_file', sizingMethod='scale')";

        }
 
 
 
 
 </style>
 
 
 
 <script>
 function pulaLinha() {
             document.write("<br>");
    }

        function mostra(frase) {
            document.write(frase);
        pulaLinha();
    }

        function calculaImc(altura, peso) {

            var imc = peso / (altura * altura);
        return imc;
    }
        var nome= prompt("Insira seu nome: ")
        var altura= prompt("Inisira sua altura: ");
        var peso= prompt("Insira seu peso: ")
        var imcCalculado = calculaImc(altura, peso);
        mostra(nome +" o seu IMC é "+  Math.round(imcCalculado));

if(imcCalculado < 18.5) {
  pulaLinha();
    mostra(" Você está abaixo do recomendado.");
}

if(imcCalculado > 35) {
  pulaLinha();
    mostra("Você está acima do recomendado.");
}
 
if(imcCalculado >= 18.5 && imcCalculado <= 35) {
   pulaLinha();
    mostra("Seu IMC está excelente!");
 
}
</script>
   
