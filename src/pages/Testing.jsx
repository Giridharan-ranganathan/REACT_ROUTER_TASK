import Banner from "../BannersComp"

export default function Testing() {
    const data = [{
        image : "https://tse3.mm.bing.net/th?id=OIP.b2Y0BgX83_X5VO8kH3mlxgHaGB&pid=Api&P=0&h=180",
        des : "testing",
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