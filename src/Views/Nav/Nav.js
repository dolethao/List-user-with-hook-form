
import { Menu } from 'antd';
import { NavLink } from "react-router-dom";
const Nav = (props) => {

    return (
        <div>
            <Menu mode="horizontal" >
                <Menu.Item key="users" >
                    <NavLink to='/'>
                        ListUsers
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="add" >
                    <NavLink to='/add-new-user'>
                        AddNewUser
                    </NavLink>
                </Menu.Item>
            </Menu>
        </div>
    )
}
export default Nav