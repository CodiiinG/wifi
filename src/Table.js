import Table from 'react-bootstrap/Table';

function TableRank() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Zhar index</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Shalom</td>
                    <td>+Infini</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Donis</td>
                    <td>?</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableRank;