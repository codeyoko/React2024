import { Link } from 'react-router-dom'
import './style.css'

export default function RecipeItem({item}) {

    return (

        <div className="item-container">
            <div key={item.id} className="item-content">
                <img src={item?.image_url} alt={item?.title} />
                <p>{item?.title}</p>
                <span>{item?.publisher}</span>
                <Link to={`/recipe-item/${item?.id}`}>Recipe Detail</Link>
            </div>
        </div>
    )
}