import axios from "axios"
import { useEffect, useState } from "react"


export function useApi<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError]= useState<Error | null>(null)
  
  useEffect(() => {
    axios.get(url)
     .then(response => {
      setData(response.data)
    })
    .catch(err => {
      setError(err)
    })
     .finally(() => {
      setIsFetching(false)
     })
   }, [])

   return { data, error, isFetching }
}