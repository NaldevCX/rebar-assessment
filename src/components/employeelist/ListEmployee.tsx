import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';


type ListEmployeeProps ={
    fetchApiLink: string;
}

type Employee = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
};

function ListEmployee(props : ListEmployeeProps) {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Employee[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(props.fetchApiLink);
        
      
        if (!response.ok) {
          if (response.status === 429) {
            const retryAfter = response.headers.get('Retry-After');
            const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : 10000; //  delay of 10  header is not provided

            await new Promise((resolve) => setTimeout(resolve, delay)); // Delay 

            // Retry the request only if data is not fetched
            if (data.length === 0) {
              fetchData();
            }
            return;
          }

          throw new Error('Network response was not OK');
        }

        const fetchedData = await response.json();
      
        console.log(fetchedData);
        setData(fetchedData.data); 
        setLoading(false); 
      } catch (error) {
 
        console.error(error);
        setError(error as Error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); 

  if (loading) {
    return (<div className='table-container'>  <div className='text-3xl pt-20 font-semibold blink'>Loading Employee List</div> <Spinner className='table-container mx-auto mt-10 mb-40' animation="border" variant="secondary" />
   </div>);

  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Dropdown change handler
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = parseInt(event.target.value, 10);
    setCurrentPage(selectedPage);
  };

  return (

    
    <>
    <div className='pt-20 pb-10 table-container'>

   
      <Table className=' mx-auto bg-color-gray  w-4/5' striped bordered hover>
        <thead>
          <tr>
            <th className='font-bold'>Employee Name</th>
            <th className='font-bold'>Salary</th>
            <th className='font-bold'>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee) => (
            <tr key={employee.id}>
              <td className='font-semibold'>{employee.employee_name}</td>
              <td className='font-semibold'>{employee.employee_salary}</td>
              <td className='font-semibold'>{employee.employee_age}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="pagination-container pb-10">
        <Button  variant="outline-primary"
    
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Back
        </Button>{' '}
        <select className="pagination-dropdown pl-1 pr-1 mr-2 ml-2" value={currentPage} onChange={handleDropdownChange}>
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
            <option key={index} value={index + 1}>
             Page: {index + 1}
            </option>
          ))}
        </select>
        <Button  variant="outline-primary"
      
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </Button>{' '}
   
      </div>
      </div>
    </>
  );
}

export default ListEmployee;
