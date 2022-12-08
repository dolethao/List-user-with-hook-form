import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersRedux, deleteUserRedux, clearDataUsers, loadingPage } from '../../redux/userActions'
import { Link } from 'react-router-dom'
import { Spin } from 'antd';

const ListUsers = () => {
    const dispatch = useDispatch()

    const listUsersRedux = useSelector(state => state.users.allUsers)
    const Loading = useSelector(state => state.users.loading)
    const [usersRedux, setUsersRedux] = useState([])

    useEffect(() => {
        dispatch(getAllUsersRedux())
    }, [])

    useEffect(() => {
        setUsersRedux(listUsersRedux)
    }, [listUsersRedux])

    const handleDeleteUser = (id) => {
        dispatch(deleteUserRedux(id))
    }
    const handleDetailUser = (id) => {
        dispatch(clearDataUsers())
    }
    const handleUpdateUser = (id) => {
        dispatch(clearDataUsers())
    }

    {
        usersRedux && usersRedux.length > 0 && usersRedux.map((item) => {
            return {
                id: item.id,
                firstName: item.firstName,
                lastName: item.lastName,
                email: item.email,
                address: item.address,
                phone: item.phone
            }
        })
    }
    const columns = [

        {
            title: 'First Name',
            dataIndex: "firstName",
            key: "id",

            sorter: (a, b) => a.firstName.length - b.firstName.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Last Name',
            dataIndex: "lastName",

            sorter: (a, b) => a.lastName.length - b.lastName.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
            defaultSortOrder: 'descend',

            sorter: (a, b) => a.email - b.email,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },

        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) =>
            (
                <Space size={'small'}>
                    <Popconfirm title="Sure to delete user?" onConfirm={() => handleDeleteUser(record.id)}>
                        <Button style={{ color: "red" }}>Delete</Button>
                    </Popconfirm>
                    <Button onClick={() => handleDetailUser(record.id)} >
                        <Link to={`/detail-user/${record.id}`} >
                            Detail User
                        </Link>
                    </Button>
                    <Button onClick={() => handleUpdateUser(record.id)} >
                        <Link to={`/update-user/${record.id}`}>
                            Update User
                        </Link>
                    </Button>
                </Space >
            )
        },

    ];
    return (
        <Spin tip="Loading..." spinning={Loading}>
            <div style={{ margin: '40px' }}>
                <Table size={"middle"} columns={columns} dataSource={usersRedux} />
            </div>
        </Spin>

    )
}
export default ListUsers