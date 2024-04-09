import Banner from "../BannersComp"

export default function CyberSecurity() {
    const data = [
     {
        image : "https://tse4.mm.bing.net/th?id=OIP.4JpScucnr-wzmZKeRs0pZQHaEb&pid=Api&P=0&h=180",
        des : "Cyber Security",
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