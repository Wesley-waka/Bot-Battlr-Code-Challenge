import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse, faShieldHalved, faBolt } from '@fortawesome/free-solid-svg-icons'

const Card = ({ item, handleOnClick }) => {

    return (
        <div onClick={() => handleOnClick(item.id)} className="card col-2 p-0 m-2">
            <img src={item.avatar_url} className="card-img-top" alt="..." />
            <div className="card-deck">
                <h5 className="card-title ">{item.name} <FontAwesomeIcon icon={() => {
                    if (item.bot_class === "Support") {
                        return faHeartPulse
                    } else if (item.bot_class === "Medics") {
                        return faHeartPulse
                    }
                }} /></h5>
                <p className="card-text">{item.catchphrase}</p>
                {/* <a href={`/products/${item.id}`} className="btn btn-sm text-small btn-primary btn-block m-2">View Item Details</a>
                <button className="btn btn-sm text-small btn-danger btn-block">Delete Items</button> */}

                <div class="card-footer mx-12">
                    <small class="text-muted"> <FontAwesomeIcon icon={faHeartPulse} />{item.health}</small>
                    <small class="text-muted"> <FontAwesomeIcon icon={faBolt} />{item.damage}</small>
                    <small class="text-muted"> <FontAwesomeIcon icon={faShieldHalved} />{item.armor}</small>

                </div>

            </div>
        </div>



    )
}

export default Card