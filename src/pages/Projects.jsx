const Entry = ({title, image, text}) => {
    return(
        <>
        <h1>{title}</h1>
        <img src = {image} alt = "image supposed to be here"/>
        <p>{text}</p>
        </>

    )
}

function Projects(){
    const title = "This Website"
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsU9UBpOgH7DrwytEugrdoUsZGwXc10ZThSw&s" 
    const text = "Built with React, this website is the first of many projects I will showcase on my website! Additionally, I will log any updates/improvements made to this website here as well. "
    return(
        <div className= "project_view">
        <h1>{title}</h1>
        <img src = {image} alt = "image supposed to be here"/>
        <p>{text}</p>
        </div>
    )
}

export default Projects