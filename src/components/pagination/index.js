import * as React from 'react';
import MaterialPagination from '@mui/material/Pagination';


const Pagination = ({currentPage,handlePageChange,isDisabled})=> {
  return (
    <div >
<MaterialPagination
      count={20} 
      boundaryCount={2}
      page={currentPage}
      onChange ={handlePageChange}
      disabled={isDisabled}
      />
    </div>
  );
}
export default Pagination;