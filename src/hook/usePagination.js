import { useCallback, useEffect, useState } from "react";

export const usePagination = (initialPage) => {
  const [page, setPage] = useState(initialPage);

  const handlePageChange = useCallback((_, page) => {
    setPage(page);
     console.log(setPage);
  }, []);

 useEffect (()=>{
  handlePageChange(null,initialPage)
 },[page])

  return [page, handlePageChange];
};

