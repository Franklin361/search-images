
interface IForm {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    isLoading: boolean
}

export const Form = ({ handleSubmit, isLoading }: IForm) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="form" disabled={isLoading} />
            <button disabled={isLoading}>Search</button>
        </form>
    )
}