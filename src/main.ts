import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from "vue-i18n"
import App from './App.vue'
import router from './router'

function loadLocaleMessages() {
	const locales = import.meta.glob('./locales/*.json', { eager: true });
	const messages = {};
	Object.keys(locales).forEach(key => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i)
		if (matched && matched.length > 1) {
			const locale: string = matched[1];
			(messages as any)[locale] = (locales as any)[key].default;
		}
	})
	return messages;
}

const i18n = createI18n({
	legacy: false,
	locale: "en",
	fallbackLocale: "en",
	messages: loadLocaleMessages()
});

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
