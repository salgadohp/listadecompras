import { FilterStatus } from "@/types/FilterStatus";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_STORAGE_KEY = "@comprar:items"

export type ItemsStorage = {
    id: string
    status: FilterStatus
    description: string
}

async function get(): Promise<ItemsStorage[]> {
    try {
        const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)

        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("GET_ITEMS: "+ error)
    }
}

async function getByStatus(status: FilterStatus): Promise<ItemsStorage[]> {
    return (await get()).filter((item) => item.status === status)
}

export const ItemsStorage = {
    get,
    getByStatus
}