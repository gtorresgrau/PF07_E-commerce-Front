import React, { useState, useContext ,useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContex } from './CardContex';


function Dashboard() {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const getPurchases = async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/purchases');
                setPurchases(data);
            } catch (err) {
                console.error(err);
            }
        };
        getPurchases();
    }, []);

    return (
        <div>
            <h2>Historial de compras</h2>
            <ul>
                {purchases.map(purchase => (
                    <li key={purchase._id}>
                        {purchase.items.map(item => (
                            <div key={item.id}>
                                {item.title} - {item.quantity} x ${item.unit_price}
                            </div>
                        ))}
                        <div>Total: ${purchase.amount}</div>
                    </li>
                ))}
            </ul>
            <Link to="/sneakers"><button >← BACK</button></Link>
        </div>
    );
}

export default Dashboard ;