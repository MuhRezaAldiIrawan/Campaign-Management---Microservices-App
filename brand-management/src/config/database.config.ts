
// export default {
//     url: 'mongodb://localhost:27017/lovvitRedemLogs'
// };


const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

export default  {
    url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
};

