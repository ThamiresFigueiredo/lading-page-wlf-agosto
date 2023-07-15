function mostrarCampoEspecifico(selectElement) {
  var campoEspecifico = document.getElementById("campoEspecifico");
  var campoEspecificoLabel = document.getElementById("campoEspecificoLabel");

  if (selectElement.value === "Veículo Próprio") {
    campoEspecificoLabel.textContent =
      "Se você respondeu veículo próprio, por favor informe modelo, cor e placa do seu veículo:";
    campoEspecifico.style.display = "flex";
  } else if (selectElement.value === "Outro") {
    campoEspecificoLabel.textContent =
      "Se você respondeu OUTRO, por favor informe qual o seu meio de transporte:";
    campoEspecifico.style.display = "flex";
  } else {
    campoEspecifico.style.display = "none";
  }
}

function validarFormulario(form) {
  var secoes = form.getElementsByClassName('form-item');
  var secoesSelecionadas = 0;
  var radiosSelecionados = form.querySelectorAll('input[type="radio"]:checked');
  
  for (var i = 0; i < secoes.length; i++) {
    var radiosSecao = secoes[i].querySelectorAll('input[type="radio"]');
    var selecionadoSecao = false;
    for (var j = 0; j < radiosSecao.length; j++) {
      if (radiosSecao[j].checked) {
        selecionadoSecao = true;
        break;
      }
    }
    if (selecionadoSecao) {
      secoesSelecionadas++;
    }
  }
  
  if (radiosSelecionados.length === secoesSelecionadas) {
    alert('Pré-inscrição concluída com sucesso! Agora só aguardar enquanto analisamos, em breve receberá retorno');
    return true; // Permite o envio do formulário
  } else {
    alert('Por favor, selecione pelo menos uma opção em cada seção.');
    return false; // Impede o envio do formulário
  }
  event.preventDefault();

}

