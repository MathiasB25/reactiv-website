export default function Spinner() {
    return (
        <svg
            class="container"
            viewBox="0 0 40 40"
            height="40"
            width="40"
            >
            <circle 
                class="track"
                cx="20" 
                cy="20" 
                r="17.5" 
                pathlength="100" 
                stroke-width="5px" 
                fill="none" 
            />
            <circle 
                class="car"
                cx="20" 
                cy="20" 
                r="17.5" 
                pathlength="100" 
                stroke-width="5px" 
                fill="none" 
            />
        </svg>
    )
}