const progressBar = document.getElementById('progress-bar');

        // تابعی برای محاسبه درصد اسکرول
        function updateProgressBar() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercentage + '%';
        }

        // گوش دادن به رویداد اسکرول
        window.addEventListener('scroll', updateProgressBar);