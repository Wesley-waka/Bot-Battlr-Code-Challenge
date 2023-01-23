// I used font awesome to display all my icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse, faShieldHalved, faBolt, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

// this is the component where rendered all my bots in to cards
const Card = ({ bot, handleOnClick }) => {
    // console.log(bot.bot_class);

    //the one delete feature click on the red button 
    function deletePost() {
        fetch(`http://localhost:8001/bots/${bot.id}`, {
            method: "DELETE"
        })


    }

    //renders all the cards into the collection
    return (
        <div onClick={() => handleOnClick(bot.id)} className="card col-2 p-0 m-2">
            <button onClick={deletePost} className="btn btn-sm btn-block btn-danger"> <FontAwesomeIcon icon={faCircleXmark} /></button>
            <img src={bot.avatar_url} className="card-img-top" alt="..." />
            <div className="card-deck">
                <h5 className="card-title ">{bot.name} <FontAwesomeIcon icon={"fa" + bot.bot_class} /></h5>
                <p className="card-text">{bot.catchphrase}</p>


                <div class="card-footer mx-12">
                    <small className="text-muted"> <FontAwesomeIcon icon={faHeartPulse} />{bot.health}</small>
                    <small className="text-muted"> <FontAwesomeIcon icon={faBolt} />{bot.damage}</small>
                    <small className="text-muted"> <FontAwesomeIcon icon={faShieldHalved} />{bot.armor}</small>

                </div>



            </div>
        </div>



    )
}

export default Card;