import React, { FormEvent } from "react";
import FormItem from "antd/lib/form/FormItem";
import { Button, Checkbox, Col, Form, Icon, Input, InputNumber, Modal, Row, Upload } from "antd";
import { AddUserFromProps } from "../ducks/types";
import TextArea from "antd/lib/input/TextArea";

class AddUsersForm extends React.Component<AddUserFromProps, any> {
    constructor(props: AddUserFromProps) {
        super(props);
        this.state = {
            isUserLogged: false,
            fileList: [],
            isSubField: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    private validateToNextPassword = (_rule: any, value: any, callback: any) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['password'], { force: true });
        }
        callback();
    };
    private compareToFirstPassword = (_rule: any, value: any, callback: any) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('confirmPassword')) {
            callback('Password not match. Please enter correct password.');
        } else {
            callback();
        }
    };
    onChange(e: any) {
        console.log(`checked = ${e.target.checked}`);
        this.setState({ isSubField: e.target.checked })
    }
    render() {
        const { fileList } = this.state;
        const { getFieldDecorator } = this.props.form;
        const fileProps = {
            onRemove: (file: any) => {
                this.setState((state: { fileList: string | any[]; }) => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.slice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: (file: any) => {
                this.setState({
                    fileList: [file],
                });
                return false;
            },
            fileList,
        };
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div >
                <Modal
                    title="Add"
                    visible={true}
                    footer={false}
                    width="70%"
                    closable={false}
                >
                    <Form
                        onSubmit={this.handleSubmit}
                        className="gx-signin-form gx-form-row0"
                    >
                        <Row>
                            <Col span={12}>
                                <label>Main Field</label>
                                <FormItem {...formItemLayout} label="Email Id">
                                    {getFieldDecorator("email", {
                                        rules: [
                                            {
                                                type: 'email',
                                                required: true,
                                                message: "Please enter email id",
                                            },
                                        ],
                                    })(<Input placeholder="example@gmail.com" />)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Password">
                                    {getFieldDecorator("password", {
                                        rules: [{ required: true, message: "Please input your password", whitespace: false },
                                        {
                                            validator: this.validateToNextPassword,
                                        }],
                                    })(<Input placeholder="password" />)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Confirm Password  ">
                                    {getFieldDecorator("confirmPassword", {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your password',
                                            },
                                            {
                                                validator: this.compareToFirstPassword,
                                            },
                                        ],
                                    })(<Input placeholder="Confirm Password" />)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Image upload  ">
                                    {getFieldDecorator("file", {
                                        rules: [{ required: true, message: "Please select image" }],
                                    })(
                                        <Upload {...fileProps} className="gx-ml-5" multiple={false}>
                                            <Button >
                                                <Icon type="upload" />

                                            Click
                                        </Button>
                                        </Upload>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <FormItem {...formItemLayout} >
                                    <Checkbox onChange={this.onChange}>​ Sub-Field</Checkbox>
                                </FormItem>
                            </Col>
                        </Row>
                        {this.state.isSubField === true && (<div> <Row>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Business Name">
                                    {getFieldDecorator("businessName", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please enter business name",
                                            },
                                        ],
                                    })(<Input placeholder="business name" />)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Business bio">
                                    {getFieldDecorator("businessBio", {
                                        rules: [{ required: true, message: "Please enter business bio", whitespace: false }
                                        ],
                                    })(<TextArea placeholder="business bio" />)}
                                </FormItem>
                            </Col>
                        </Row>
                            <Row>
                                <Col span={12}>
                                    <FormItem {...formItemLayout} label="Business Email Id">
                                        {getFieldDecorator("businessEmailId", {
                                            rules: [
                                                {
                                                    type: 'email',
                                                    required: true,
                                                    message: "Please enter business email id",
                                                },
                                            ],
                                        })(<Input placeholder="example@gmail.com" />)}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem {...formItemLayout} label="Business Contact Details">
                                        {getFieldDecorator("businessContactName", {
                                            rules: [{ required: true, message: "Please enter business contact details.", whitespace: false }
                                            ],
                                        })(<Input placeholder="business contact detail" />)}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <FormItem {...formItemLayout} label="Phone number">
                                        {getFieldDecorator("phoneNumber", {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: "Please enter phone number",
                                                },
                                            ],
                                        })(<InputNumber placeholder="0000000000" />)}
                                    </FormItem>
                                </Col>

                            </Row> <br></br>
                        </div>)}
                        <br></br>
                        <FormItem {...tailFormItemLayout}>
                            <Row className="gx-pb-0">
                                <Col span={18}></Col>
                                <Col span={3}>
                                    <button className="ant-btn ant-btn-primary ant-btn-background-ghost gx-pb-0 gx-mt-2">
                                        Add                                    </button>
                                </Col>
                                <Col span={3}>
                                    <button
                                        className="ant-btn ant-btn-danger ant-btn-background-ghost gx-pb-0 gx-mt-2"
                                        onClick={() => this.props.close()}
                                    >
                                        Cancel                                    </button>
                                </Col>
                            </Row>
                        </FormItem>
                    </Form>


                </Modal>
            </div>

        );
    }
    private handleSubmit(e: FormEvent) {
        e.preventDefault();

        this.props.form &&
            this.props.form.validateFields((err: any, values: { isUser: string; }) => {
                if (!err) {

                    Modal.success({
                        content: 'Information added.',
                    });
                    this.props.addUserDetail(values);
                    this.props.close();
                }
            });
    }
}

const addUserForms = Form.create<AddUserFromProps>()(AddUsersForm);

export default addUserForms
