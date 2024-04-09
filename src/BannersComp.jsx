export default function Banner(props = {}) {
    const {data = {}} = props;
    return(
        <div className="card">
            <div className="card-header">
                <img src={data.image} alt="image" />
            </div>
            <div className="card-body">
                <h4>{data.des}</h4>
            </div>
        </div>
    )
}