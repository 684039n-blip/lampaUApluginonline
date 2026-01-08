(function () {
    'use strict';
    
    // Чекаємо поки Lampa повністю завантажиться
    setTimeout(function() {
        if (!window.Lampa || !Lampa.Utils) {
            console.error('Lampa не знайдена!');
            return;
        }
        
        console.log('=== UaFlix Plugin Injector ===');
        
        // Завантажуємо основний плагін
        Lampa.Utils.putScriptAsync([
            'https://684039n-blip.github.io/lampaUAplugin/UaflixPlugin.js'
        ], function() {
            console.log('UaFlix Plugin завантажено!');
        });
        
    }, 3000); // Чекаємо 3 секунди
    
})();
