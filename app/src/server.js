const express = require("express");
const redis = require("redis");
const app = express();
const fetchApi = require("./helpers/fetchApi")
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const PORT = process.env.PORT || 1234
const API_SEARCH = 'https://jsonplaceholder.typicode.com/posts'

const redisPort = 6379
// const client = redis.createClient(redisPort);

// client.on("error", (err) => {
//     console.log(err);
// })

// app.get("/jobs", async (req, res) => {
//     const searchTerm = req.query.search;
//     console.log({ searchTerm })

//     try {
//         client.get(searchTerm, async (err, jobs) => {
//             if (err) throw err;

//             if (jobs) {
//                 res.status(200).send({
//                     jobs: JSON.parse(jobs),
//                     message: "data retrieved from the cache"
//                 });
//             }
//             else {
//                 const jobs = await fetchApi({ uri: `${API_SEARCH}/${searchTerm}` });
//                 console.log({ jobs })
//                 client.setex(searchTerm, 600, JSON.stringify(jobs));
//                 res.status(200).send({
//                     jobs,
//                     message: "cache miss"
//                 });
//             }
//         });
//     } catch (err) {
//         res.status(500).send({ message: err.message });
//     }
// });

app.listen(PORT, () => {
    console.log("Node server started");
});