
document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector(".like-btn");
  const postMedia = document.querySelector(".post-media");
  const bookmarkBtn = document.querySelector(".bookmark-btn");

  if (!likeBtn) return;

  const likesCountSpan = likeBtn.querySelector(".likes-count");

  let isLiked = false;
  let baseLikes = 1200; // Valor inicial correspondente ao '1.2K' do HTML

  // Formata números grandes (ex: 1200 -> 1.2K)
  function formatLikes(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  // Função para Incrementar a Curtida
  function addLike() {
    if (!isLiked) {
      baseLikes++;
      isLiked = true;
      likeBtn.classList.add("liked");

      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }

      // Efeito visual de animação (bounce) no coração
      const svg = likeBtn.querySelector("svg");
      if (svg) {
        svg.style.transform = "scale(1.4)";
        setTimeout(() => {
          svg.style.transform = "scale(1)";
        }, 150);
      }
    }
  }

  // Evento de clique no BOTÃO DE CORAÇÃO (Curte ou Descurte)
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isLiked) {
      // Se já estava curtido, descurte (-1)
      isLiked = false;
      baseLikes = Math.max(0, baseLikes - 1);
      likeBtn.classList.remove("liked");
      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }
    } else {
      // Se não estava curtido, adiciona curtida
      addLike();
    }
  });

  // Evento de clique na IMAGEM PRINCIPAL
  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  // Evento no botão de SALVAR (Bookmark)
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

      const svg = bookmarkBtn.querySelector("svg");
      if (svg) {
        svg.style.transform = "scale(1.2)";
        setTimeout(() => {
          svg.style.transform = "scale(1)";
        }, 150);
      }
    });
  }
});