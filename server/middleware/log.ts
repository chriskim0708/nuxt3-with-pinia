export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  console.log(config);
  console.log('New request: ' + event.req.url);
});
