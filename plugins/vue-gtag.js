import VueGtag, { trackRouter } from "vue-gtag-next";
// Vue.use(VueGtag, {
//   config: { id: 'G-6YD6EWNBRG' }
// })
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: "G-6YD6EWNBRG",
    },
  });
  trackRouter(useRouter());
});
