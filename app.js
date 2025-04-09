        const toggleBtn = document.querySelector('.toggle-btn');
        const body = document.body;

        toggleBtn.addEventListener('click', () => {

            if(body.classList.contains('dark-mode')) {
                // Switch to light mode
                body.classList.remove('dark-mode');
                toggleBtn.classList.remove('dark');
                toggleBtn.querySelector('.toggle-handle').textContent = '🌞';
            } else {
                // Switch to dark mode
                body.classList.add('dark-mode');
                toggleBtn.classList.add('dark');
                toggleBtn.querySelector('.toggle-handle').textContent = '🌙';
            }

        } ) 
