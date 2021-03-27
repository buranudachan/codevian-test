import React from "react";
import { Row, Col, Button } from "antd";
import { ApplicationState } from "../../app-ducks/types";
import { omit } from "lodash";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { UserComponentProps } from "./ducks/types";
import { UserActions } from "./ducks/userActions";
import userSelectors from "./ducks/userSelectors";
import AddUsersForm from "./components/addUserFrom"
import CardsListItem from "./components/userLists";

class UserDetial extends React.Component<UserComponentProps, any> {
    constructor(props: UserComponentProps) {
        super(props);
        const usersdata: any = localStorage.getItem("userData");
        const userDataParse = JSON.parse(usersdata);
        this.state = {
            userDetail: userDataParse === null ? [] : userDataParse,
            isAddUser: false
        }
    }
    addUser() {
        this.setState({ isAddUser: true })
    }
    closeAddUserForm() {
        this.setState({ isAddUser: false })
    }
    addUserDetail(data: any) {
        var userDetail = this.state.userDetail;
        userDetail.push(data)
        this.setState({
            userDetail: userDetail
        })
        localStorage.setItem('userData', JSON.stringify(userDetail))
    }
    public render() {
        const userDetail = this.state.userDetail;
        return (
            <React.Fragment>
                <Row>
                    <Col span={24}>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col span={21}>
                    </Col>
                    <Col span={3}>
                        <Button onClick={() => this.addUser()} style={{
                            backgroundColor: "#0000FF",
                        }}>Add </Button>
                    </Col>
                </Row>
                <div>
                    {userDetail.map((data: any, index: any) => (
                        <CardsListItem key={index} data={data} styleName="gx-card-list" />
                    ))}
                </div>
                { this.state.isAddUser ? <AddUsersForm addUserDetail={(data: any) => this.addUserDetail(data)} close={() => this.closeAddUserForm()} /> : ""}
            </React.Fragment >
        );
    }
}
const mapStateToProps = (state: ApplicationState) => {
    return {
        ...userSelectors.getUserData(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            ...bindActionCreators(omit(UserActions, ["Type"]) as any, dispatch),
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetial);
