import Banner from "../BannersComp"

export default function FUllstackDeveloper() {
    const data = [{
        image : "https://tse1.mm.bing.net/th?id=OIP.fafKRz0ltUqAq3f84x1ebwHaHa&pid=Api&P=0&h=180",
        des : "Full stack developer",
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