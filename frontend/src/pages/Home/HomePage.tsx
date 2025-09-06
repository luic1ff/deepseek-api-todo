interface HomePageProps {
    weather: {
        temperature: string;
        condition: string;
        forecast: string | { day: string; temp: number }[];
    } | null;
}

const HomePage = ({ weather }: HomePageProps) => {
    if (!weather) return <div>Loading...</div>; // пока данные загружаются

    return (
        <div>
            <h1>Weather in London</h1>
            <p>Temperature: {weather.temperature}</p>
            <p>Condition: {weather.condition}</p>
            <p>
                Forecast: {Array.isArray(weather.forecast)
                ? weather.forecast.map((f) => (
                    <span key={f.day}>{f.day}: {f.temp}°C; </span>
                ))
                : weather.forecast}
            </p>
        </div>
    );
};

export default HomePage;
