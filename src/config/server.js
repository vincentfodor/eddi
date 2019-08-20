export default {
  port: 3001,
  corsOptions: {
    origin: (origin, callback) => {
      const originWhitelist = [
        'http://localhost:3000'
      ];
      
      if(!origin || originWhitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error(`The origin ${origin} is not allowed to access this data`));
      }
    }
  }
}