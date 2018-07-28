import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submit: (File, caption, location, tags) => {
            return dispatch(
                photoActions.uploadPhoto(File, caption, location, tags)
            );
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Container);
