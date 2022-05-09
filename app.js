function verMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnVerMais = document.getElementById("btnVerMais");
    var container = document.getElementById("container-quinto");
    var containerS = document.getElementById("container-sexto");
    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnVerMais.innerHTML = "ver mais";
        container.classList.remove("container-tamanhoG");
        container.classList.add("container-tamanhoP");
        containerS.classList.remove("transicao2");
        containerS.classList.add("transicao1");
        btnVerMais.style.display = "inline";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnVerMais.innerHTML = "ver menos";
        btnVerMais.style.display = "none";
        containerS.classList.remove("container-tamanhoP");
        containerS.classList.add("container-tamanhoG");
        containerS.classList.remove("transicao1");
        containerS.classList.add("transicao2");
    }
}

var btn = document.getElementById('btnResp1');
var container = document.querySelector('.resposta1');
var container1 = document.getElementById("container1");
btn.addEventListener('click', function () {

    if (container.style.display === 'block') {
        container.style.display = 'none';
        container1.classList.remove("transicao4");
        container1.classList.add("transicao3");
    } else {
        container.style.display = 'block';
        container1.classList.remove("transicao3");
        container1.classList.add("transicao4");
    }
});

var btn2 = document.getElementById('btnResp2');
var containerS = document.querySelector('.resposta2');
var container2 = document.getElementById("container2");
var container3 = document.getElementById("container3");
btn2.addEventListener('click', function () {

    if (containerS.style.display === 'block') {
        containerS.style.display = 'none';
        container2.classList.remove("transicao6");
        container2.classList.add("transicao5");
        container3.classList.remove("transicao8");
        container3.classList.add("transicao7");
    } else {
        containerS.style.display = 'block';
        container2.classList.remove("transicao5");
        container2.classList.add("transicao6");
        container3.classList.remove("transicao7");
        container3.classList.add("transicao8");
    }
});

