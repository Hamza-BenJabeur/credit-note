class Display extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<table id="customers">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Price(dt)</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>{this.props.array.map((elm, key) =>
                 <tr key={key}>
                    <td>{elm.name}</td>
                    <td>{elm.price}</td>
                   <td>{elm.date}</td>
                </tr>)}
                </tbody>
        </table>)
    }
}
export default Display;
