import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div className="nav-bar">
            <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
            |
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        </div>
    </header>
);

export default Header