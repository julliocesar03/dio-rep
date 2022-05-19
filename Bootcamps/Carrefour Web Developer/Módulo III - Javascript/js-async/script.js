/*Promise

const myPromise = new Promice((resolve, reject) => {
    windows.setTimeout(() => {
        resolve('Resolvida');
    }, 2000);
    });
})

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));
}
    Async/await

    async const myPromise = new Promice((resolve, reject) => {
        windows.setTimeout(() => {
            resolve('Resolvida');
            }, 3000);
        });
    })

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));
    return resolved;
    }
*/