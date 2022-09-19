import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { Navigate } from 'react-router-dom';
import { updateTableRequest } from '../../../redux/tablesRedux';

import TableForm from '../TableForm/TableForm';

const EditTableForm = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = table => {
        dispatch(updateTableRequest({ ...table, id }));
        navigate('/')
    };

    const { id } = useParams();

    const tableData = useSelector(state => getTableById(state, id))

    if(!tableData) return <Navigate to="/" />
    else return (
        <TableForm 
            action={handleSubmit} 
            id={tableData.id}
            status={tableData.status}
            peopleAmount={tableData.peopleAmount}
            maxPeopleAmount={tableData.maxPeopleAmount}
            bill={tableData.bill}
        />
    )
}

export default EditTableForm