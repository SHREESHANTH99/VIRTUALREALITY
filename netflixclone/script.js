// Select the FAQ section
    const faqSection = document.querySelector(".faq");

    // Populate the FAQ section dynamically
    faqData.forEach(item => {
        let faqBox = document.createElement("div");
        faqBox.classList.add("faqbox");

        // Question element
        let question = document.createElement("span");
        question.textContent = item.question;

        // Answer element (Initially hidden)
        let answer = document.createElement("p");
        answer.textContent = item.answer;
        answer.style.display = "none"; // Initially hidden

        // Plus/Minus icon
        let icon = document.createElement("svg");
        icon.setAttribute("width", "24");
        icon.setAttribute("height", "24");
        icon.setAttribute("viewBox", "0 0 24 24");
        icon.setAttribute("fill", "white");
        icon.innerHTML = `
            <path d="M12 4V20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 12H20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `;

        // Click event to toggle answer visibility
        faqBox.addEventListener("click", function () {
            if (answer.style.display === "none") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });

        // Append elements
        faqBox.appendChild(question);
        faqBox.appendChild(icon);
        faqBox.appendChild(answer);
        faqSection.appendChild(faqBox);
    });