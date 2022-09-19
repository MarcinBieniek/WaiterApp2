// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import Row from 'react-bootstrap/Row';

import TablesHeader from '../../features/TablesHeader/TablesHeader';

const Tables = () => {

    const tables = useSelector(state => getAllTables(state));

    return (
        <>
            <h1>All tables</h1>
            <Row>
                {tables.map(table => <TablesHeader key={table.id} {...table} />)}          
            </Row>
        </>
    )
}

// Tables.propTypes = {};

export default Tables;