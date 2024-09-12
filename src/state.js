import { reactive } from "vue"

export const state = reactive({
  theme: 'light',
  sections: ['nav', 'about', 'projects', 'contact me'],
  sectionIsActive: true,
});