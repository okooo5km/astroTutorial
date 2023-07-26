import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: '5km\'s Blog',
    description: 'My journey learning Astro',
    site: 'https://tourmaline-capybara-50ceac.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}