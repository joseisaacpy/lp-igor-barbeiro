// modal
const modal = document.getElementById("modal");

// imagem do modal
const imagemModal = document.querySelector("#modal img");

// botão de fechar modal
const btnFecharModal = document.querySelector(".btnFecharModal");

// função para fechar modal
function fecharModal() {
  // deixa modal invisivel
  modal.style.display = "none";
}

// adiciona função de fechar o modal
btnFecharModal.addEventListener("click", fecharModal);

// todas as imagens da galeria
const imagensGaleria = document.querySelectorAll(".galery-container img");

// para cada imagem, adiciona ouvinte de click
imagensGaleria.forEach((imagem) => {
  imagem.addEventListener("click", () => {
    // deixa modal visivel
    modal.style.display = "flex";

    // a imagem do modal terá a src da imagem clicada
    imagemModal.src = imagem.src;
  });
});

// se o user clicar em qualquer lugar, vai sumir o modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    // deixa modal invisivel se o user clicar em qualquer lugar fora do modal
    fecharModal();
  }
});
