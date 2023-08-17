## Laravel 10, vue 3, vue-router 4, pinia 2

Installation steps.

- composer create-project laravel/laravel vue-auth
- npm install vue@next
- npm install @vitejs/plugin-vue
- edit vite.config.js, import there vue from @vitejs/plugin-vue and add it to the plugins
- add @vite('resources/js/src/main.js') and app container to the main blade template
- edit routes in web.php to Route::get('{any?}', fn() => view('app'))->where('any', '.*');
- add default component App.vue
- edit resources/js/src/main.js
- npm install vue-router@4
- npm install pinia
