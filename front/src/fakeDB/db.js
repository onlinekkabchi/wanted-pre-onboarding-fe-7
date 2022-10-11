const data = {
    posts: [
        {
            id: 1,
            title: "json-server",
            author: "typicode",
        },
    ],
    comments: [
        {
            id: 1,
            body: "some comment",
            postId: 1,
        },
    ],
    profile: {
        name: "typicode",
    },
};

const sampleToken = {
    access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc",
};

export { data, sampleToken };
