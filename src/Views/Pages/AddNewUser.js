import { Button, Form, Input, Row, Col, Select, DatePicker, Radio, Checkbox } from 'antd';
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import './AddNewUser.css'
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { createNewUserRedux } from '../../redux/userActions'
import { useNavigate } from 'react-router-dom';


const AddNewUser = (props) => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const schema = yup.object({
        firstName: yup.string().required("Please input First Name").matches(/^[A-z0-9_-]{2,15}$/, "Eg: Thomas"),
        lastName: yup.string().required("Please input Last Name").matches(/^[A-z0-9_-]{2,15}$/, "Eg: Alex"),
        email: yup.string().email("Eg: example@gmail.com").required("Please input Email"),
        favourties: yup.array().ensure(),
        password: yup.string()
            .required("Please input password")
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Eg: P@ssword1'),
        phone: yup.string().required("Vui lòng nhập Phone").
            matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,10}$/, "Eg: 0987226555"),
        dateOfBirth: yup.date().required("Please select BirthDay"),
        gender: yup.string()
            .ensure()
            .required("Please input gender"),
        school: yup.string()
            .ensure()
            .required("Please input school"),
        address: yup.string().required("Please input Address"),
        isGraduate: yup.boolean().required("Please select Graduate")
    }).required();

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const handleAddNewUser = (data) => {
        data.dateOfBirth = moment(data.dateOfBirth).unix();
        dispatch(createNewUserRedux(data))
        navigate("/");
    };


    return (
        <div className='add-user' >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={handleSubmit(handleAddNewUser)}
            >
                <Row >
                    <Col span={8}>
                        <Form.Item label="FirstName">
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => <Input {...field}
                                    status={errors.firstName ? "error" : ""}
                                    placeholder="First Name" />}
                            />
                            {errors.firstName && <p>{errors.firstName.message}</p>}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="LastName">
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field }) => <Input {...field}
                                    status={errors.lastName ? "error" : ""}
                                    placeholder="Last Name" />}
                            />
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </Form.Item>
                    </Col>
                </Row>
                <Row >
                    <Col span={8}>
                        <Form.Item label="Password">
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <Input.Password {...field}
                                    status={errors.password ? "error" : ""}
                                    placeholder='password' />}
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Phone">
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => <Input {...field}
                                    placeholder="Phone Number"
                                    status={errors.phone ? "error" : ""} />}
                            />
                            {errors.phone && <p>{errors.phone.message}</p>}
                        </Form.Item>
                    </Col>
                </Row>
                <Row >
                    <Col span={8}>
                        <Form.Item label="Email">
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <Input {...field}
                                    placeholder="Email"
                                    status={errors.email ? "error" : ""} />}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Date of Birth">
                            <Controller
                                name="dateOfBirth"
                                control={control}
                                render={({ field }) => <DatePicker {...field}
                                    placeholder="Select Birthday"
                                    status={errors.dateOfBirth ? "error" : ""} />}
                            />
                            {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
                        </Form.Item>
                    </Col>
                </Row>
                <Row >
                    <Col span={8}>
                        <Form.Item label="School">
                            <Controller
                                name="school"
                                control={control}
                                render={({ field }) => <Select
                                    {...field}
                                    placeholder="Select School"
                                    options={[
                                        { value: "THPT", label: "THPT" },
                                        { value: "THCS", label: "THCS" },
                                        { value: "ĐH", label: "Đại học" }
                                    ]}
                                />}
                            />
                            {errors.school && <p>{errors.school.message}</p>}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Graduate">
                            <Controller
                                name="isGraduate"
                                control={control}
                                render={({ field }) => <Radio.Group
                                    {...field}
                                    options={[
                                        { value: "true", label: "Yes" },
                                        { value: "false", label: "No" },
                                    ]}
                                />}
                            />
                            {errors.isGraduate && <p>{errors.isGraduate.message}</p>}
                        </Form.Item>
                    </Col>
                </Row>
                <Row >
                    <Col span={8}>
                        <Form.Item label="Address">
                            <Controller
                                name="address"
                                control={control}
                                render={({ field }) => <Input {...field}
                                    placeholder="Address"
                                    status={errors.address ? "error" : ""} />}
                            />
                            {errors.address && <p>{errors.address.message}</p>}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Gender">
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field }) => <Radio.Group
                                    {...field}
                                    placeholder="Select Gender"
                                    options={[
                                        { value: "male", label: "Male" },
                                        { value: "fmale", label: "Fmale" },
                                        { value: "other", label: "Other" }
                                    ]}
                                />}
                            />
                            {errors.gender && <p>{errors.gender.message}</p>}
                        </Form.Item>
                    </Col>
                </Row>
                <Row span={8}>
                    <Form.Item label="Favourites">
                        <Controller
                            name="favourties"
                            control={control}
                            render={({ field }) => <Checkbox.Group {...field}
                                options={[
                                    { value: "Game", label: "Game" },
                                    { value: "Football", label: "Football" },
                                    { value: "Volleyball", label: "Volleyball" },
                                    { value: "Pet", label: "Pet" },
                                    { value: "Swim", label: "Swim" },
                                    { value: "Music", label: "Music" },
                                ]}
                            />}
                        />
                        {errors.favourties && <p>{errors.favourties.message}</p>}
                    </Form.Item>
                </Row>

                <Form.Item
                    wrapperCol={{
                        offset: 16,
                        span: 16,
                    }}>
                    <Row>
                        <Col span={8}>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Col>
                        <Col span={8}>
                            <Button >
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    )
}
export default AddNewUser




