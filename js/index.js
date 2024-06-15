function toggle() {
    var element = document.getElementById("close");
    element.classList.toggle("open");
}

// Intersection Observer for skills section
document.addEventListener('DOMContentLoaded', function () {
    const skills = document.querySelectorAll('.skill');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skill = entry.target;
                skill.classList.add('skill-visible');
                const skillLevel = skill.querySelector('.skill-level');
                const level = skillLevel.getAttribute('data-skill-level');
                skillLevel.style.width = level;
            }
        });
    }, {
        threshold: 0.5
    });

    skills.forEach(skill => {
        observer.observe(skill);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});