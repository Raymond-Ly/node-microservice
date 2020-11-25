export default {
  baseUrl: process.env.BASE_URL as string,
  authKey: process.env.AUTH_KEY as string,
  maxParallelRequests: parseInt(process.env.MAX_PARALLEL as string, 10),
};
