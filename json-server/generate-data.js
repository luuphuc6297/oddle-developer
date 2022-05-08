const { faker } = require("@faker-js/faker");
const fs = require("fs");

faker.locale = "en";

const randomUserList = (n) => {
    if (n <= 0) return [];
    const userList = [];

    Array.from(new Array(n)).forEach(() => {
        const user = {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            username: faker.internet.userName().toLowerCase(),
            avatar: faker.image.avatar(),
            location: faker.address.county(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };
        userList.push(user);
    });
    return userList;
};

const randomRepositoryList = (userList, numberOfRepositories) => {
    if (numberOfRepositories <= 0) return [];

    const repositoryList = [];

    // random data
    for (const user of userList) {
        Array.from(new Array(numberOfRepositories)).forEach(() => {
            const repository = {
                userId: user.id,
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                createdAt: Date.now(),
                updatedAt: Date.now(),
                thumbnailUrl: faker.image.imageUrl(400, 400),
            };

            repositoryList.push(repository);
        });
    }

    return repositoryList;
};

(() => {
    const userList = randomUserList(10);
    const repositoryList = randomRepositoryList(userList, 15);
    const db = {
        users: userList,
        repositories: repositoryList,
    };

    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generated successfully!");
    });
})();
