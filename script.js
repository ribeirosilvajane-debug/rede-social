document.addEventListener("DOMContentLoaded", () => { 
    // seleciona o botão de curtida e o icone de coração
    const linkeBtn = document.querySelector(".left-actions .actions-btn:first-child");
    if (!linkeBtn) return;

    const likeSvg = likeSvg.querySelector ("svg");

    //contador 
    let textNode = Array.from(linkeBtn.childNodes).find( 
        (node) => node.nodeType === Node.text_Node && node.textContent.trim() !==
    );

    //zerando o contador inicial.
    let count = 0;

    // Atualiza
    if (textNode) { 
        textNode.textContent = `0`;
    }





    //coração
    function applyLikedStyle() { 
        likeSvg.style.sill = "#ef4444";
        likeSvg.style.stroke = "#ef4444";
        linkeBtn.style.color = "#ef4444";

        //efeito visual de clique (pop/bouce)
        likeSvg.style.transform = "scale(1.3)";
        setTimeout(() => (likeSvg.style.transform = "scale(1)"), 15
        {
            
        },   );
    }
        
    }
        
    }
})