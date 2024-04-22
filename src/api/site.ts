import { SearchResult } from '@/types/SearchResult';
import { req } from './axios'
import { Event } from '@/types/Event';

export const getEvent = async (id: number): Promise<Event | false> => {
    const json = await req.get(`/events/${id}`);
    return json.data.event as Event ?? false;
}

export const searchCPF = async (eventId: number, cpf: string): Promise<SearchResult | false> => {
    const json = await req.get(`/events/${eventId}/search?cpf=${cpf}`);
    if (json.data.person && json.data.personMatched) {
        return json.data as SearchResult;
    }
    return false;
}