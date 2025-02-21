
    const faqSection = document.querySelector(".faq");

    faqData.forEach(item => {
        let faqBox = document.createElement("div");
        faqBox.classList.add("faqbox");
        let question = document.createElement("span");
        question.textContent = item.question;

        let answer = document.createElement("p");
        answer.textContent = item.answer;
        answer.style.display = "none";

      
        let icon = document.createElement("svg");
        icon.setAttribute("width", "24");
        icon.setAttribute("height", "24");
        icon.setAttribute("viewBox", "0 0 24 24");
        icon.setAttribute("fill", "white");
        icon.innerHTML = `
            <path d="M12 4V20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 12H20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `;

       
        faqBox.addEventListener("click", function () {
            if (answer.style.display === "none") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });

        
        faqBox.appendChild(question);
        faqBox.appendChild(icon);
        faqBox.appendChild(answer);
        faqSection.appendChild(faqBox);
    });
