import Banner from "../BannersComp"

export default function All(){
    const data = [{
        image : "https://tse1.mm.bing.net/th?id=OIP.fafKRz0ltUqAq3f84x1ebwHaHa&pid=Api&P=0&h=180",
        des : "Full stack developer",
    },{
        image : "https://tse4.mm.bing.net/th?id=OIP.4JpScucnr-wzmZKeRs0pZQHaEb&pid=Api&P=0&h=180",
        des : "Cyber Security",
    },{
        image : "https://tse3.mm.bing.net/th?id=OIP.-6gBw1G5XiVgZxZncj1fIgHaFs&pid=Api&P=0&h=180",
        des : "Data Science",
    },{
        image : "https://tse3.mm.bing.net/th?id=OIP.b2Y0BgX83_X5VO8kH3mlxgHaGB&pid=Api&P=0&h=180",
        des : "testing",
    },{
        image : "https://cdn.dribbble.com/users/6056415/screenshots/15302338/dykoode_4x.png",
        des : "UI and UX",
    },{
        image : "https://tse2.mm.bing.net/th?id=OIP.ytfeN_efpB3mdhovi5javgHaFy&pid=Api&P=0&h=180",
        des : "Product Manager",
    },{
        image : "https://tse4.mm.bing.net/th?id=OIP.Q239ONxkyIrSzxlxEqumOQHaEK&pid=Api&P=0&h=180",
        des : "Management",
    },{
        image : "https://www.miyens.com/wp-content/uploads/2017/12/customer-support-header.png",
        des : "Customer Service"
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