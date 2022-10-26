import { useCallback, useEffect, useState } from "react";


export const useFetching = (
   asyncCallback,
   initialValue,
   isLoadOnMount = true
 ) => {
   const [data, setData] = useState(initialValue);
   const [isLoading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const handleDataLoad = useCallback(async (data) => {
     setLoading(true);
     try {
       // await delay(1000);
       const response = await asyncCallback(data);
       setData(response);
     } catch (error) {
       setError(error);
     } finally {
       setLoading(false);
     }
   }, []);
 
   useEffect(() => {
    if(isLoadOnMount)
    {handleDataLoad()}
   }, [isLoadOnMount]);
   return { data, isLoading, error,handleDataLoad};
 };
 
 export default useFetching;
 