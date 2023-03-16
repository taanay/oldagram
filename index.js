const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEL = document.getElementById("main")

let html=""

for(let i=0; i<posts.length; i++) {
    html += `
            <section>

                <div class="section-header">
                    <img class="vangogh-avatar avatar" src="${posts[i].avatar}" alt="vangogh profile picture">
                    <div>
                        <p class="user-id">${posts[i].name}</p>
                        <p class="user-country">${posts[i].location}</p>
                    </div>
                </div>

                <img class="vangogh-post" src="${posts[i].post}" alt="vangogh portrait">

                <div class="section-footer">
                    <div class="logo">
                        <img class="icon-img" src="images/icon-heart.png">
                        <img class="icon-img" src="images/icon-comment.png">
                        <img class="icon-img" src="images/icon-dm.png">
                    </div>
                    <p class="likes"><span>${posts[i].likes} likes</p></span><p>
                    <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
                </div>

            </section>
    `
}

mainEL.innerHTML = html;
