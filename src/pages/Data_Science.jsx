import Banner from "../BannersComp"

export default function DataScience() {
    const data = [{
        image : "https://tse3.mm.bing.net/th?id=OIP.-6gBw1G5XiVgZxZncj1fIgHaFs&pid=Api&P=0&h=180",
        des : "Data Science",
    }]
    return(
        <div className="container">
            <div className="demo">
             {data.map((element,index) => (
                <Banner key={`${index}-${element.iteam}`}
                data = {element}/>
             ))}
            </div>
        </div>
    )
}