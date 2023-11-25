import { blogInformation, personalInformation } from "/data.js"
const containerEl = document.getElementById("container")
document.onload = homePageDisplay()

//listens for page clicks 
document.body.addEventListener("click", (e)=> {

    aboutPageDisplay(e.target.id)
    blogPageDisplay(e.target.id)
    viewMorePosts(e.target.id)
    console.log(e.target.id)
})

//displays "HOME" page content
function homePageDisplay() 
{
    containerEl.innerHTML =""
    blogInformation.forEach(currentBlog => {
        
        if(currentBlog.featuredBlog == true) {
            containerEl.innerHTML = 
                `
                    <section class ="hero-section">
                        <div class ="hero-graphic-container"> 
                            <img src ="${currentBlog.graphic}" class ="hero-graphic"> 
                        </div>
                        <p class ="hero-date"> ${currentBlog.date} </p>
                        <h2 class ="hero-title">  ${currentBlog.title} </h2>
                        <p class ="hero-subtitle">  ${currentBlog.subtitle} </p>
                    </section>

                    <section class ="blog-section" id ="blog-section">
                        ${blogDisplayHelper()}
                    </section>
                `
        }
    })
}

//displays "ABOUT ME" page content
function aboutPageDisplay(id)
{
    if( id === document.getElementById("about-btn").id )
    {
        document.getElementById("view-more-btn").innerHTML=""
        containerEl.innerHTML =""
        containerEl.innerHTML = 
            `
                <section class ="about-section">
                    <div class= "about-graphic-container">
                        <img src="${personalInformation[0].graphic}" class ="about-graphic">
                    </div>
                    <h2 class ="about-title"> ${personalInformation[0].title} </h2>
                    <p class ="about-subtitle"> ${personalInformation[0].subtitle} </h2>
                </section>

                <section class ="recent-posts-section">
                    <p class ="recent-posts-title"> Recent Posts </p>
                    ${blogDisplayHelper()}
                </section>
            `
    }
}

//displays selected blog page content
function blogPageDisplay(id)
{
    blogInformation.forEach(currentBlog => {
        if( id === currentBlog.ID ) {
            containerEl.innerHTML =""
            containerEl.innerHTML = 
                `   
                    <section class ="specific-blog-section">
                        <p class ="specific-blog-date"> ${currentBlog.date} </p>
                        <h2 class ="specific-blog-title"> ${currentBlog.title} </h2>
                        <p class ="specific-blug-subtitle"> ${currentBlog.subtitle} </p>
                        <div class ="specific-blog-container">
                            <img src ="${currentBlog.graphic}" class ="specific-blog-graphic">
                        </div>
                        ${currentBlog.text}
                    </section>

                    <section class ="recent-posts-section">
                        <p class ="recent-posts-title"> Recent Posts </p>
                        ${blogDisplayHelper()}
                    </section>
                `
        }
    })
}

//formats three blogs to be displayed
function blogDisplayHelper()
{
    let finalFormat =``
    blogInformation.forEach(currentBlog => {
        if(currentBlog.featuredBlog == false && currentBlog.order <= 4)
        {
            finalFormat += 
                `
                    <article class ="blog-post" id ="${currentBlog.ID}">
                        <div class ="post-graphic-container" id ="post-graphic-container">
                            <img src ="${currentBlog.graphic}" class ="blog-post-graphic">
                        </div>
                        <p class ="blog-post-date"> ${currentBlog.date} </p>
                        <h4 class ="blog-post-title"> ${currentBlog.title} </p>
                        <p class ="blog-post-subtitle">${currentBlog.subtitle} </p>
                    </article>
                `
        }
    })
    return finalFormat
}

//listens for "view more" clicks and displays the remaining available blog posts
function viewMorePosts(id)
{   //checks if view more button is null to prevent error, then check if it's clicked
    if(document.getElementById("view-more-btn") != null) {
      if(id === document.getElementById("view-more-btn").id) {

        let finalFormat =``
        blogInformation.forEach(currentBlog => {
            if(currentBlog.featuredBlog == false && currentBlog.order > 4)
            {
                finalFormat += 
                    `
                        <article class ="blog-post" id ="${currentBlog.ID}">
                            <div class ="post-graphic-container">
                                <img src ="${currentBlog.graphic}" class ="blog-post-graphic">
                            </div>
                            <p class ="blog-post-date"> ${currentBlog.date} </p>
                            <h4 class ="blog-post-title"> ${currentBlog.title} </p>
                            <p class ="blog-post-subtitle">${currentBlog.subtitle} </p>
                        </article>
                    `
            }
        })
        document.getElementById("view-more-btn").innerHTML=""
        document.getElementById("blog-section").innerHTML += finalFormat
      }
    }
}

// listens for specific blog post clicks and displays its content
// function specificBlogDisplay(id)
// {
//     let finalFormat =``
//     blogInformation.forEach(currentBlog => {
//         if( id === currentBlog.ID)
//         {
//             finalFormat += 
//                 `

//                 `

//             containerEl.innerHTML=""
//             containerEl.innerHTML = finalFormat
//         }

//     })
// }
