import {fetchWeather, type WeatherData} from "../../../shared/api/weather";

export const getWeather = async(city: string): Promise<WeatherData | null> => {
    try {
        const response = await fetchWeather(city);

        if (response.status !== 'success') return null;

        const data = response.data;

        console.log(data);

        return {
            temperature: data.temperature,
            condition: data.condition,
            forecast: Array.isArray(data.forecast)
                ? data.forecast.map((f: any) => ({
                    day: f.date,
                    temp: f.avgtemp_c,
                }))
                : data.forecast,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
};

