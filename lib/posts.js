import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'i49pMXbJsih7oRyHgeQRRwtt'
});

export async function getPostsStoryBlok() {
  const res = await Storyblok.get('cdn/stories', {
    "starts_with": "posts/"
  });
  return res;
}
