const iterateJson = (obj, fun) => {
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            obj.forEach((elem, index) => iterateJson(elem, fun));
        } else {
            Object.entries(obj).forEach(([key, value]) => {
                iterateJson(value, fun);
                fun(value, key); // Pass both key and value to the callback function
            });
        }
    } else {
        fun(obj);
    }
}

const consumeGet = (url) => {
    const options = {
        method: 'GET',
    }

    const resElement = document.getElementById("apiRes");

    fetch(url, options)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        const p = document.createElement("p");
        const node = document.createTextNode(`${JSON.stringify(data)}`);
        p.appendChild(node);

        resElement.appendChild(p);

        return data;
    })
}

const consumePost = (url, data) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data),
    }

    const resElement = document.getElementById("apiRes");

    fetch(url, options)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        const p = document.createElement("p");
        const node = document.createTextNode(`${JSON.stringify(data)}`);
        p.appendChild(node);

        resElement.appendChild(p);

        return data;
    })
}