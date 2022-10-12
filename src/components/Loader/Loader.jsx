import { ThreeDots } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <ThreeDots
            wrapperStyle={{ margin: '0 auto' }}
            height="50"
            width="50"
            color="#303f9f"
            ariaLabel="loading"
        />
    )
}