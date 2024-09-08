document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.querySelector('.skills') as HTMLDivElement;

    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', () => {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
                toggleSkillsButton.textContent = 'Hide Skills Section';
            } else {
                skillsSection.style.display = 'none';
                toggleSkillsButton.textContent = 'Show Skills Section';
            }
        });
    }
});
