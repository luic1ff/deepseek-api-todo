import apiClient from '../http';
import type { ApiResponse } from '../../types/api';

export interface WeatherData {
    temperature: string;
    condition: string;
    forecast: string | { day: string; temp: number }[];
}

export const fetchWeather = async (city: string): Promise<ApiResponse<WeatherData>> => {
    return apiClient.post<ApiResponse<WeatherData>>('/weather', { city }).then(res => res.data);
};
