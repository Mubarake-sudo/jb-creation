// Modification v2 : loader premium avec effet typewriter et disparition fluide.
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const loader = document.getElementById('loader');
      const loaderQuote = document.getElementById('loader-quote');
      const loaderQuotes = [
        'Créer, c\'est donner vie à une idée.',
        'Chaque pixel raconte une histoire.',
        'L\'image inspire confiance.',
        'Le design est l\'intelligence rendue visible.'
      ];

      let loaderQuoteIndex = 0;
      let loaderCharIndex = 0;
      let loaderDeleting = false;

      function runLoaderQuote() {
        const currentQuote = loaderQuotes[loaderQuoteIndex];
        if (!loaderQuote) return;

        if (loaderDeleting) {
          loaderCharIndex -= 1;
        } else {
          loaderCharIndex += 1;
        }

        loaderQuote.textContent = currentQuote.slice(0, loaderCharIndex);

        if (!loaderDeleting && loaderCharIndex === currentQuote.length) {
          loaderDeleting = true;
          setTimeout(runLoaderQuote, 1800);
          return;
        }

        if (loaderDeleting && loaderCharIndex === 0) {
          loaderDeleting = false;
          loaderQuoteIndex = (loaderQuoteIndex + 1) % loaderQuotes.length;
        }

        const delay = loaderDeleting ? 30 : 80;
        setTimeout(runLoaderQuote, delay);
      }

      if (prefersReducedMotion) {
        if (loaderQuote) loaderQuote.textContent = loaderQuotes[0];
        window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 900));
      } else {
        runLoaderQuote();
        window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 2600));
      }
