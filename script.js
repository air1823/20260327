document.addEventListener('DOMContentLoaded', () => {
    // 初始化專業技能圓圈 (Skills)
    const skillItems = document.querySelectorAll('.list-skill li');
    skillItems.forEach(item => {
        const percent = item.getAttribute('data-percent');
        const radius = 25;
        const circumference = 2 * Math.PI * radius;
        
        const svg = `
            <svg class="skill-circle-svg">
                <circle class="skill-circle-bg" cx="30" cy="30" r="${radius}"></circle>
                <circle class="skill-circle-bar" cx="30" cy="30" r="${radius}" 
                    style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${circumference}">
                </circle>
                <text x="30" y="35" text-anchor="middle" font-size="10" fill="#333">${percent}%</text>
            </svg>
        `;
        item.insertAdjacentHTML('afterbegin', svg);

        // 觸發動畫
        setTimeout(() => {
            const bar = item.querySelector('.skill-circle-bar');
            const offset = circumference - (percent / 100) * circumference;
            bar.style.strokeDashoffset = offset;
        }, 100);
    });

    // 初始化程式技能條 (Programming Skills)
    const progItems = document.querySelectorAll('.listProgram li');
    progItems.forEach(item => {
        const percent = item.getAttribute('data-percent');
        const label = item.innerText;
        item.innerText = ''; // 清空文字，重新結構化
        item.setAttribute('data-label', label);
        
        item.innerHTML = `<span>${label}</span><div class="prog-bar-container"><div class="prog-bar-fill"></div></div>`;
        
        setTimeout(() => {
            item.querySelector('.prog-bar-fill').style.width = percent + '%';
        }, 100);
    });
});