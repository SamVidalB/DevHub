function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.classList.remove(`${currentTheme}-theme`);
    body.classList.add(`${newTheme}-theme`);
    localStorage.setItem('theme', newTheme);
}  


