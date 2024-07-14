function createCard (title, ChannelName, views, monthsOld, duration, thumbnail) {

    let viewsNumber;

    if (views >= 1000000) {
        viewsNumber = (views / 1000000) + "M"; // Fixed condition and conversion
    } else if (views >= 1000) {
        viewsNumber = (views / 1000)+ "K"; // Fixed conversion
    } else {
        viewsNumber = views.toString();
    }


    let html = `<div class="container">
        <img src="${thumbnail}" class="images" alt="">
        <span class="duration">${duration}</span>
        <div class="text-container">
            <div class="title">${title}</div>
            <div class="container2">
                <div class="channelName">${ChannelName}</div>
                <div class="views">${viewsNumber} views</div>
                <div class="monthsAgo">${monthsOld} months ago</div>
            </div>
        </div>
    </div>`

    document.querySelector(".container").innerHTML = html;
}

createCard ("Exrecise | Dynamic Website Builder", "CodeWithHarry", 7540000, 7, "51:22", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ")