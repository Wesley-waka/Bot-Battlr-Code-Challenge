import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse, faShieldHalved, faBolt, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
// import BotsDetails from './Components/BotsDetails'
const Card = ({ item, handleOnClick }) => {
    console.log(item.bot_class);

    function deletePost() {
        // hOMEWORK
        fetch(`http://localhost:8001/bots/${item.id}`, {
            method: "DELETE"
        })


    }


    return (
        <div onClick={() => handleOnClick(item.id)} className="card col-2 p-0 m-2">
            <button onClick={deletePost} className="btn btn-sm btn-block btn-danger"> <FontAwesomeIcon icon={faCircleXmark} /></button>
            <img src={item.avatar_url} className="card-img-top" alt="..." />
            <div className="card-deck">
                <h5 className="card-title ">{item.name} <FontAwesomeIcon icon={item.bot_class} /></h5>
                <p className="card-text">{item.catchphrase}</p>
                <a href={`/bots/${item.id}`} className="btn btn-sm text-small btn-primary btn-block m-2">View Item Details</a>
                <button className="btn btn-sm text-small btn-danger btn-block">Delete Items</button>

                <div class="card-footer mx-12">
                    <small className="text-muted"> <FontAwesomeIcon icon={faHeartPulse} />{item.health}</small>
                    <small className="text-muted"> <FontAwesomeIcon icon={faBolt} />{item.damage}</small>
                    <small className="text-muted"> <FontAwesomeIcon icon={faShieldHalved} />{item.armor}</small>

                </div>



            </div>
        </div>



    )
}

export default Card