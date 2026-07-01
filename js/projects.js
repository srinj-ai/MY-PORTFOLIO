const PROJECTS = [
    {
        name: 'VORTEX AI',
        description: 'A API calling web site which can help you get multiple API responses in one place with outer ferature like VTV and other features.',
        language: 'Python and JavaScript',
        languageClass: 'text-purple-400',
        githubUrl: 'https://vortex-ai-assistent-uw75.vercel.app/',
    },
    {
        name: 'Wed OS',
        description: 'A exeperement of making a working operating system in the browser using HTML, CSS and JS.',
        language: 'JavaScript and Vite',
        languageClass: 'text-pink-400',
        githubUrl: 'https://web-os-portfolio-lake.vercel.app/',
    },
    {
        name: 'Pokemon searcher',
        description: 'A web application for searching and viewing Pokemon information.',
        language: 'JavaScript and React',
        languageClass: 'text-green-400',
        githubUrl: 'https://pokedex-search-srinjoy.streamlit.app/',
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
