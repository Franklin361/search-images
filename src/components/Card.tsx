import { Result } from "../interface"

interface ICard {
    res: Result
}

export const Card = ({ res }: ICard) => {
    return (
        <div>
            <img src={res.urls.small} alt={res.alt_description || 'photo'} loading="lazy" />
            <div className="hidden">
                <h4>{res.description}</h4>
                <b>{res.likes} ❤️</b>
            </div>
        </div>
    )
}