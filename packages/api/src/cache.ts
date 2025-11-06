const memoryCache = new Map<string, { data: unknown; expires: number }>();

export const cache = {
  get: async (key: string) => {
    const entry = memoryCache.get(key)
    if(!entry) return null 
    if ( Date.now() > entry.expires) {
      memoryCache.delete(key)
      return null
    }
    return entry.data
  },

  set: async (key: string, value: unknown, ttlSeconds: number) => {
    memoryCache.set(key, {data: value, expires:Date.now() + ttlSeconds * 1000})
  },

  del: async (key: string) => {
    memoryCache.delete(key)
  }
  
}
