const PROJECTS = [
    {
        name: 'SpammyBot',
        description: 'A personal Discord bot that sends memes and watches for friends.',
        language: 'Python',
        languageClass: 'text-purple-400',
        githubUrl: 'https://github.com/srinj-ai/SpammyBot',
    },
    {
        name: 'Infinite Clicker',
        description: 'A simple browser game with score multipliers. Very addicting!',
        language: 'JavaScript',
        languageClass: 'text-pink-400',
        githubUrl: 'https://github.com/srinj-ai/infinite-clicker',
    },
    {
        name: 'My Dotfiles',
        description: 'Custom Linux settings and terminal themes I use daily.',
        language: 'Bash Shell',
        languageClass: 'text-blue-400',
        githubUrl: 'https://github.com/srinj-ai/dotfiles',
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = PROJECTS.map((project) => `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
           class="project-card bg-[#120f22] border border-purple-900/60 rounded-2xl p-6 flex flex-col justify-between sketch-border smooth-hover">
            <h3 class="text-xl font-bold text-white mb-2">${project.name}</h3>
            <p class="text-slate-400 text-sm mb-4">${project.description}</p>
            <span class="${project.languageClass} text-xs font-mono">${project.language}</span>
        </a>
    `).join('');
});
