
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAUsersRedux } from '../../redux/userActions';
import "./DetailUser.css";
import { Spin } from 'antd';

const DetailUser = () => {

    const dispatch = useDispatch();
    let { id } = useParams();
    const DetailUserRedux = useSelector(state => state.users.aUser);
    const Loading = useSelector(state => state.users.loading)

    useEffect(() => {
        dispatch(getAUsersRedux(id))
    }, [])

    return (
        <Spin tip="Loading..." spinning={Loading}>
            <div className='detail-user'>
                <table>
                    <tr>
                        <th>ID User</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>School</th>
                        <th>Favourties</th>
                        <th>Tốt Nghiệp</th>
                    </tr>

                    <tr>
                        <td>{DetailUserRedux.id}</td>
                        <td>{DetailUserRedux.firstName}&nbsp;{DetailUserRedux.lastName}</td>
                        <td>{DetailUserRedux.email}</td>
                        <td>{DetailUserRedux.phone}</td>
                        <td>{DetailUserRedux.address}</td>
                        <td>{DetailUserRedux.gender}</td>
                        <td>{DetailUserRedux.school}</td>
                        <td>{DetailUserRedux.favourties}</td>
                        <td>{DetailUserRedux.isGraduate === true ? "True" : "False"}</td>
                    </tr>
                </table>
            </div>
        </Spin>
    )
}

export default DetailUser